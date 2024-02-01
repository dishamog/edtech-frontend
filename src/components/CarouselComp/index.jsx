import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import Course from "../Course";
import classes from "./CarouselComp.module.css";

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
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel1.jpg"
            authorName="Lewis Scott"
            courseName="Python for beginners"
            rating={4}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel2.jpg"
            authorName="Lewis Scott"
            courseName="Python-class central"
            rating={4}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel3.jpg"
            authorName="Jalin Siu"
            courseName="Core Python programming"
            rating={4}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel1.jpg"
            authorName="Devesh Janya"
            courseName="Python for beginners"
            rating={4}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel2.jpg"
            authorName="Jalin Siu"
            courseName="Python-class central"
            rating={4}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide>
          <Course
            imageSrc="/images/carousel3.jpg"
            authorName="Devesh Janya"
            courseName="Core Python programming"
            rating={4}
          />
        </MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
};

export default Carousel;
