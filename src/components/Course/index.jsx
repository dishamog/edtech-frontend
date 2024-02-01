import React from "react";
import styles from "./Course.module.css";
import Image from "next/image";
import { Rating } from "@mantine/core";

const Course = ({ imageSrc, courseName, authorName, rating }) => {
  return (
    <div>
      <Image src={imageSrc} height={100} width={200} alt="carousel image" />
      <h4>{courseName}</h4>
      <p>{authorName}</p>
      <div className={styles.ratingLine}>
        <span>{rating}</span>
        <Rating defaultValue={rating} />
      </div>
    </div>
  );
};

export default Course;
