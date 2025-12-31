import React from "react";
import styles from "./WhyChooseSection.module.scss";
import { WHY_CHOOSE_DATA } from "./constants";
import FeatureCard from "./components/FeatureCard/FeatureCard";

const WhyChooseSection = () => {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        <header className={styles.header}>
          <h2 id="why-heading" className={styles.title}>
            Why Choose The Dabba Central?
          </h2>
          <p className={styles.subtitle}>
            We understand the specific needs of corporate environments and
            high-growth startups in Bangalore.
          </p>
        </header>
        <div className={styles.grid}>
          {WHY_CHOOSE_DATA.map((f) => (
            <FeatureCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
