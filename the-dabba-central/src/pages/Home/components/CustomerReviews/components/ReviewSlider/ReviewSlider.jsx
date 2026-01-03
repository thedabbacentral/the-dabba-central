import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import styles from "./ReviewSlider.module.scss";
import "swiper/css";

const ReviewSlider = ({ items = [], renderItem, autoplayMs = 5000 }) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const settings = useMemo(
    () => ({
      modules: [Navigation, Autoplay, A11y],
      loop: items.length > 2,
      speed: 420,
      // Default to 1 (mobile-safe). Increase via breakpoints.
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        720: { slidesPerView: 2 },
      },
      // Ensure Swiper recalculates when viewport/container changes (mobile + device toolbar)
      observer: true,
      observeParents: true,
      resizeObserver: true,
      updateOnWindowResize: true,
      // Use viewport width for breakpoints (most intuitive for responsiveness)
      breakpointsBase: "window",
      autoplay: autoplayMs
        ? {
            delay: autoplayMs,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        : false,
      onSwiper: (swiper) => {
        swiperRef.current = swiper;
        // ensure active dot matches initial slide (especially when loop enabled)
        setActive(swiper.realIndex ?? 0);
      },
      onSlideChange: (swiper) => setActive(swiper.realIndex ?? 0),
      a11y: true,
    }),
    [autoplayMs, items.length]
  );

  if (!items.length) return null;

  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>
        <Swiper className={styles.swiper} {...settings}>
          {items.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              {renderItem(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.controls}>
        <button
          className={`${styles.nav} ${styles.prev}`}
          aria-label="Previous review"
          onClick={() => swiperRef.current?.slidePrev()}
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
              aria-selected={active === i}
              className={`${styles.dot} ${active === i ? styles.active : ""}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
            />
          ))}
        </div>
        <button
          className={`${styles.nav} ${styles.next}`}
          aria-label="Next review"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
