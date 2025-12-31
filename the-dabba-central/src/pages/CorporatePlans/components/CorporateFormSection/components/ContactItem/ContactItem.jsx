import styles from "./ContactItem.module.scss";

const ContactItem = ({ icon, label, value }) => (
  <div className={styles.contactItem}>
    <div className={styles.iconWrapper} aria-hidden>
      <span className={styles.icon}>{icon}</span>
    </div>
    <div className={styles.contactInfo}>
      <div className={styles.contactLabel}>{label}</div>
      <div className={styles.contactValue}>{value}</div>
    </div>
  </div>
);

export default ContactItem;
