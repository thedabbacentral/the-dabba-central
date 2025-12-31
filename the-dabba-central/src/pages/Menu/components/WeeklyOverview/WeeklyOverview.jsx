import React from "react";
import styles from "./WeeklyOverview.module.scss";
import { DAYS } from "../../constants";

const WeeklyOverview = ({ preference, meal, menuData, thaliLabel }) => {
  return (
    <div className={styles.overview}>
      <div className={styles.cap}>
        <div>Weekly Overview — {thaliLabel}</div>
        <div className={styles.chip}>
          {preference === "veg" ? "Veg" : "Non-Veg"}
        </div>
      </div>
      <div className={styles.overviewGrid}>
        {DAYS.map((d) => {
          const dayMenu =
            menuData[preference]?.[meal]?.[d.id] || menuData.veg.lunch.mon;
          return (
            <div key={d.id} className={styles.overviewCard}>
              <div className={styles.day}>{d.short}</div>
              <div className={styles.title}>{dayMenu.sabzi[0].name}</div>
              <div className={styles.sub}>+ {dayMenu.sabzi[1].name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyOverview;


