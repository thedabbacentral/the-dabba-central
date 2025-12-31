import React from "react";
import styles from "./MenuBanner.module.scss";
import { Button } from "@components";

const MenuBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.label}>
        <span aria-hidden>🎁</span> Limited Time Offer
      </div>
      <h2 className={styles.heading}>Ready to Experience Home–Cooked Meals?</h2>
      <p className={styles.sub}>
        Join thousands of satisfied customers enjoying fresh, delicious tiffin
        service. Subscribe today and get your first meal absolutely free!
      </p>
      <div className={styles.ctaRow}>
        <Button
          className={styles.btn}
          size="lg"
          onClick={() => (window.location.href = "/our-plans")}
        >
          Subscribe Now
        </Button>
        <Button
          className={styles.btn}
          size="lg"
          variant="outline"
          onClick={() => (window.location.href = "/our-plans")}
        >
          View Plans & Pricing
        </Button>
      </div>
      <div className={styles.footNote}>
        No commitment required • Cancel anytime • Free delivery
      </div>
    </div>
  );
};

export default MenuBanner;


