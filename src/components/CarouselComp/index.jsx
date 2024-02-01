import React from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";

const Carousel = () => {
  return (
    <div>
      <MantineCarousel
        withIndicators
        height={200}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
      >
        <MantineCarousel.Slide>1</MantineCarousel.Slide>
        <MantineCarousel.Slide>2</MantineCarousel.Slide>
        <MantineCarousel.Slide>3</MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
};

export default Carousel;
