import { useRef, useState, useEffect, useMemo } from "react";
import { usePrefersReducedMotion } from "../../utils";

const CountUp = ({ end, start = 1, durationMs = 1200, suffix = "" }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const elRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    const el = elRef.current;
    if (!el) return;

    // Start counting when element enters the viewport (once).
    if (!("IntersectionObserver" in window)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, prefersReducedMotion]);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    let rafId = null;
    const startTime = performance.now();
    const from = start;
    const to = end;

    const easeOutQuad = (t) => t * (2 - t);

    const tick = (now) => {
      const rawT = (now - startTime) / durationMs;
      const t = Math.min(1, Math.max(0, rawT));
      const eased = easeOutQuad(t);
      const next = Math.round(from + (to - from) * eased);
      setValue(next);

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [durationMs, end, hasStarted, prefersReducedMotion, start]);

  const formatted = useMemo(() => {
    try {
      return new Intl.NumberFormat("en-IN").format(value);
    } catch {
      return String(value);
    }
  }, [value]);

  // Keep the element width stable by always rendering the suffix.
  return (
    <span ref={elRef} aria-label={`${end}${suffix}`}>
      {formatted}
      {suffix}
    </span>
  );
};

export default CountUp;