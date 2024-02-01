import React from "react";
import styles from "./GradesPage.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Image from "next/image";

const GradesPage = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Image
        src="/images/background1.png"
        width={1540}
        height={360}
        alt="hero image"
        className={styles.heroImage}
      />
      <div className={styles.gradedAssignments}>
        <p className={styles.gaHeader}>Graded assignments</p>
        <div className={styles.gaInfo}>
          <div className={styles.gaContent1}>T-1</div>
          <div className={styles.gaContent2}>Web development - 1</div>
          <div className={styles.gaContent3}>95/100</div>
          <div className={styles.gaContent4}>S</div>
        </div>
        <div className={styles.gaInfo}>
          <div className={styles.gaContent1}>A-2</div>
          <div className={styles.gaContent2}>Javascript for beginners</div>
          <div className={styles.gaContent3}>92/100</div>
          <div className={styles.gaContent4}>S</div>
        </div>
      </div>
      <p className={styles.viewAll}>View all &gt;&gt;</p>
      <p className={styles.cheer}>Good job! Keep up the momentum!</p>

      <div className={styles.projectContainer}>
        <p className={styles.projectHeader}>Under Evaluation</p>
        <div className={styles.card}>
          <div className={styles.indicator}>P1</div>
          <div className={styles.cardContent}>
            <p className={styles.cardContentHead}>
              Online Shopping Website Project
            </p>
            <div className={styles.cardContentDetails}>
              <p className={styles.projectInfo}>
                <b>Completed:</b> 08/04/23
              </p>
              <p className={styles.projectInfo}>
                <b>Duration:</b> 3hrs
              </p>
            </div>
          </div>
          <p className={styles.cardFinalgrades}>--/100</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GradesPage;
