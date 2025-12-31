import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import { navItems } from "./navItems";

const Logo = () => (
  <div className={styles.logo}>
    <span className="visually-hidden">The Dabba Central</span>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((p) => !p);
  const close = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link to="/" className={styles.brand} aria-label="Home">
            <Logo />
          </Link>
          <nav className={styles.navDesktop} aria-label="Main">
            {navItems.map((item) => (
              <div
                key={item.label}
                onClick={() => navigate(item.to)}
                className={`${styles.link} ${
                  window.location.pathname === item.to ? styles.active : ""
                }`}
              >
                {item.label}
              </div>
            ))}
          </nav>
          <div className={styles.ctaDesktop}>
            <Button
              as="a"
              onClick={() => navigate("/our-plans")}
              variant="primary"
              size="md"
            >
              Order Now
            </Button>
          </div>
          <button
            className={styles.hamburger}
            aria-label="Open Menu"
            aria-expanded={open}
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.overlay} ${open ? styles.open : ""}`}>
        <div className={styles.overlayInner}>
          <div className={styles.overlayTop}>
            <Link
              to="/"
              className={styles.brand}
              aria-label="Home"
              onClick={close}
            >
              <Logo />
            </Link>
            <button
              className={styles.close}
              aria-label="Close Menu"
              onClick={close}
            >
              ×
            </button>
          </div>
          <nav className={styles.navMobile} aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={styles.mobileLink}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.overlayCta}>
            <Button as="a" href="/our-plans" size="lg" onClick={close}>
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
