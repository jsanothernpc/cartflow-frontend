import { Link } from "react-router-dom";
import styles from "./OfferBanner.module.css";

const countdownItems = ["Days", "Hours", "Minutes"];

function OfferBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Limited-time offer</p>
          <h2>Summer Sale is Live!</h2>
          <p className={styles.subtitle}>Save up to 50% on selected products.</p>

          <div aria-label="Sale countdown" className={styles.countdown}>
            {countdownItems.map((item) => (
              <div className={styles.countdownItem} key={item}>
                <strong>00</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link className={styles.button} to="/products">
            Shop Deals
          </Link>
        </div>

        <div aria-label="Abstract shopping illustration" className={styles.illustration} role="img">
          <span className={styles.sun} />
          <span className={styles.bag}>
            <span className={styles.handle} />
            <span className={styles.bagMark} />
          </span>
          <span className={styles.card} />
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;
