import React from "react";
import styles from "./BuiltAroundYourTeam.module.scss";
import { Button } from "@components";
import { CheckIcon } from "@icons";
import { TEAM_FEATURES, TEAM_FEATURES_HEADING, CTA } from "./constants";

const BuiltAroundYourTeam = () => {
  const onSubmitRequirement = () => {
    const el = document.getElementById("corp-form-heading");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.section} aria-labelledby="team-built-heading">
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 id="team-built-heading" className={styles.heading}>
            {TEAM_FEATURES_HEADING}
          </h2>
          <ul className={styles.features}>
            {TEAM_FEATURES.map((text, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.iconWrap}>
                  <CheckIcon size={20} color="#ff6a00" />
                </span>
                <span className={styles.featureText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.ctaCard} aria-label="Corporate meal CTA">
          <h3 className={styles.ctaHeading}>{CTA.heading}</h3>
          <p className={styles.ctaDesc}>{CTA.description}</p>
          <div className={styles.ctaActions}>
            <Button
              size="md"
              variant="outline"
              className={styles.primaryOnOrange}
              onClick={onSubmitRequirement}
            >
              Submit Requirement
            </Button>
            <Button
              size="md"
              variant="ghost"
              as="a"
              href={`mailto:${CTA.contactMail}?subject=${encodeURIComponent(
                CTA.contactSubject
              )}`}
              className={styles.ghostOnOrange}
            >
              Contact Sales
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BuiltAroundYourTeam;
