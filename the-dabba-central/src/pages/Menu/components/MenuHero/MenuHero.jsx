import React from "react";
import styles from "./MenuHero.module.scss";

const MenuHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.pill}>
        <span aria-hidden>🍽️</span> Weekly Rotating Menu
      </div>
      <h1 className={styles.title}>
        Explore Our <span className={styles.accent}>Delicious Menu</span>
      </h1>
      <p className={styles.subtitle}>
        Fresh, hygienic, North Indian homemade meals prepared daily. Choose your
        thali size and explore what we serve each day.
      </p>
    </div>
  );
};

export default MenuHero;


