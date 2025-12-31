import React from "react";
import styles from "./CorporatePlanCard.module.scss";
import { CheckIcon } from "@icons";

const CorporatePlanCard = ({ plan }) => {
  return (
    <article className={`${styles.card}`} aria-label={`${plan.name} plan`}>
      <h3 className={styles.name}>{plan.name}</h3>
      <p className={styles.desc}>{plan.description}</p>

      <ul className={styles.features}>
        {plan.features.map((f, i) => (
          <li key={i}>
            <span className={styles.tick}>
              <CheckIcon size={16} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <span className={styles.label}>Options</span>
        <span className={styles.tag} aria-label="plan tag">
          {plan.tag}
        </span>
      </div>
    </article>
  );
};

export default CorporatePlanCard;
