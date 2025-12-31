import React from "react";

import styles from "./HowItWorks.module.scss";

import { HOW_IT_WORKS_STEPS } from "./constants";
import StepCard from "./components/StepCard/StepCard";

const HowItWorks = () => {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className="container">
        <div className={styles.panel}>
          <header className={styles.header}>
            <h2 id="how-it-works-heading" className={styles.title}>
              How It Works
            </h2>
            <p className={styles.subtitle}>Get started in 3 simple steps</p>
          </header>

          <div className={styles.grid}>
            {HOW_IT_WORKS_STEPS.map((step) => (
              <StepCard
                key={step.id}
                number={step.id}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
