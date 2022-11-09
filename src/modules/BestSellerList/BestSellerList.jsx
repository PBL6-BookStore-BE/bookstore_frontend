import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CarouselNextArrow from "../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../components/CarouselPrevArrow/CarouselPrevArrow";
import { ArrowRightIcon } from "../../components/icons";
import BookBestSeller from "./BookBestSeller/BookBestSeller";

const BestSellerList = ({ headerContent, booksData }) => {
  const settings = {
    infinite: true,
    slidesToShow: booksData.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box className="container" marginTop={8}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="32px"
      >
        <Box
          fontWeight="600"
          fontSize="24px"
          lineHeight="50px"
          className="slider-header"
          marginBottom="10px"
        >
          {headerContent}
        </Box>
        <Link to="/books/books-list">
          <Button
            variant="link"
            color="#8D28AD"
            fontSize="14px"
            display="flex"
            alignItems="center"
          >
            View more
            <ArrowRightIcon marginLeft="4px" />
          </Button>
        </Link>
      </Flex>
      <Slider {...settings}>
        {booksData.map((item, key) => (
          <BookBestSeller key={item.id} bookData={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default BestSellerList;
