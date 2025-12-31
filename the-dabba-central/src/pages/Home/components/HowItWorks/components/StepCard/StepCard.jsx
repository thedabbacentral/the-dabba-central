import React from "react";
import styles from "./StepCard.module.scss";

const StepCard = ({ number, title, description }) => {
  return (
    <article className={styles.card}>
      <div aria-hidden className={styles.badge}>
        <span className={styles.num}>{number}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
};

export default StepCard;
