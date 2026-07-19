import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserOrders } from "../services/orderService";
import styles from "./Orders.module.css";

function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const data = await getUserOrders(user.id);
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  if (!user) {
    return (
      <section className={styles.empty}>
        <h2>Please login first.</h2>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className={styles.empty}>
        <h2>No Orders Yet</h2>
        <p>Your orders will appear here after checkout.</p>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>My Orders</h1>

        {orders.map((order) => (
          <div className={styles.card} key={order.id}>
            <div className={styles.header}>
              <h2>Order #{order.id}</h2>

              <span className={styles.status}>
                {order.status}
              </span>
            </div>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.orderDate).toLocaleDateString("en-IN")}
            </p>

            <div className={styles.items}>
              {order.orderItemDtos.map((item, index) => (
                <div className={styles.item} key={index}>
                  <span>{item.productName}</span>

                  <span>Qty : {item.quantity}</span>

                  <span>
                    ₹{item.productPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>

            <h3>
              Total : ₹{order.totalAmount.toLocaleString("en-IN")}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Orders;