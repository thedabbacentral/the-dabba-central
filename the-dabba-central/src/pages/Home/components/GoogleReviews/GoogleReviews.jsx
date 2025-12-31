import React from "react";
import styles from "./GoogleReviews.module.scss";
import { GOOGLE_REVIEWS } from "./constants";
import GoogleReviewCard from "./components/GoogleReviewCard/GoogleReviewCard";
import { Button } from "@components";
import { GoogleLogo } from "@icons";

const GoogleReviews = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="google-reviews-heading"
    >
      <div className="container">
        <div className={styles.panel}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headingLeft}>
              <span className={styles.logoWrap} aria-hidden>
                <GoogleLogo />
              </span>
              <div>
                <h2 id="google-reviews-heading" className={styles.title}>
                  Google Reviews
                </h2>
                <p className={styles.subtitle}>
                  See what our customers say on Google
                </p>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <Button as="a" href="#" size="md">
                View All Reviews
              </Button>
            </div>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {GOOGLE_REVIEWS.map((r) => (
              <GoogleReviewCard key={r.id} {...r} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className={styles.footerCta}>
            <p className={styles.sharePrompt}>Want to share your experience?</p>
            <Button as="a" href="#" size="md" variant="outline">
              Leave a Google Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
