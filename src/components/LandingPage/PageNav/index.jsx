import React from "react";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <div className={styles.PageNav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Founder</li>
        <li className={styles.listItem}>Team</li>
        <li className={styles.listItem}>Courses</li>
        <li className={styles.listItem}>Placement</li>
      </ul>
    </div>
  );
};

export default PageNav;
