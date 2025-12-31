import React from "react";
import styles from "./FeatureCard.module.scss";

const iconMap = {
  leaf: "🍃",
  truck: "🚚",
  shield: "🛡️",
  star: "⭐",
};

const FeatureCard = ({ icon, heading, description }) => {
  const symbol = iconMap[icon] || "✨";
  return (
    <article className={styles.card}>
      <div className={styles.icon} aria-hidden>
        <span>{symbol}</span>
      </div>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.desc}>{description}</p>
    </article>
  );
};

export default FeatureCard;
