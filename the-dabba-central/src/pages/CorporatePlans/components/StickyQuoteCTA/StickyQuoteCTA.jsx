import React, { useEffect, useState } from "react";
import styles from "./StickyQuoteCTA.module.scss";
import { Button } from "@components";

const StickyQuoteCTA = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("corporate-form-submit");
    if (!target) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHidden(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const onClick = () => {
    const el = document.getElementById("corp-form-heading");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`${styles.sticky} ${hidden ? styles.hidden : ""}`}>
      <Button className={styles.fullBtn} size="lg" onClick={onClick}>
        Request a Quote <span className={styles.arrow}>→</span>
      </Button>
    </div>
  );
};

export default StickyQuoteCTA;
