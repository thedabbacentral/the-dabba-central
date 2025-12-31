import React from "react";
import styles from "./Feature.module.scss";

const Feature = ({ icon, title, description, color }) => (
  <div className={styles.feature}>
    <div className={styles.icon} style={{ color }}>
      {icon}
    </div>
    <div className={styles.featureText}>
      <div className={styles.featureTitle}>{title}</div>
      <div className={styles.featureDesc}>{description}</div>
    </div>
  </div>
);

export default Feature;
