import React from "react";
import styles from "./Contact.module.scss";
import { PageContainer } from "@components";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactInfoCards from "./components/ContactInfoCards/ContactInfoCards";
import FAQSection from "./components/FAQSection/FAQSection";

const Contact = () => {
  return (
    <PageContainer>
      <section className={styles.section}>
        <div className={styles.container}>
          <ContactHero />
          <div className={styles.grid}>
            <div className={styles.left}>
              <ContactForm />
            </div>
            <div className={styles.right}>
              <ContactInfoCards />
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Contact;
