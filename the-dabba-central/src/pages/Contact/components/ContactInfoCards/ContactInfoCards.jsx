import React from "react";
import styles from "./ContactInfoCards.module.scss";
import { Mail, Phone, Pin } from "@icons";

const InfoCard = ({ icon, title, line1, line2 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.body}>
        <div className={styles.label}>{title}</div>
        <div className={styles.line1}>{line1}</div>
        {line2 ? <div className={styles.line2}>{line2}</div> : null}
      </div>
    </div>
  );
};

const ContactInfoCards = () => {
  return (
    <div className={styles.stack}>
      <InfoCard
        icon={<Mail size={22} />}
        title="Email Us"
        line1="support@dabbacentral.com"
        line2="We reply within 2 hours"
      />
      <InfoCard
        icon={<Phone size={22} />}
        title="Call Us"
        line1="+91 98765 43210"
        line2="Mon-Sat, 9am - 6pm"
      />
      <InfoCard
        icon={<Pin size={22} />}
        title="Visit Us"
        line1="Indiranagar, Bangalore"
        line2="Karnataka, 560038"
      />
    </div>
  );
};

export default ContactInfoCards;


