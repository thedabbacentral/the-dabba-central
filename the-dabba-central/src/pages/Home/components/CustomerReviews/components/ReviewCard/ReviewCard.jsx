import React from "react";
import styles from "./ReviewCard.module.scss";
import StarRating from "../StarRating/StarRating";

const ReviewCard = ({ name, designation, location, image, rating, review }) => {
  return (
    <article className={styles.card} aria-label={`Review by ${name}`}>
      <div className={styles.quotes} aria-hidden>
        ❝❞
      </div>
      <p className={styles.review}>{review}</p>
      <div className={styles.footer}>
        <div className={styles.user}>
          <img className={styles.avatar} src={image} alt={`${name} avatar`} />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.meta}>
              {designation}
              {location ? ` · ${location}` : ""}
            </div>
          </div>
        </div>
        <StarRating value={rating} />
      </div>
    </article>
  );
};

export default ReviewCard;
