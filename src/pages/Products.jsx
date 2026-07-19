import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";
import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "nameAsc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "nameDesc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;

      default:
        break;
    }

    return filtered;
  }, [products, search, category, sortBy]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>All Products</h1>
          <p>Discover our latest collection.</p>

          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className={styles.categorySelect}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            className={styles.categorySelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="priceLow">Price : Low → High</option>
            <option value="priceHigh">Price : High → Low</option>
            <option value="nameAsc">Name : A → Z</option>
            <option value="nameDesc">Name : Z → A</option>
          </select>
        </div>

        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article className={styles.card} key={product.id}>
                <div className={styles.imageContainer}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.details}>
                  <p className={styles.category}>{product.category}</p>

                  <h3>{product.name}</h3>

                  <strong className={styles.price}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <Link
                    to={`/products/${product.id}`}
                    className={styles.button}
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noProducts}>
              <h2>No Products Found</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;