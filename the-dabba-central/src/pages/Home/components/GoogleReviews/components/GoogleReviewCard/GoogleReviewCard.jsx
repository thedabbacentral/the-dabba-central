import React from "react";
import styles from "./GoogleReviewCard.module.scss";
import StarRating from "../../../CustomerReviews/components/StarRating/StarRating";
import { GoogleLogo } from "@icons";

const GoogleReviewCard = ({ name, date, rating, review, avatar, verified }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.user}>
          <img
            className={styles.avatar}
            src={avatar}
            alt={`${name} avatar`}
            loading="lazy"
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
        <GoogleLogo />
      </header>
      <div className={styles.rating}>
        <StarRating value={rating} />
      </div>
      <p className={styles.text}>{review}</p>
    </article>
  );
};

export default GoogleReviewCard;
