import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getCart, removeFromCart } from "../services/cartService";
import toast from "react-hot-toast";
import styles from "./Cart.module.css";

function Cart() {
  const { user } = useAuth();

  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      const data = await getCart(user.id);
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async (cartItemId) => {
    try {
      await removeFromCart(cartItemId);

      toast.success("Item removed successfully!");

      fetchCart();
    } catch (error) {
      console.error(error);

      toast.error("Failed to remove item.");
    }
  };

  if (!user) {
    return <h2>Please login first.</h2>;
  }

  if (!cart || cart.cartItems.length === 0) {
    return (
      <section className={styles.empty}>
        <h2>Your cart is empty</h2>

        <Link to="/products" className={styles.shopButton}>
          Continue Shopping
        </Link>
      </section>
    );
  }

  const total = cart.cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Your Shopping Cart</h1>

        {cart.cartItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={`/${item.product.imageUrl}`}
              alt={item.product.name}
              className={styles.image}
            />

            <div className={styles.info}>
              <h3>{item.product.name}</h3>

              <p>{item.product.category}</p>

              <strong>
                ₹{item.product.price.toLocaleString("en-IN")}
              </strong>

              <p>Quantity : {item.quantity}</p>
            </div>

            <button
              className={styles.removeButton}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <div className={styles.summary}>
          <h2>
            Total : ₹{total.toLocaleString("en-IN")}
          </h2>

          <Link
            to="/checkout"
            className={styles.checkoutButton}
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;  