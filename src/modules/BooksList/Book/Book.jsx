import React from 'react'
import {Box, Text, VStack, HStack, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../../components/icons";
import { Link } from "react-router-dom";
import logo from "./img-none.jpg"
import './style.css'
import ButtonAddCart from "../../../components/ButtonAddCart/ButtonAddCart"


const Book = ({ category, publisher, title, author, rating, price, imageUrl }) => {
    return (
        <Box className='column-layout'>
            <Link to='book/book-detail'>
                <Box className='column-item one'>
                    <AspectRatio ratio={2/3} w='150px'>
                        <Image 
                            src={logo}
                            borderRadius='20px'
                            alt="Image book"
                        />
                    </AspectRatio>
                </Box>
            </Link>
            <Box className='column-item two'>
                <VStack align='flex-start' spacing={5}>
                    <HStack>
                        <Box fontWeight='600' className="book-category">{category}</Box>
                        <Box fontWeight='600' className="book-category">{publisher}</Box>
                    </HStack>
                    <Link to='book/book-detail'>
                        <VStack align='flex-start' spacing={4}>
                            <Text
                                fontSize='21px' 
                                fontWeight='bold'
                                className='title'
                            >
                                {title}
                            </Text>
                            <HStack>
                                <Text 
                                    color='#755A7D' 
                                    fontSize='14px' 
                                >
                                    {author}
                                </Text>
                                <Text lineHeight='12px'>
                                    <StarIcon />
                                </Text>
                                <Text fontWeight='bold'>4.1</Text>
                                <Text
                                    color='#755A7D' 
                                >
                                    (166 reviews)
                                </Text>
                            </HStack>
                            <Text fontSize='14px'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </Text>
                        </VStack>
                    </Link>
                </VStack>
            </Box>
            <Box className='column-item three'>
                <Text
                    fontSize="26px"
                    fontWeight="bold"
                >
                    ${price}
                </Text>
                <Link to='/checkout'>
                    <ButtonAddCart text='Buy' />
                </Link>
            </Box>
        </Box>
    )
}

export default Book
