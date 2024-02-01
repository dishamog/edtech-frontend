import React from "react";
import styles from "./CourseSelection.module.css";

const CourseSelection = () => {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.courseHeader}>A Broad Selection Of Courses</div>

      <ul className={styles.list}>
        <li className={styles.item1}>Trending</li>
        <li className={styles.item2}>New</li>
      </ul>

      <hr className={styles.horizontalRule} />
      <div className={styles.courseCarousel}> There is a Carousel here</div>
    </div>
  );
};

export default CourseSelection;
