import React from "react";
import styles from "./ContactHero.module.scss";

const ContactHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.pill}>Get in Touch</div>
      <h1 className={styles.title}>
        We’re Here to <span className={styles.accent}>Help You</span>
      </h1>
      <p className={styles.subtitle}>
        Have a question about our meal plans, corporate services, or deliveries?
        Reach out to us and our team will get back to you shortly.
      </p>
    </div>
  );
};

export default ContactHero;


