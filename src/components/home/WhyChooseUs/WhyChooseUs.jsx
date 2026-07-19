import styles from "./WhyChooseUs.module.css";

const features = [
  { icon: "🚚", title: "Fast Delivery", description: "Get your orders delivered quickly and safely." },
  { icon: "🔒", title: "Secure Payments", description: "Protected payments with Razorpay integration." },
  { icon: "🔄", title: "Easy Returns", description: "Hassle-free returns and refunds." },
  { icon: "🎧", title: "24/7 Customer Support", description: "Our support team is always available." },
];

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>The CartFlow difference</p>
          <h2>Why Shop With CartFlow?</h2>
          <p>Every detail is designed to make your shopping experience easier and more reliable.</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span aria-hidden="true" className={styles.icon}>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
