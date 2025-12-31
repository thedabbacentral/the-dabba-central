import React from "react";
import styles from "./CPHero.module.scss";
import { Button } from "@components";
const heroImg =
  "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop";

const CPHero = () => {
  return (
    <section className={styles.cpHero} aria-labelledby="cp-hero-heading">
      <div className="container">
        <div className={styles.cpHeroGrid}>
          <div className={styles.cpHeroLeft}>
            <div className={styles.cpHeroEyebrow}>
              Trusted partner in Bangalore
            </div>
            <h1 id="cp-hero-heading" className={styles.cpHeroTitle}>
              Corporate Meal Plans
              <span className={styles.cpHeroAccent}>For Your Team</span>
            </h1>
            <p className={styles.cpHeroSubtitle}>
              Fresh, hygienic, North Indian homemade meals delivered on time.
              Fuel your workforce with nutrition and taste.
            </p>
            <div className={styles.cpHeroActions}>
              <Button size="md">Request a Quote</Button>
              <Button size="md" variant="outline">
                Schedule Free Tasting
              </Button>
            </div>
          </div>
          <div className={styles.cpHeroRight}>
            <figure className={styles.cpHeroFigure}>
              <img
                src={heroImg}
                alt="Authentic corporate meal served fresh"
                loading="lazy"
              />
              <figcaption className={styles.cpHeroCaption}>
                <strong>Authentic Taste</strong>
                <span>Made with love, delivered with care.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPHero;
