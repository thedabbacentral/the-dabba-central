import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  variant = "primary",
  size = "lg",
  as = "button",
  className = "",
  href,
  ...rest
}) => {
  const Component = as === "a" ? "a" : "button";
  const composedClassName = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const props = { className: composedClassName, ...rest };
  if (Component === "a" && href) props.href = href;

  return <Component {...props}>{children}</Component>;
};

export default Button;
