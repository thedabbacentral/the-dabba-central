import React, { useMemo } from "react";
import styles from "./Toggle.module.scss";

/**
 * Segmented Toggle
 * - Supports any number of options
 * - Keyboard accessible (Left/Right arrows, Enter/Space)
 * - Controlled via value/onChange
 *
 * props:
 * - options: Array<{ label: string, value: string }>
 * - value: string (current value)
 * - onChange: (value: string) => void
 * - className?: string
 * - ariaLabel?: string
 */
const Toggle = ({
  options = [],
  value,
  onChange,
  className = "",
  ariaLabel = "Toggle options",
}) => {
  const selectedIndex = useMemo(
    () =>
      Math.max(
        0,
        options.findIndex((o) => o.value === value)
      ),
    [options, value]
  );

  const count = options.length || 1;

  const move = (delta) => {
    if (!options.length) return;
    const nextIndex = (selectedIndex + delta + count) % count;
    onChange && onChange(options[nextIndex].value);
  };

  return (
    <div
      className={[styles.toggle, className].filter(Boolean).join(" ")}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") move(-1);
        if (e.key === "ArrowRight") move(1);
        if (e.key === "Home") onChange && onChange(options[0].value);
        if (e.key === "End") onChange && onChange(options[count - 1].value);
      }}
      style={{
        gridTemplateColumns: `repeat(${count}, 1fr)`,
        "--count": count,
        "--index": selectedIndex,
      }}
    >
      <span className={styles.thumb} aria-hidden />
      {options.map((opt, idx) => {
        const active = idx === selectedIndex;
        return (
          <button
            type="button"
            key={opt.value}
            role="tab"
            aria-selected={active}
            className={[styles.option, active ? styles.active : ""].join(" ")}
            onClick={() => onChange && onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default Toggle;
