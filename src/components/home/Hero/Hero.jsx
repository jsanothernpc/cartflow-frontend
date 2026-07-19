import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>One place. Every find.</p>
          <h1>Shopping that moves with you.</h1>
          <p className={styles.description}>
            Discover everyday essentials, thoughtful finds, and fresh deals in a shopping experience made simple.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/products">
              Shop Now
            </Link>
            <Link className={styles.secondaryButton} to="/products">
              Explore Products
            </Link>
          </div>
        </div>

        <div aria-label="Abstract shopping bag illustration" className={styles.illustration} role="img">
          <div className={styles.orbit} />
          <div className={styles.productCardOne} />
          <div className={styles.productCardTwo} />
          <div className={styles.bag}>
            <span className={styles.handle} />
            <span className={styles.bagLine} />
            <span className={styles.bagDot} />
          </div>
          <div className={styles.discountTag}>New</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
