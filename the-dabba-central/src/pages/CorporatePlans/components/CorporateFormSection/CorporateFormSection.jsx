import React from "react";
import styles from "./CorporateFormSection.module.scss";

import { Phone, Mail, Pin } from "@icons";

import CorporateForm from "./components/CorporateForm/CorporateForm";
import ContactItem from "./components/ContactItem/ContactItem";

const CorporateFormSection = () => {
  return (
    <section className={styles.formSection} aria-labelledby="corp-form-heading">
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2 id="corp-form-heading" className={styles.heading}>
            Tell Us Your Requirement
          </h2>
          <p className={styles.description}>
            Ready to elevate your team's lunch experience? Our experts will
            craft a plan that fits your budget and taste.
          </p>

          <div className={styles.contactDetails}>
            <ContactItem
              icon={<Phone size={20} color="#fff" />}
              label="CALL US"
              value="+91 98765 43210"
            />
            <ContactItem
              icon={<Mail size={20} color="#fff" />}
              label="EMAIL"
              value="corporate@thedabbacentral.com"
            />
            <ContactItem
              icon={<Pin size={20} color="#fff" />}
              label="SERVICE AREA"
              value="Bangalore (All Areas)"
            />
          </div>
          <div className={styles.divider} aria-hidden />
          <div className={styles.footerNote}>
            "Our team will get in touch with you within 24 hours of submission."
          </div>
        </div>
        <div className={styles.rightSection}>
          <CorporateForm />
        </div>
      </div>
    </section>
  );
};

export default CorporateFormSection;
