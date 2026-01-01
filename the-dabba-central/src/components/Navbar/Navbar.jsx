import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Button from "../Button/Button";
import { navItems } from "./navItems";

const Logo = () => (
  <img
    src="/Logo_Horizontal_Light.png"
    alt="The Dabba Central"
    className={styles.logo}
  />
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
          {!open ? (
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
          ) : (
            <button
              className={styles.close}
              aria-label="Close Menu"
              onClick={close}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div
        className={`${styles.drawer} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.drawerInner}>
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
          <div className={styles.drawerCta}>
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
