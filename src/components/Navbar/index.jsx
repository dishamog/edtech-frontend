import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.mainNav}>
      <Link href="/home" className={styles.logolink}>
        <p className={styles.logo}>EdTech</p>
      </Link>

      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/progress" className={styles.links}>
            Progress
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/grades" className={styles.links}>
            Grades
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/user" className={styles.links}>
            User account
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#" className={styles.links}>
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
