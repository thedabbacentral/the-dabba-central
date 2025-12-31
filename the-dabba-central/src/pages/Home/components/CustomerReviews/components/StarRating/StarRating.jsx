import React from "react";
import styles from "./StarRating.module.scss";

const StarRating = ({ value = 5, outOf = 5 }) => {
  const fullStars = Math.floor(value);
  const hasHalf = value - fullStars >= 0.5;
  const empty = outOf - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={styles.row} aria-label={`${value} out of ${outOf} stars`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`f${i}`} className={`${styles.star} ${styles.full}`} />
      ))}
      {hasHalf ? <span className={`${styles.star} ${styles.half}`} /> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className={`${styles.star} ${styles.empty}`} />
      ))}
    </div>
  );
};

export default StarRating;


