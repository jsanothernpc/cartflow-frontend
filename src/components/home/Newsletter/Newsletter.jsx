import { useState } from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
  }

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div>
          <p className={styles.eyebrow}>Stay in the loop</p>
          <h2>Deals, drops, and shopping inspiration.</h2>
          <p className={styles.description}>Subscribe for product updates and exclusive offers sent to your inbox.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="newsletter-email">Email address</label>
          <div className={styles.inputGroup}>
            <input id="newsletter-email" onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required type="email" value={email} />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
