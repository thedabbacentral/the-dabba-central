import React from "react";
import styles from "./Testimonials.module.scss";
import Icon from "../../../../icons/Icon";
import { CP_TESTIMONIALS, CP_TESTIMONIALS_HEADING } from "./constants";

const Stars = ({ count = 5 }) => {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={18} color="#ff8a00" aria-hidden />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{CP_TESTIMONIALS_HEADING}</h2>
        <div className={styles.grid}>
          {CP_TESTIMONIALS.map((item, idx) => (
            <article key={idx} className={styles.card}>
              <Stars count={item.rating} />
              <p className={styles.quote}>"{item.quote}"</p>
              <div className={styles.footer}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.meta}>
                  {item.role}, {item.company}
                </div>
              </div>
              <div className={styles.quotes} aria-hidden>
                ❝❞
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
