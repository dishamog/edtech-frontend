import React from "react";
import styles from "./LandingNavbar.module.css";

const LandingNavbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>EdTech</div>
      <div className={styles.navLinks}>
        <ul className={styles.list}>
          <li>CAREERS</li>
          <li>PLACEMENTS</li>
          <li>ABOUT US</li>
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;
