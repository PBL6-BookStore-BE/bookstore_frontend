import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import CarouselNextArrow from "../../../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../../../components/CarouselPrevArrow/CarouselPrevArrow";
import Carousel from "react-spring-3d-carousel-2";
import TestimonialItem from "./TestimonialItem";

const CarouselCustom = ({ books }) => {
  const [focus, setFocus] = useState(0);

  const arr = books.map((item, i) => {
    return {
      key: i,
      content: <TestimonialItem {...item} />,
    };
  });
  const nextBook = (e) => {
    e.preventDefault();
    setFocus(focus + 1);
  };
  const preBook = (e) => {
    e.preventDefault();
    setFocus(focus - 1);
  };
  return (
    <Box w="100%" display="blox">
      <Box w="70%" margin="0 auto" position="relative">
        <Box alignItems="center" height="400px">
          <Carousel
            slides={arr}
            goToSlide={focus}
            offsetRadius={books.length >= 1 ? 3 : 1}
          />
        </Box>
        <Button
          zIndex="10"
          onClick={nextBook}
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          transform="translateY(5%) translateX(-90%)"
          variant="link"
        >
          <CarouselNextArrow />
        </Button>
        <Button
          zIndex="10"
          onClick={preBook}
          position="absolute"
          variant="link"
          left="0"
          top="0"
          bottom="0"
          transform="translateY(5%) translateX(90%)"
        >
          <CarouselPrevArrow />
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselCustom;
