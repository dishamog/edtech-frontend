import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import Course from "../Course";
import classes from "./CarouselComp.module.css";
import { courses } from "./data";

const Carousel = () => {
  return (
    <div>
      <MantineCarousel
        classNames={classes}
        withIndicators
        height={200}
        // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        // slideGap={{ base: 0, sm: "md" }}
        slideSize="20%"
        slideGap="xs"
        loop
        controlSize={40}
        align="start"
        slidesToScroll={1}
      >
        {courses.map((course) => (
          <MantineCarousel.Slide>
            <Course
              imageSrc={course.imageSrc}
              authorName={course.authorName}
              courseName={course.courseName}
              rating={course.rating}
            />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
};

export default Carousel;
