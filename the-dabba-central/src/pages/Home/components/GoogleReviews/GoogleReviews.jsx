import React from "react";
import styles from "./GoogleReviews.module.scss";
import { GOOGLE_REVIEWS } from "./constants";
import GoogleReviewCard from "./components/GoogleReviewCard/GoogleReviewCard";
import { Button } from "@components";
import { GoogleLogo, ExternalLink, TrendUp } from "@icons";

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
              <Button
                as="a"
                href="https://www.google.com/maps/place/The+Dabba+Central+(+Tiffin+Service+)/@12.9136368,77.6090544,17z/data=!4m8!3m7!1s0x3bae1577d3d3ffb5:0x36a3a0352a07ac22!8m2!3d12.9136368!4d77.6090544!9m1!1b1!16s%2Fg%2F11w508jbm_!5m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
                size="md"
                variant="bluePill"
                className={styles.viewAllBtn}
              >
                View All Reviews
                <span className={styles.viewAllIcon} aria-hidden>
                  <ExternalLink />
                </span>
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
            <Button
              as="a"
              href="https://g.page/r/CSKsByo1oKM2EAE/review"
              size="md"
              variant="outlineBluePill"
              className={styles.leaveReviewBtn}
            >
              <span className={styles.leaveReviewIcon} aria-hidden>
                <TrendUp />
              </span>
              Leave a Google Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
