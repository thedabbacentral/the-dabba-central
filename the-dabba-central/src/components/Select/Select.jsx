import React from "react";
import styles from "./Select.module.scss";

const Select = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = "",
  options = [],
  className = "",
  ...rest
}) => {
  const id = name || label?.replace(/\s+/g, "-").toLowerCase();
  const selectClass = [styles.select, error ? styles.error : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        className={selectClass}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error ? <div className={styles.errorMessage}>{error}</div> : null}
    </div>
  );
};

export default Select;
