import React from "react";
import styles from "./RatingCard.module.scss";

const iconMap = {
  star: "⭐",
  users: "👥",
  medal: "🏅",
};

const RatingCard = ({ icon, value, label, subtitle }) => {
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden>
        <span>{iconMap[icon] || "⭐"}</span>
      </div>
      <div className={styles.value}>{value}</div>
      {label ? <div className={styles.label}>{label}</div> : null}
      {subtitle ? <div className={styles.subtitle}>{subtitle}</div> : null}
    </article>
  );
};

export default RatingCard;


