import React from "react";
import styles from "./MenuControls.module.scss";
import { Toggle } from "@components";
import { PREFERENCE_OPTS, MEAL_OPTS, DAYS } from "../../constants";

const MenuControls = ({
  preference,
  onPreference,
  meal,
  onMeal,
  weekLabel,
  onPrevWeek,
  onNextWeek,
  activeDay,
  onDay,
}) => {
  return (
    <div className={styles.controls}>
      <div className={styles.filtersRow}>
        <Toggle
          ariaLabel="Select preference"
          options={PREFERENCE_OPTS}
          value={preference}
          onChange={onPreference}
        />
        <Toggle
          ariaLabel="Select meal time"
          options={MEAL_OPTS}
          value={meal}
          onChange={onMeal}
        />
      </div>
      <div className={styles.weekRow} aria-label="Week selector">
        <button
          className={styles.navBtn}
          type="button"
          aria-label="Previous week"
          onClick={onPrevWeek}
        >
          ‹
        </button>
        <div className={styles.weekPill}>
          <span aria-hidden>📅</span> {weekLabel}
        </div>
        <button
          className={styles.navBtn}
          type="button"
          aria-label="Next week"
          onClick={onNextWeek}
        >
          ›
        </button>
      </div>

      <div className={styles.daysRow}>
        {DAYS.map((d, i) => (
          <button
            key={d.id}
            className={[
              styles.dayBtn,
              i === activeDay ? styles.active : "",
            ].join(" ")}
            onClick={() => onDay(i)}
            type="button"
          >
            {d.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuControls;
