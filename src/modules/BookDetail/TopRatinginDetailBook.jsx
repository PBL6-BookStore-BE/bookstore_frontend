import React from 'react'
import {HStack, VStack, Text, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../components/icons";
import logo from './img-none.jpg';
import { Link } from "react-router-dom";

const TopRatinginDetailBook = ({ urls, rating, name, price, id }) => {
    return (
        <Link to={`/books/book-detail/${id}`}>
            <HStack w={380} h={200} align='end' borderRadius='8px' boxShadow='0px 10px 20px rgba(39, 13, 48, 0.2)'>
                <VStack>
                    <AspectRatio ratio={2/3} w={130}>
                    <Image 
                        src={urls[0] || logo}
                        borderRadius='20px'
                    />
                    </AspectRatio>
                </VStack>
                        <VStack padding='16px' align='flex-start'>
                        <VStack  className="rating-title" align='flex-start'>
                            <HStack 
                            className="a-start-icon-white" 
                            padding='3px 4px' 
                            bg='#FF7A00'
                            borderRadius='30px'
                            spacing={4}
                            paddingRight='20px'
                            >
                                <StarIcon/> 
                                <Text color='#FFFFFF' fontWeight='500'>{rating.toFixed(1)}</Text>
                            </HStack>
                            <Text className="book-title" fontSize='18px' fontWeight='bold'>{name}</Text>
                        </VStack>
                        <Text fontSize='21px' fontWeight='bold' color='#8D28AD'>${price}</Text>
                        </VStack>
            </HStack>
        </Link>
    )
}

export default TopRatinginDetailBook