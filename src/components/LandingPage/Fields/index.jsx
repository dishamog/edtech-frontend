import React from "react";
import styles from "./Fields.module.css";
import Image from "next/image";

const Fields = () => {
  return (
    <div className={styles.FieldsContainer}>
      <p className={styles.Scholarship}>Scholarship Exams!</p>
      <div className={styles.Fields}>
        <div className={styles.items}>
          <Image
            src="/fieldImage1.png"
            width={125}
            height={125}
            alt="field icons"
          />
          <div className={styles.text}>Artificial Intelligence</div>
        </div>
        <div className={styles.items}>
          <Image
            src="/fieldImage2.png"
            width={125}
            height={125}
            alt="field icons"
          />
          <div className={styles.text}>Blockchain</div>
        </div>
        <div className={styles.items}>
          <Image
            src="/fieldImage3.png"
            width={125}
            height={125}
            alt="field icons"
          />
          <div className={styles.text}>Internet of Things</div>
        </div>
        <div className={styles.items}>
          <Image
            src="/fieldImage4.png"
            width={125}
            height={125}
            alt="field icons"
          />
          <div className={styles.text}>Fullstack Development</div>
        </div>
      </div>
    </div>
  );
};

export default Fields;
