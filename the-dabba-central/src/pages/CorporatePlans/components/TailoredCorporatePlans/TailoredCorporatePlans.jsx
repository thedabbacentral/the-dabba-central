import React from "react";
import styles from "./TailoredCorporatePlans.module.scss";

import { CORPORATE_PLANS } from "./constants";

import CorporatePlanCard from "./components/CorporatePlanCard/CorporatePlanCard";

const TailoredCorporatePlans = () => {
  return (
    <section className={styles.section} aria-labelledby="tcp-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="tcp-heading" className={styles.title}>
            Tailored Corporate Plans
          </h2>
          <p className={styles.subtitle}>
            We offer flexible meal solutions that adapt to your team's size and
            schedule.
          </p>
        </header>

        <div className={styles.grid}>
          {CORPORATE_PLANS.map((plan) => (
            <CorporatePlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoredCorporatePlans;
