import React from "react";
import styles from "./Instructor.module.css";
import Image from "next/image";

const Instructor = () => {
  return (
    <div className={styles.instructor}>
      <div className={styles.leftContainer}>
        <div className={styles.leftText}>
          <p className={styles.instructorName}>Joanna Belrich</p>
          <p className={styles.instructorSpeech}>
            “I’m proud to wake up knowing that I can help learners explore their
            interests, and advance their careers while expanding my own
            professional network and gaining experience”
          </p>
        </div>
        <Image
          src="/images/joanna.png"
          width={138}
          height={150}
          alt="instructor profile image"
        />
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.rightHeader}>Become an Instructor</p>
        <p className={styles.rightSpeech}>
          Join the community and start your teaching career with our faculty
          support teams
        </p>
        <button className={styles.rightButton}>Get started</button>
      </div>
    </div>
  );
};

export default Instructor;
