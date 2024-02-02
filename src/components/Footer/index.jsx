import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p className={styles.footerHeader}>EdTech</p>
      <p className={styles.emailContact}>
        <b>Contact us:</b> edtechbusinesses@gmail.com
      </p>
      <div className={styles.socials}>
        <img src="/twitter.svg" alt="twitter icon" />

        <img src="/facebook.svg" alt="facebook icon" />

        <img src="/instagram.svg" alt="instagram icon" />

        <img src="/github.svg" alt="github icon" />

        <img src="/googleFooter.svg" alt="google icon" />
      </div>
    </div>
  );
};

export default Footer;
