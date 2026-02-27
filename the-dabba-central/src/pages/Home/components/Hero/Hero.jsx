import React from "react";
import styles from "./Hero.module.scss";

import LeftHeroSection from "./components/LeftHeroSection/LeftHeroSection";
import PictureSection from "./components/PictureSection/PictureSection";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <LeftHeroSection />
          <div className={styles.right}>
            <div className={styles.heroFigure}>
              <img
                src={"./Hero_New.png"}
                alt="Authentic corporate meal served fresh"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
