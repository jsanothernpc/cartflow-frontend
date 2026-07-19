import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const navLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`;

  return (
    <header className={styles.navbar}>
      <Link className={styles.brandTitle} to="/" onClick={closeMenu}>
        CartFlow
      </Link>

      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={styles.menuButton}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        <svg aria-hidden="true" className={styles.menuIcon} viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" />
          )}
        </svg>
      </button>

      <nav
        aria-label="Primary navigation"
        className={`${styles.navItems} ${isMenuOpen ? styles.navItemsOpen : ""}`}
        id="primary-navigation"
      >
        <div className={styles.linkGroup}>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/" end>
            Home
          </NavLink>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/products">
            Products
          </NavLink>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/cart">
            Cart
          </NavLink>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/orders">
            Orders
          </NavLink>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/ai">
            AI Assistant
          </NavLink>
        </div>

        <div className={styles.authGroup}>
          <NavLink className={navLinkClass} onClick={closeMenu} to="/login">
            Login
          </NavLink>
          <Link className={styles.authButton} onClick={closeMenu} to="/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
