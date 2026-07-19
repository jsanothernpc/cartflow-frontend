import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
import styles from "./FeaturedProducts.module.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Chosen for you</p>
          <h2>Featured Products</h2>
          <p>Explore popular picks selected to make every day a little better.</p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <article className={styles.card} key={product.id}>
              <div className={styles.imageContainer}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.productImage}
                />
              </div>

              <div className={styles.details}>
                <p className={styles.category}>
                  {product.category.toUpperCase()}
                </p>

                <h3>{product.name}</h3>

                <div className={styles.productMeta}>
                  <strong>
                    ₹{Number(product.price).toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>
                </div>

                <button className={styles.addButton} type="button">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;