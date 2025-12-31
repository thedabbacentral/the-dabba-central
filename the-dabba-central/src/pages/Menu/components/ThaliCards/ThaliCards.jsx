import React from "react";
import styles from "./ThaliCards.module.scss";
import { THALI_TYPES } from "../../../Plans/constants";
import { THALI_BULLETS } from "../../constants";
import { CheckCircle } from "@icons";

const ThaliCards = ({ thali, onChange }) => {
  return (
    <>
      <div className={styles.groupTitle}>Choose Your Thali</div>
      <div className={styles.thaliGrid}>
        {THALI_TYPES.map((t) => (
          <button
            key={t.id}
            className={[
              styles.thaliCard,
              thali === t.id ? styles.active : "",
            ].join(" ")}
            onClick={() => onChange(t.id)}
            aria-pressed={thali === t.id}
            type="button"
          >
            {t.popular ? <span className={styles.chip}>Popular</span> : null}
            {thali === t.id ? (
              <CheckCircle className={styles.checkCircle} size={20} />
            ) : null}
            <div className={styles.cardHeader}>
              <span
                className={[
                  styles.iconCircle,
                  thali === t.id ? styles.iconCircleActive : "",
                ].join(" ")}
              >
                {t.icon}
              </span>
            </div>
            <div className={styles.thaliTitle}>{t.name}</div>
            <div className={styles.thaliDesc}>{t.description}</div>
            <ul className={styles.bullets}>
              {(THALI_BULLETS[t.id] || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </button>
        ))}
      </div>
    </>
  );
};

export default ThaliCards;


