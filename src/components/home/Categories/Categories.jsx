import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

const categories = [
  { name: "Electronics", description: "Smart picks for work and play.", icon: "💻" },
  { name: "Fashion", description: "Fresh styles for every day.", icon: "👕" },
  { name: "Grocery", description: "Pantry essentials, delivered simply.", icon: "🛒" },
  { name: "Home & Kitchen", description: "Comfort for every corner.", icon: "🏠" },
  { name: "Beauty", description: "Feel-good care and self-care.", icon: "✨" },
  { name: "Sports", description: "Gear up for your next move.", icon: "⚽" },
];

function Categories() {
  return (
    <section className={styles.section} id="categories">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Find your favorites</p>
          <h2>Shop by Category</h2>
          <p>Explore everyday essentials and exciting new finds across our most-loved collections.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <article className={styles.card} key={category.name}>
              <span aria-hidden="true" className={styles.icon}>{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link className={styles.exploreButton} to="/products">
                Explore <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
