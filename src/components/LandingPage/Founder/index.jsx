import React from "react";
import styles from "./Founder.module.css";
import Image from "next/image";

const Founder = () => {
  return (
    <div className={styles.Founder}>
      <div className={styles.textSide}>
        <div className={styles.founderName}>Dr. Darshana Waghela</div>
        <div className={styles.founderTitle}>Founder EdTech</div>
        <div className={styles.founderSpeech}>
          “It makes me proud to know that our work at EdTech is making the world
          of tech more accessible to our learners. It is our goal to help people
          around the world improve their careers and build great things. ”
        </div>
      </div>
      <Image
        src="/founder.png"
        width={225}
        height={272}
        className={styles.founderImage}
      />
    </div>
  );
};

export default Founder;
