import React, { useMemo, useState } from "react";
import styles from "./PricingSection.module.scss";
import { MEAL_FEATURES, PRICING_PLANS } from "./constants";
import { Toggle } from "@components";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import PricingCard from "./components/PricingCard/PricingCard";
import { Button } from "@components";

const PricingSection = () => {
  const [planType, setPlanType] = useState("monthly"); // default to Monthly as per screenshot
  const [selectedPlan, setSelectedPlan] = useState(2);

  const displayedPlans = useMemo(() => {
    return PRICING_PLANS.slice(0, 2);
  }, []);

  return (
    <section className={styles.pricing} aria-labelledby="pricing-heading">
      <div className="container">
        {/* Division 1: Header */}
        <header className={styles.header}>
          <h2 id="pricing-heading" className={styles.title}>
            Delicious Meals,{" "}
            <span className={styles.accent}>Delivered Daily</span>
          </h2>
          <p className={styles.subtitle}>
            Choose a plan that fits your lifestyle. Fresh, hygienic, and
            delivered in disposable trays.
          </p>
        </header>

        {/* Division 2: Meal Features */}
        <div className={styles.featuresGrid} aria-label="Meal features">
          {MEAL_FEATURES.map((f) => (
            <FeatureCard
              key={f.id}
              icon={f.icon}
              heading={f.heading}
              description={f.description}
            />
          ))}
        </div>

        {/* Division 3: Toggle */}
        <div className={styles.toggleRow}>
          <Toggle
            options={[
              { label: "Weekly Plans", value: "weekly" },
              { label: "Monthly Plans", value: "monthly" },
            ]}
            value={planType}
            onChange={setPlanType}
          />
        </div>

        {/* Division 4: Pricing Cards */}
        <div className={styles.cards}>
          {displayedPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              planType={planType}
              isSelected={selectedPlan === plan.id}
              onClick={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>

        {/* Division 5: Individual Meal Card */}
        <div className={styles.individualCard}>
          <h3 className={styles.individualTitle}>Order Individual Meals</h3>
          <div className={styles.priceRow} aria-label="Meal prices">
            <span>
              <span className={`${styles.dot} ${styles.green}`} /> Veg Meal —
              ₹150
            </span>
            <span>
              <span className={`${styles.dot} ${styles.red}`} /> Non-Veg Meal —
              ₹180
            </span>
          </div>
          <div className={styles.featuresRow}>
            <ul className={styles.individualList}>
              <li>
                <span className={`${styles.tick} ${styles.green}`} />
                No subscription required
              </li>
              <li>
                <span className={`${styles.tick} ${styles.green}`} />
                Order anytime
              </li>
              <li>
                <span className={`${styles.tick} ${styles.green}`} />
                Same hygienic packaging
              </li>
            </ul>
            <div className={styles.individualCta}>
              <Button size="md">Order Now</Button>
            </div>
          </div>
        </div>

        {/* Division 6: Disclaimer */}
        <aside
          className={styles.notice}
          role="note"
          aria-label="Important notice"
        >
          <span className={styles.noticeIcon} aria-hidden>
            !
          </span>
          <strong>Important:</strong>&nbsp;Delivery charges are excluded and
          will be calculated separately based on your location.
        </aside>
      </div>
    </section>
  );
};

export default PricingSection;
