import React from 'react'
import {HStack, VStack, Text, Box, Flex, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../../../components/icons";
import ButtonAddCart from "../../../../components/ButtonAddCart/ButtonAddCart"
import { Link } from "react-router-dom";
import '../../Top10List/BookTop10/style.css';

const FeatureBook = ({ urls, name, price, rating, categoryName, id  }) => {
  return (
    <HStack
      cursor="pointer"
      marginLeft='30px'
      position="relative"
      align="flex-start"
      marginBottom='38px'
    >
      <Link to={`/books/book-detail/${id}`}>
        <AspectRatio ratio={2/3} w='170px'>
          <Image
            src={urls[0]}
            alt="Image book"
            borderRadius="20px"
          />
        </AspectRatio>
      </Link>
      <VStack maxW='320px' position="absolute" left='30%' top='0'align="flex-start">
        <Flex>
            <Box className="book-category">{categoryName}</Box>
            <Box marginLeft='20px' marginTop='5px' >
              { rating ? 
                Array.from(Array(Math.floor(rating)), (e, i) => {
                  return (
                    <StarIcon  key={i} /> 
                    )
                }) 
                : <span>0 <StarIcon /></span> 
              }
            </Box>
            <Box className="a-start-icon" marginTop='5px'>
              { rating < 5 ? 
                  Array.from(Array(Math.ceil(5-rating)), (e, i) => {
                  return (
                    <StarIcon  key={i} /> 
                    )
                }) 
                : <span></span> 
            }
            </Box>
            <Text color='#755A7D' marginLeft='16px' fontSize='14px' alignSelf='center'>
              459 Reviews
            </Text>
        </Flex>
        <VStack align='flex-start' spacing={2} >
          <Text className='book-title'
            marginTop='8px'
            fontSize='21px' 
            fontWeight='bold'
          >
            {name || 'Null'}
          </Text>
          <Text fontSize='14px'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis voluptate officiis.</Text>
        </VStack>
        <HStack >
          <Text 
            marginTop='12px'
            fontSize="26px"
            fontWeight="bold"
            lineHeight="24px"
            color='#8d28ad'
            marginBottom={6}
          >
            ${price || '0'}
          </Text>
        </HStack>
        <HStack spacing={5}>
          <Link to="/checkout">
            <ButtonAddCart text='Add to cart' />
          </Link>
          <Link to="/books/book-detail">
            <Text className='book-title'
              fontSize='14px'
              color='#8d28ad' 
              fontWeight="500"
            >
              View Details
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default FeatureBook
