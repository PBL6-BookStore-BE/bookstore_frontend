import React from 'react'
import {HStack, VStack, Text, Box, Flex, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../../../components/icons";
import ButtonAddCart from "../../../../components/ButtonAddCart/ButtonAddCart"
import { Link, useNavigate } from "react-router-dom";
import '../../Top10List/BookTop10/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { saveItemToCart } from '../../../../store/cases/cart/action';

const FeatureBook = ({ data  }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.auth);

  const handleAddToCart = () => {
    if (isLogged) {
      const item = { idBook: data.id, quantity: 1 }
      dispatch(saveItemToCart(item));
      toast.success("Product added to cart");
    } else {
      navigate("/login");
    }
  }
  return (
    <HStack
      cursor="pointer"
      marginLeft='30px'
      position="relative"
      align="flex-start"
      marginBottom='38px'
    >
      <Link to={`/books/book-detail/${data.id}`}>
        <AspectRatio ratio={2/3} w='170px'>
          <Image
            src={data.urls[0]}
            alt="Image book"
            borderRadius="20px"
          />
        </AspectRatio>
      </Link>
      <VStack maxW='320px' position="absolute" left='30%' top='0'align="flex-start">
        <Flex>
            <Box className="book-category">{data.categoryName}</Box>
            <Box marginLeft='20px' marginTop='5px' >
              { data.rating ? 
                Array.from(Array(Math.floor(data.rating)), (e, i) => {
                  return (
                    <StarIcon  key={i} /> 
                    )
                }) 
                : <span>0 <StarIcon /></span> 
              }
            </Box>
            <Box className="a-start-icon" marginTop='5px'>
              { data.rating < 5 ? 
                  Array.from(Array(Math.ceil(5-data.rating)), (e, i) => {
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
          <Link to={`/books/book-detail/${data.id}`}>
            <Text className='book-title'
              marginTop='8px'
              fontSize='21px' 
              fontWeight='bold'
            >
              {data.name || 'Null'}
            </Text>
            <Text fontSize='14px'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis voluptate officiis.
            </Text>
          </Link>
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
            ${data.price || '0'}
          </Text>
        </HStack>
        <HStack spacing={5}>
          {/* <Link to="/checkout"> */}
            <ButtonAddCart text='Add to cart' onClick={handleAddToCart} />
          {/* </Link> */}
          <Link to={`/books/book-detail/${data.id}`}>
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
