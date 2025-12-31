import React from "react";
import styles from "./DayDetails.module.scss";
import { LeafIcon } from "@icons";

const DayDetails = ({
  dayLabel,
  meal,
  thaliLabel,
  preference,
  sabzis,
  staples,
  accompaniments,
}) => {
  return (
    <div className={styles.dayCard}>
      <div className={styles.dayHead}>
        <div className={styles.title}>
          {dayLabel}'s {meal === "lunch" ? "Lunch" : "Dinner"}
          <div className={styles.subTitle} style={{ color: "#6b7a8c" }}>
            {thaliLabel}
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>
            {preference === "veg" ? (
              <>
                <LeafIcon size={14} /> Vegetarian
              </>
            ) : (
              "Non-Vegetarian"
            )}
          </div>
          <div className={[styles.tag, styles.muted].join(" ")}>
            {meal === "lunch" ? "Lunch" : "Dinner"}
          </div>
        </div>
      </div>
      <div className={styles.dayBody}>
        <div className={styles.infoGrid}>
          <div className={styles.infoBox}>
            <div className={styles.label}>Sabzi ({sabzis.length})</div>
            <div className={styles.sabziList}>
              {sabzis.map((s, i) => (
                <div key={i} className={styles.sabziItem}>
                  <img
                    className={styles.thumb}
                    src={s.image}
                    alt={s.name}
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                  <div className={styles.sabziMeta}>
                    <div className={styles.sabziTitle}>{s.name}</div>
                    <div className={styles.sabziType}>({s.type})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.label}>Staples</div>
            <ul>
              {staples.map((st, i) => (
                <li key={i}>{st}</li>
              ))}
            </ul>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.label}>Accompaniments</div>
            <ul>
              {accompaniments.map((ac, i) => (
                <li key={i}>{ac}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDetails;
