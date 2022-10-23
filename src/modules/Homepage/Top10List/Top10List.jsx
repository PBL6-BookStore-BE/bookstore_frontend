import React from 'react'
import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarouselNextArrow from "../../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../../components/CarouselPrevArrow/CarouselPrevArrow";
import { ArrowRightIcon } from "../../../components/icons";
import BookTop10 from './BookTop10/BookTop10';
import Slider from "react-slick";

const Top10List = ({headerContent, books}) => {
    console.log(books.length);
    var settings = {
        infinite: true,
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
    <Box backgroundColor='#FCF8FD' w='100%' position='relative'>
        <Box className='container' marginTop='32px'>
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
            <Box className='top10-book-overlay' h='500px' w='86px'  position='absolute' top='15%' zIndex='1' bgGradient='linear(to-r, #FCF8FD, rgba(255, 255, 255, 0.404))'>
            </Box>
            <Slider {...settings} slidesToShow={(books.length>=5) ? 5 : 1}
            >
                {books.map((item, key) => {
                    return (
                        <BookTop10 key={key} {...item} />
                    )
                    })}
            </Slider>
            <Box className='top10-book-overlay' h='500px' w='150px'  position='absolute' top='15%' right='5%' zIndex='1' bgGradient='linear(to-l, #FCF8FD, rgba(255, 255, 255, 0.404))'>
            </Box>
        </Box>
    </Box>
)}

export default Top10List;
