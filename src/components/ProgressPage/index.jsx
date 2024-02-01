import React from "react";
import Navbar from "../Navbar";
import styles from "./ProgressPage.module.css";
import Image from "next/image";
import Footer from "../Footer";

const ProgressPage = () => {
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

      <div className={styles.activitesContainer}>
        <p className={styles.activitiesHeader}>Activites this week</p>
        <div className={styles.activites}>
          <div className={styles.dailyWork}>
            <div className={styles.daysDetails}>
              <div className={styles.day}>Day 1</div>
              <div className={styles.chapter}>
                <p className={styles.chapterName}>An introduction to python</p>
                <ul className={styles.sectionsList}>
                  <li className={styles.sectionItem}>
                    Understanding the python syntax
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                  <li className={styles.sectionItem}>
                    Installation and setup
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.daysDetails}>
              <div className={styles.day}>Day 2</div>
              <div className={styles.chapter}>
                <p className={styles.chapterName}>Get started with python</p>
                <ul className={styles.sectionsList}>
                  <li className={styles.sectionItem}>
                    Python data structures and data types
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                  <li className={styles.sectionItem}>
                    Simple input and output operations in python
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.daysDetails}>
              <div className={styles.day}>Day 3</div>
              <div className={styles.chapter}>
                <p className={styles.chapterName}>The python program flow</p>
                <ul className={styles.sectionsList}>
                  <li className={styles.sectionItem}>
                    Indentation in python
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                  <li className={styles.sectionItem}>
                    The 'if' statements and it's related statement
                    <input type="checkbox" className={styles.checkboxes} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className={styles.resumeButton}>Resume</button>
          <div className={styles.aside}>
            <p className={styles.asideHead}>Learning the python language</p>
            <p className={styles.asideContent}>Module 1: Python basics</p>
          </div>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <p className={styles.projectHeader}>Project</p>
        <div className={styles.card}>
          <div className={styles.indicator}>P1</div>
          <div className={styles.cardContent}>
            <p className={styles.cardContentHead}>
              Online shopping website project
            </p>
            <div className={styles.cardContentDetails}>
              <p className={styles.projectInfo}>
                <b>Completed:</b> 38%
              </p>
              <p className={styles.projectInfo}>
                <b>Duration:</b> 30hrs
              </p>
              <p className={styles.projectInfo}>
                <b>Due:</b>10/04/2023
              </p>
            </div>
          </div>
          <button className={styles.cardButton}>View</button>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <p className={styles.projectHeader}>Assessment</p>
        <div className={styles.card}>
          <div className={styles.indicator}>T2</div>
          <div className={styles.cardContent}>
            <p className={styles.cardContentHead}>
              Python beginner's assessment
            </p>
            <div className={styles.cardContentDetails}>
              <p className={styles.projectInfo}>
                <b>Due:</b> 08/04/23
              </p>
              <p className={styles.projectInfo}>
                <b>Duration:</b> 3hrs
              </p>
              <p className={styles.projectInfo}>
                <b>Succesful attempts:</b>0/3
              </p>
            </div>
          </div>
          <button className={styles.cardButton}>View</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
