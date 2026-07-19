import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Orders", href: "/orders" },
  { label: "AI Assistant", href: "/ai" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <section className={styles.brandSection}>
          <a className={styles.brand} href="/">
            CartFlow
          </a>
          <p className={styles.description}>
            A simpler way to discover products, manage orders, and shop with confidence.
          </p>
          <div className={styles.socialLinks} aria-label="Social media links">
            <a aria-label="CartFlow on Facebook" className={styles.socialLink} href="#facebook">
              f
            </a>
            <a aria-label="CartFlow on Instagram" className={styles.socialLink} href="#instagram">
              ◎
            </a>
            <a aria-label="CartFlow on X" className={styles.socialLink} href="#x">
              𝕏
            </a>
          </div>
        </section>

        <section className={styles.linkSection}>
          <h2 className={styles.heading}>Quick Links</h2>
          <ul className={styles.linkList}>
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a className={styles.link} href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.heading}>Contact</h2>
          <address className={styles.contactDetails}>
            <a className={styles.link} href="mailto:support@cartflow.com">
              support@cartflow.com
            </a>
            <a className={styles.link} href="tel:+18005550199">
              +1 (800) 555-0199
            </a>
            <p>Mon–Fri, 9:00 AM–6:00 PM</p>
          </address>
        </section>
      </div>

      <div className={styles.bottomBar}>
        <p>© {currentYear} CartFlow. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <a className={styles.link} href="#privacy">
            Privacy
          </a>
          <a className={styles.link} href="#terms">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
