import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import styles from "./Homepage.module.css";
import Footer from "../Footer";
import Carousel from "../CarouselComp";

const Homepage = () => {
  return (
    <div className="main">
      <Navbar />
      <Image
        src="/images/hero.png"
        width={1540}
        height={380}
        alt="here image here"
        className={styles.heroHome}
      />
      <div className={styles.abovebar}>
        <p className={styles.welcome}>WELCOME!</p>
        <div className={styles.card}>
          <Image
            src="/images/courseChoice2.jpeg"
            width={220}
            height={120}
            alt="course thumbnail here"
          />
          <div className={styles.data}>
            <div className={styles.title}>Introduction to data science</div>
            <div className={styles.author}>George Wincy</div>
            <div className={styles.completed}>
              <b>Completed:</b> 70%
            </div>
          </div>
          <button className={styles.resumeButton}>Resume</button>
        </div>
      </div>
      <div className={styles.recommendedCourses}>
        <p className={styles.recommendedHead}>Recommended for you</p>
        <div className={styles.carousels}>
          <Carousel />
        </div>
      </div>
      <div className={styles.completedProgramsContainer}>
        <p className={styles.completedProgramsHead}>Completed programs</p>
        <div className={styles.completedCardsContainer}>
          <div className={styles.card}>
            <Image
              src="/images/21.jpeg"
              width={220}
              height={120}
              alt="course thumbnail here"
            />
            <div className={styles.data}>
              <div className={styles.title}>Python Web frameworks</div>
              <div className={styles.author}>
                learn the most popular python web frameworks in 2023
              </div>
              <div>
                <span className={styles.completed}>
                  <b>Completed:</b> 07/07/2023
                </span>
                <span className={styles.grades}>
                  <b> Grade:</b> A
                </span>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/22.png"
              width={220}
              height={120}
              alt="course thumbnail here"
            />
            <div className={styles.data}>
              <div className={styles.title}>Web development in Python</div>
              <div className={styles.author}>
                Understanding the world of web development with using python
              </div>
              <div>
                <span className={styles.completed}>
                  <b>Completed:</b> 02/02/2023
                </span>
                <span className={styles.grades}>
                  <b> Grade:</b> A
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.dropSvg}
      >
        <g clipPath="url(#clip0_130_21)">
          <path
            d="M47.3715 49.9718L48 50.4796L48.6285 49.9718L66.3593 35.6461L70.4109 38.9268L48 57.0733L25.5891 38.9268L29.6407 35.6461L47.3715 49.9718Z"
            stroke="black"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_130_21">
            <rect width="96" height="96" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <hr className={styles.lastrule} />
      <Footer />
    </div>
  );
};

export default Homepage;
