import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";
import { getCart } from "../../../services/cartService";
import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Orders", to: "/orders" },
  { label: "AI Assistant", to: "/ai" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (user) {
      fetchCartCount();
    } else {
      setCartCount(0);
    }
  }, [user]);

  const fetchCartCount = async () => {
    try {
      const cart = await getCart(user.id);

      if (cart && cart.cartItems) {
        setCartCount(cart.cartItems.length);
      } else {
        setCartCount(0);
      }
    } catch (error) {
      console.error(error);
      setCartCount(0);
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link className={styles.logo} to="/" onClick={closeMenu}>
          CartFlow
        </Link>

        <button
          aria-controls="cartflow-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
        >
          ☰
        </button>

        <nav
          aria-label="Primary navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          id="cartflow-navigation"
        >
          <div className={styles.navLinks}>
            {navigationLinks.map(({ label, to }) => (
              <Link
                key={to}
                className={styles.navLink}
                to={to}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              aria-label={
                theme === "light"
                  ? "Switch to dark theme"
                  : "Switch to light theme"
              }
              className={styles.themeButton}
              onClick={toggleTheme}
              type="button"
            >
              <span aria-hidden="true">
                {theme === "light" ? "🌙" : "☀️"}
              </span>
            </button>

            <Link
  to="/products"
  onClick={closeMenu}
  className={styles.iconButton}
  aria-label="Search products"
>
  🔍
</Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className={styles.cartButton}
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <span aria-hidden="true">🛒</span>

              <span className={styles.cartBadge}>
                {cartCount}
              </span>
            </Link>

            {user ? (
              <>
                <span className={styles.userName}>
                  Hi, {user.name}
                </span>

                <button
                  className={styles.loginButton}
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className={styles.loginButton}
                  to="/login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  className={styles.registerButton}
                  to="/register"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;