import React from "react";
import Slider from "react-slick";
import CarouselNextArrow from "../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../components/CarouselPrevArrow/CarouselPrevArrow";
import BookBestSeller from "./BookBestSeller/BookBestSeller";

const BestSellerList = () => {
  return (
    <Slider
        infinite
        slidesToShow={3}
        slidesToScroll={1}
        autoplaySpeed={2000}
        pauseOnHover
        nextArrow={<CarouselNextArrow />}
        prevArrow={<CarouselPrevArrow />}
        className='container'
    >
      <BookBestSeller />
      <BookBestSeller />
      <BookBestSeller />
      <BookBestSeller />
      <BookBestSeller />
      <BookBestSeller />
    </Slider>
  );
};

export default BestSellerList;
