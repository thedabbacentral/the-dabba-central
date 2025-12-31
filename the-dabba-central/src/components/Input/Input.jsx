import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  className = "",
  ...rest
}) => {
  const id = name || label?.replace(/\s+/g, "-").toLowerCase();
  const inputClass = [styles.input, error ? styles.error : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        className={inputClass}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        {...rest}
      />
      {error ? <div className={styles.errorMessage}>{error}</div> : null}
    </div>
  );
};

export default Input;
