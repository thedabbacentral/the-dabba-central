import React from "react";
import styles from "./FeatureCard.module.scss";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
};

export default FeatureCard;
