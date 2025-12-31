import React from "react";
import styles from "./HassleFreeExperience.module.scss";
import { HASSLE_FREE_EXPERIENCE_FEATURES } from "./constants";
import utensils from "../../../../icons/assets/utensils_icon.svg?url";

const HassleFreeExperience = () => {
  return (
    <section className={styles.section} aria-labelledby="hfe-heading">
      <img src={utensils} alt="" aria-hidden className={styles.utensils} />
      <div className="container">
        <header className={styles.header}>
          <h2 id="hfe-heading" className={styles.title}>
            Hassle-Free Experience
          </h2>
          <p className={styles.subtitle}>
            From inquiry to delivery, we've streamlined every step.
          </p>
        </header>

        <div className={styles.grid}>
          {HASSLE_FREE_EXPERIENCE_FEATURES.map((item) => (
            <article key={item.id} className={styles.item}>
              <div className={styles.num} aria-hidden>
                {item.number}
              </div>
              <h3 className={styles.itemTitle}>{item.heading}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HassleFreeExperience;
