import React from "react";
import styles from "./Textarea.module.scss";

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  rows = 5,
  className = "",
  ...rest
}) => {
  const id = name || label?.replace(/\s+/g, "-").toLowerCase();
  const textClass = [styles.textarea, error ? styles.error : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={textClass}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={!!error}
        {...rest}
      />
      {error ? <div className={styles.errorMessage}>{error}</div> : null}
    </div>
  );
};

export default Textarea;
