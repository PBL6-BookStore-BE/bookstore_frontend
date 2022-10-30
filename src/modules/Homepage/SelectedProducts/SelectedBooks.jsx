import React, { useState } from 'react'
import { Box, Button, Text, Heading} from "@chakra-ui/react";
import CarouselNextArrow from "../../../components/CarouselNextArrow/CarouselNextArrow";
import CarouselPrevArrow from "../../../components/CarouselPrevArrow/CarouselPrevArrow";
import SelectedBook from './SelectedBook/SelectedBook';
import Carousel from 'react-spring-3d-carousel-2';

const SelectedBooks = ({books}) => {
    const [focus, setFocus] = useState(0);

    const arr = books.map((item, i) =>{
        return {
            key: item.id,
            content: <SelectedBook {...item}/>
        }
    });
    const nextBook = (e) => {
        e.preventDefault();
        setFocus(focus + 1)
    }
    const preBook = (e) => {
        e.preventDefault();
        setFocus(focus - 1)
    }
return (
    <Box  w='100%' display='blox' >
        <Box w='70%' margin='0 auto' position='relative'>
            <Box marginTop='64px' align='center' marginBottom='104px'>
                <Heading fontSize='32px' fontWeight='500' marginBottom='12px'>
                    Trending this week
                </Heading>
                <Text textAlign='center' w='70%' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
            </Box>
            {/* marginLeft='360px' width='80%' */}
            <Box  alignItems='center' height='400px' >
                <Carousel slides={arr} goToSlide={focus} offsetRadius={(books.length>=1) ? 3 : 1} />
            </Box>
            <Button 
                onClick={nextBook} 
                position='absolute' right='-10' top='0' bottom='0' transform='translateY(10%)' variant='link'>
                <CarouselNextArrow />
            </Button>
            <Button 
                onClick={preBook} position='absolute' left='-10' variant='link' top='0' bottom='0' transform='translateY(10%)'>
                <CarouselPrevArrow />
            </Button>
        </Box>
    </Box>
)}

export default SelectedBooks;
