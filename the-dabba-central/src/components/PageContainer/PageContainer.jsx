import React from "react";
import styles from "./PageContainer.module.scss";
import Navbar from "../Navbar/Navbar";

const PageContainer = ({ children, className = "" }) => {
  return (
    <div className={`${styles.page} ${className}`}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default PageContainer;
