import React from 'react'
import { VStack, Image, HStack, Box, Text } from '@chakra-ui/react';
import { StarIcon } from "../../../../components/icons";
import AddCart from '../../../../components/AddCart/AddCart';
import { Link } from "react-router-dom";
import './style.css';

const BookTop10 = ({ imageUrl, title, author, price, rating }) => {
    return (
    <Link to="/books/book-detail">
      <VStack
        marginLeft='10px'
        w='170px'
        align="flex-start"
        marginBottom='42px'
      >
        <VStack>
            <Image 
                w='100%'
                h='243px'
                borderRadius='20px'
                src={imageUrl}
            />
        </VStack>
        <VStack  alignItems="flex-start" fontSize="13px" 
        >
          <HStack spacing={1}>
            {
                Array.from(Array(rating), (e, i) => {
                    return (<StarIcon key={i} /> )
                })}
          </HStack>
        </VStack>
        <VStack display='' h='115px'>
            <Text 
                fontSize="18px" 
                fontWeight="500" 
                lineHeight="30px"
                className="book-title"
            >
                {title}
            </Text>
            <Text 
                fontSize="16px" 
                lineHeight="24px"
            >
                {author}
            </Text>
        </VStack>
        <VStack 
            alignItems="flex-start" 
            w='147px' 
            backgroundColor="#EEDFF3" 
            borderRadius='6px' 
            >
            <HStack >
                <Text 
                fontSize='21px' 
                lineHeight="48px" 
                fontWeight="700" 
                marginLeft='35px' 
                position="relative"
                >
                ${price}
                </Text>
                <Link to="/checkout">
                    <Box>
                        <AddCart />
                    </Box>
                
                </Link>
            </HStack>
        </VStack>
    </VStack>
    </Link>
)
}

export default BookTop10

