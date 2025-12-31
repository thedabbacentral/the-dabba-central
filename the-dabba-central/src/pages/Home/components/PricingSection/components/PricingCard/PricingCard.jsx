import React from "react";
import styles from "./PricingCard.module.scss";
import { Button } from "@components";

const PricingCard = ({ plan, planType, isSelected, onClick }) => {
  const price = planType === "weekly" ? plan.weeklyPrice : plan.monthlyPrice;
  const meals =
    planType === "weekly" ? plan.mealsCountWeekly : plan.mealsCountMonthly;
  const perLabel = planType === "weekly" ? "/week" : "/month";

  return (
    <article
      className={[
        styles.card,
        plan.isPopular ? styles.popular : "",
        isSelected ? styles.selected : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${plan.name} plan`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {plan.isPopular && plan.badgeText ? (
        <div className={styles.badge}>{plan.badgeText}</div>
      ) : null}

      <header className={styles.head}>
        <div className={styles.nameRow}>
          <h3 className={styles.name}>{plan.name}</h3>
          <span className={`${styles.dot} ${styles.green}`} aria-hidden />
          <span className={`${styles.dot} ${styles.red}`} aria-hidden />
        </div>
        {plan.subtitle ? (
          <div className={styles.subtitle}>{plan.subtitle}</div>
        ) : null}
        <div className={styles.priceRow}>
          <div className={styles.price} aria-live="polite">
            {price}
          </div>
          <div className={styles.per}>{perLabel}</div>
        </div>
        <div className={styles.meals}>{meals}</div>
      </header>

      <div className={styles.ctaRow}>
        <Button
          size="md"
          variant={isSelected ? "primary" : "outline"}
          className={styles.fullWidth}
        >
          {isSelected ? "Selected Plan" : "Select Plan"}
        </Button>
      </div>

      <ul className={styles.features}>
        {plan.features.map((item, idx) => (
          <li key={idx}>
            <span className={styles.tick} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingCard;
