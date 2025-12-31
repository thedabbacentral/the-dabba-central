import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ReviewSlider.module.scss";

// Always one slide visible per requirements
const getSlidesPerView = () => 2;

const ReviewSlider = ({ items = [], renderItem, autoplayMs = 5000 }) => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const clones = useMemo(() => slidesPerView, [slidesPerView]);
  const extended = useMemo(() => {
    const head = items.slice(0, clones);
    const tail = items.slice(-clones);
    return [...tail, ...items, ...head];
  }, [items, clones]);

  const [index, setIndex] = useState(clones);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);
  const wrapRef = useRef(null);

  const go = (dir) => {
    setIndex((i) => i + dir);
    setTransitioning(true);
  };
  const next = () => go(1);
  const prev = () => go(-1);

  // Keep hook in case viewport changes but always resolves to 1
  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    // reset index when slidesPerView changes
    setIndex(clones);
  }, [clones]);

  useEffect(() => {
    if (!autoplayMs) return;
    const start = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(next, autoplayMs);
    };
    const stop = () => clearInterval(timerRef.current);
    start();
    const el = wrapRef.current;
    if (el) {
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", start);
    }
    return () => {
      stop();
      if (el) {
        el.removeEventListener("mouseenter", stop);
        el.removeEventListener("mouseleave", start);
      }
    };
  }, [autoplayMs, clones, items.length]);

  const onTransitionEnd = () => {
    setTransitioning(false);
    if (index >= items.length + clones) {
      setIndex(clones);
    } else if (index < clones) {
      setIndex(items.length + clones - 1);
    }
  };

  const activeDot =
    (((index - clones) % items.length) + items.length) % items.length;

  return (
    <div className={styles.slider} ref={wrapRef}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            width: `${(extended.length / slidesPerView) * 100}%`,
            transform: `translateX(-${(index * 100) / extended.length}%)`,
            transition: transitioning ? "transform 420ms ease" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extended.map((item, idx) => (
            <div
              className={styles.slide}
              key={`${item.id}-${idx}`}
              style={{ width: `${100 / extended.length}%` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          aria-label="Previous review"
          onClick={prev}
        >
          ‹
        </button>
        <div
          className={styles.dots}
          role="tablist"
          aria-label="Review pagination"
        >
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={activeDot === i}
              className={`${styles.dot} ${
                activeDot === i ? styles.active : ""
              }`}
              onClick={() => {
                setIndex(i + clones);
                setTransitioning(true);
              }}
            />
          ))}
        </div>
        <button
          className={`${styles.nav} ${styles.next}`}
          aria-label="Next review"
          onClick={next}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
