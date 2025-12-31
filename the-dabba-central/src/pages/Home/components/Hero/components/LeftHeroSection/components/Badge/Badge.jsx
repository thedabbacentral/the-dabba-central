import React from "react";

import styles from "./Badge.module.scss";

import { Star } from "@icons";

const Badge = () => (
  <div className={styles.badge}>
    <Star />
    <span>Limited Time Offer</span>
  </div>
);

export default Badge;
