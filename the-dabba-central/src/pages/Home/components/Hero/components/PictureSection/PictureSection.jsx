import React from "react";
import styles from "./PictureSection.module.scss";
import { plateImages } from "./plateImages";

const Plate = ({ image, className }) => {
  const isPortrait = image.orientation === "portrait";
  return (
    <figure
      className={[
        styles.plate,
        isPortrait ? styles.portrait : styles.landscape,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.frame}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={styles.img}
        />
      </div>
      <figcaption className="visually-hidden">{image.alt}</figcaption>
    </figure>
  );
};

const PictureSection = () => {
  // We use explicit positions (.p1, .p2, .p3) to match the reference layout.
  const [p1, p2, p3] = plateImages;

  return (
    <div className={styles.wrap} aria-label="Meal tray previews">
      <div className={styles.stage}>
        <Plate image={p1} className={styles.p1} />
        <Plate image={p2} className={styles.p2} />
        <Plate image={p3} className={styles.p3} />
      </div>
    </div>
  );
};

export default PictureSection;
