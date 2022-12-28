import React, { useEffect, useState } from 'react'
import {Box, Text, VStack, HStack, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../../components/icons";
import { Link } from "react-router-dom";
import './style.css'
import ButtonAddCart from "../../../components/ButtonAddCart/ButtonAddCart"
import { getReviewOfBook } from '../../../apis/review.api';


const Book = ({ categoryName, publisherName, name, authors, rating, price, urls, id, description }) => {
    const [listReview, setListReview] = useState();
    useEffect(() => {
        getReviewOfBook(id).then((reviews) => setListReview(reviews));
    }, [id]);

    return (
        <Box className='column-layout'>
            <Link to={`/books/book-detail/${id}`}>
                <Box className='column-item one'>
                    <AspectRatio ratio={2/3} w='150px'>
                        <Image 
                            src={urls[0] || './static-data/img-none.jpg'}
                            borderRadius='20px'
                            alt="Image book"
                        />
                    </AspectRatio>
                </Box>
            </Link>
            <Box className='column-item two'>
                <VStack align='flex-start' spacing={4}>
                    <HStack>
                        <Box fontWeight='600' className="book-category">{categoryName}</Box>
                        <Box fontWeight='600' className="book-category">{publisherName}</Box>
                    </HStack>
                    <Link to={`/books/book-detail/${id}`}>
                        <VStack align='flex-start' spacing={3}>
                            <Text
                                marginLeft='0' 
                                mb={0} mt={0}
                                fontSize='21px' 
                                fontWeight='bold'
                                className='title'
                            >
                                {name}
                            </Text>
                            <HStack>
                                <Text 
                                    color='#755A7D' 
                                    fontSize='14px' 
                                >
                                    {authors.map((item, key) =>{
                                        return (
                                        <span key={key}>{item}</span>
                                        )
                                    })}
                                </Text>
                                <Text lineHeight='12px'>
                                    <StarIcon />
                                </Text>
                                <Text fontWeight='bold'>{rating.toFixed(1)}</Text>
                                <Text
                                    color='#755A7D' 
                                >
                                    ({listReview?.length} reviews)
                                </Text>
                            </HStack>
                            <Text fontSize='14px'>
                                {description}
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
