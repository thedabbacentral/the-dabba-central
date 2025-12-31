import React, { useState } from "react";
import styles from "./FAQSection.module.scss";

const QA = [
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel your subscription anytime through the mobile app or by contacting our support team. Cancellations take effect from the next billing cycle.",
  },
  {
    q: "Do you deliver on weekends?",
    a: "Our standard plans cover Monday to Friday. However, we have special weekend add‑ons for our Full Day subscription members.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Yes. You can update your delivery address from your account dashboard. Please notify us at least 24 hours in advance.",
  },
  {
    q: "What is your food safety policy?",
    a: "We follow strict hygiene and food safety standards with regular quality checks. Our meals are prepared fresh in sanitized kitchens.",
  },
];

const SocialIcon = ({ label, path }) => (
  <a className={styles.socialBtn} href={path} target="_blank" rel="noreferrer" aria-label={label}>
    <span className={styles.dot} />
  </a>
);

const FAQSection = () => {
  const [open, setOpen] = useState(-1);
  return (
    <div className={styles.faqCard}>
      <div className={styles.faqHead}>
        <span className={styles.badge} aria-hidden />
        <span className={styles.title}>Frequently Asked</span>
      </div>
      <div className={styles.list}>
        {QA.map((item, idx) => {
          const active = open === idx;
          return (
            <div key={idx} className={styles.item}>
              <button
                className={styles.question}
                aria-expanded={active}
                onClick={() => setOpen((v) => (v === idx ? -1 : idx))}
              >
                {item.q}
                <span className={[styles.chev, active ? styles.up : ""].join(" ")} aria-hidden />
              </button>
              {active ? <div className={styles.answer}>{item.a}</div> : null}
            </div>
          );
        })}
      </div>
      <div className={styles.socialBlock}>
        <div className={styles.caption}>Follow our journey</div>
        <div className={styles.socialRow}>
          <SocialIcon label="Instagram" path="#" />
          <SocialIcon label="Twitter" path="#" />
          <SocialIcon label="Facebook" path="#" />
          <SocialIcon label="LinkedIn" path="#" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;


