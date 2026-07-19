import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getCart } from "../services/cartService";
import paymentAxios from "../api/paymentAxios";
import toast from "react-hot-toast";
import styles from "./Checkout.module.css";

function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login first.");
      return;
    }

    try {
      setLoading(true);

      const loaded = await loadRazorpayScript();

      if (!loaded) {
        toast.error("Unable to load Razorpay.");
        return;
      }

      const cart = await getCart(user.id);

      if (!cart.cartItems.length) {
        toast.error("Cart is empty.");
        return;
      }

      const orderRequest = {
        email: user.email,
        items: cart.cartItems.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        })),
      };

      const { data } = await paymentAxios.post(
        "/payment/create",
        orderRequest
      );

      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "CartFlow",
        description: "Order Payment",
        order_id: data.razorpayOrderId,

        handler: async function (response) {
          try {
            await paymentAxios.post("/payment/verify", {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              email: user.email,
            });

            toast.success("Payment Successful!");

            navigate("/orders");
          } catch (error) {
            console.error(error);
            toast.error("Payment verification failed.");
          }
        },

        prefill: {
          name: user.name,
          email: user.email,
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function () {
        toast.error("Payment Failed.");
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("Checkout failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Checkout</h1>

        <p>Review your cart and complete your payment.</p>

        <button
          className={styles.button}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay with Razorpay"}
        </button>
      </div>
    </section>
  );
}

export default Checkout;