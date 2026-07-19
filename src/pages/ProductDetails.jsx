import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import styles from "./ProductDetails.module.css";
import toast from "react-hot-toast";
import { addToCart } from "../services/cartService";
import { useAuth } from "../context/AuthContext";
function ProductDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }
  const handleAddToCart = async () => {
  if (!user) {
    toast.error("Please login first!");
    return;
  }

  try {
    await addToCart(user.id, product.id, 1);

    toast.success("Product added to cart!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to add product.");
  }
};

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.productImage}
          />
        </div>

        <div className={styles.details}>
          <p className={styles.category}>{product.category}</p>

          <h1>{product.name}</h1>

          <p className={styles.description}>
            {product.description}
          </p>

          <h2 className={styles.price}>
            ₹{product.price.toLocaleString("en-IN")}
          </h2>

          <button
            className={styles.button}
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;