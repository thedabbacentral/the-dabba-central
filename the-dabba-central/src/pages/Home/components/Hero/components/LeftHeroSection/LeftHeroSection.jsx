import React from "react";
import styles from "./LeftHeroSection.module.scss";

import { Button } from "@components";
import { CheckIcon, ClockIcon, UtensilsIcon, Star, Spark } from "@icons";

import Badge from "./components/Badge/Badge";
import Feature from "./components/Feature/Feature";

const LeftHeroSection = () => {
  return (
    <div className={styles.left}>
      <Badge />
      <h1 className={styles.title}>
        Try Our Delicious <span className={styles.accent}>Tiffin Service</span>{" "}
        Free!
      </h1>
      <p className={styles.subtitle}>
        Experience homemade goodness delivered to your doorstep. Get your first
        meal absolutely free – no strings attached!
      </p>

      <div className={styles.features}>
        <Feature
          icon={<CheckIcon />}
          color="#25c05a"
          title="Free Trial Meal"
          description="Try before you subscribe – completely free"
        />
        <Feature
          icon={<ClockIcon />}
          color="#3d7eff"
          title="Fresh Daily"
          description="Hot meals prepared and delivered every day"
        />
        <Feature
          icon={<UtensilsIcon />}
          color="#7a3dff"
          title="Multiple Options"
          description="Choose from 3CP, 5CP, or 8CP meal trays"
        />
      </div>

      <div className={styles.ctaRow}>
        <Button as="a" href="#order" size="lg">
          <span className={styles.spark}>
            <Spark />
          </span>
          Claim Your Free Meal
        </Button>
        <Button as="a" href="#menu" variant="outline" size="lg">
          View Menu
        </Button>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statValue}>5000+</div>
          <div className={styles.statLabel}>Happy Customers</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <div className={styles.statValue}>4.9/5</div>
          <div className={styles.statLabel}>Average Rating</div>
        </div>
      </div>
    </div>
  );
};

export default LeftHeroSection;
