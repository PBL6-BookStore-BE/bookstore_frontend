import React from 'react'
import { Box, Button, Flex } from "@chakra-ui/react";
import CarouselNextArrow from "../../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../../components/CarouselPrevArrow/CarouselPrevArrow";
import { ArrowRightIcon } from "../../../components/icons";
import { Link } from "react-router-dom";
import FeaturedBook from './FeaturedBook/FeatureBook';
import Slider from "react-slick";

const FeaturedBookList = ({ headerContent, books }) => {
    var settings = {
        infinite: true,
        slidesToShow: books.length>=2 ? 2 : 1,
        slidesToScroll:1,
        autoplaySpeed:2000,
        pauseOnHover: true,
        nextArrow:<CarouselNextArrow />,
        prevArrow:<CarouselPrevArrow />,
        autoplay: true,
        responsive :[{
            breakpoint: 480,
            settings: {
                slidesToShow: 1

            }
        }]
    }
  return (
    <Box backgroundColor='#FCF8FD' w='100%' >
        <Box className='container' marginTop='32px' >
            <Flex className='heading-text-top10' alignItems="center" justifyContent="space-between" marginBottom="32px" >
                <Box
                marginTop='32px'
                fontWeight="600"
                fontSize="24px"
                lineHeight="50px"
                className="slider-header"
                marginBottom="10px"
                >
                {headerContent}
                </Box>
                <Link to="/books/books-list">
                <Button variant="link" color="#8D28AD" fontSize="14px" display='flex' alignItems='center'>
                    View more
                    <ArrowRightIcon marginLeft='4px' />
                </Button>
                </Link>
            </Flex>
            <Slider {...settings}>
                {books.map((item, key) => {
                    return (
                        <FeaturedBook key={item.id} data={item} />
                    )
                })}
            </Slider>

        </Box>
    </Box>
  )
}

export default FeaturedBookList