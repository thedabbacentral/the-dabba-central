import React from "react";
import styles from "./CustomerReviews.module.scss";
import { RATING_STATS, CUSTOMER_REVIEWS } from "./constants";
import RatingCard from "./components/RatingCard/RatingCard";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";

const CustomerReviews = () => {
  return (
    <section className={styles.section} aria-labelledby="reviews-heading">
      <div className="container">
        {/* Division 1 - Header */}
        <header className={styles.header}>
          <div className={styles.eyebrow}>Customer Reviews</div>
          <h2 id="reviews-heading" className={styles.title}>
            What Our Customers Say
          </h2>
          <p className={styles.subtitle}>
            Thousands of happy customers enjoying fresh, homemade meals
            delivered daily
          </p>
        </header>

        {/* Division 2 - Rating statistics */}
        <div className={styles.statsGrid} aria-label="Ratings summary">
          {RATING_STATS.map((stat) => (
            <RatingCard key={stat.id} {...stat} />
          ))}
        </div>

        {/* Division 3 - Reviews Slider */}
        <div className={styles.sliderWrap}>
          <h3 className={styles.sliderTitle}>Featured Reviews</h3>
          <ReviewSlider
            items={CUSTOMER_REVIEWS}
            renderItem={(item) => <ReviewCard {...item} />}
            autoplayMs={5000}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
