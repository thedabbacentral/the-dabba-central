import React from "react";
import styles from "./Pictures.module.scss";

const TrayIcon = () => (
  <svg viewBox="0 0 80 56" className={styles.tray}>
    <rect x="2" y="2" width="76" height="52" rx="8" />
    <line x1="26.6" y1="4" x2="26.6" y2="52" />
    <line x1="53.3" y1="4" x2="53.3" y2="52" />
    <line x1="2" y1="28" x2="78" y2="28" />
  </svg>
);

const Card = ({ title, note, tone = "peach" }) => (
  <div className={`${styles.card} ${styles[tone]}`}>
    <div className={styles.art}>
      <TrayIcon />
    </div>
    <div className={styles.meta}>
      <div className={styles.title}>{title}</div>
      {note ? <div className={styles.chip}>{note}</div> : null}
    </div>
  </div>
);

const Promo = () => (
  <div className={styles.promo}>
    <div className={styles.promoIcon}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="white" />
      </svg>
    </div>
    <div className={styles.promoPrice}>₹0</div>
    <div className={styles.promoText}>First Meal Free!</div>
    <div className={styles.promoSub}>No payment required</div>
  </div>
);

const Pictures = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.gridLeft}>
          <Card title="3CP Tray" note="Free Trial" tone="peach" />
          <Card title="5CP Tray" note="Recommended" tone="mint" />
          <Card title="8CP Tray" note="Most Popular" tone="sky" />
        </div>
        <Promo />
      </div>
    </div>
  );
};

export default Pictures;
