import React from "react";
import styles from "./CTASection.module.scss";
import { Button } from "@components";

const CTASection = () => {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.panel}>
          <h2 id="cta-heading" className={styles.heading}>
            Ready to Experience Home-Cooked Meals?
          </h2>
          <p className={styles.subheading}>
            Join thousands of satisfied customers enjoying fresh, delicious
            tiffin service
          </p>
          <Button
            size="md"
            variant="outline"
            className={styles.ctaButton}
            onClick={() => {
              window.location.href = "/our-plans";
            }}
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
