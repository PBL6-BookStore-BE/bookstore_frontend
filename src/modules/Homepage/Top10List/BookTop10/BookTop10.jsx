import React from 'react'
import { VStack, Image, Box, Text, Flex, AspectRatio } from '@chakra-ui/react';
import { StarIcon } from "../../../../components/icons";
import AddCart from '../../../../components/AddCart/AddCart';
import { Link } from "react-router-dom";
import './style.css';

const BookTop10 = ({ urls, name, authors, price, rating, id }) => {
    return (
    
      <VStack
        w='170px'
        align="flex-start"
        marginBottom='42px'
        marginLeft={{base: '102px', lg: '10px'}}
      >
        <Link to={`/books/book-detail/${id}`}>
        <AspectRatio ratio={2/3} w={170}>
            <Image 
                borderRadius='20px'
                src={urls[0] || './static-data/img-none.jpg'}
            />
        </AspectRatio>
        <Flex spacing={1} marginTop='15px' >
        { rating ? 
            Array.from(Array(Math.floor(rating)), (e, i) => {
                return (<StarIcon key={i} /> )
            })
            : <span>0 <StarIcon /></span> 
        }
        </Flex>
        <Box display='' h='115px' marginTop='10px'>
            <Text 
                fontSize="18px" 
                fontWeight="500" 
                lineHeight="30px"
                className="book-title"
            >
                {name || 'Null' }
            </Text>
            <Text 
                marginTop='8px'
                fontSize="16px" 
                lineHeight="24px"
            >
                {authors.map((item, key) =>{
                return (
                  <span key={key}>{item}</span>
                )
              })}
            </Text>
        </Box>
    </Link>
        <Box 
            alignItems="flex-start" 
            w='147px' 
            backgroundColor="#EEDFF3" 
            borderRadius='6px' 
            >
            <Flex >
                <Text 
                fontSize='21px' 
                lineHeight="48px" 
                fontWeight="700" 
                marginLeft='35px' 
                position="relative"
                >
                ${price || '0'}
                </Text>
                <Link to="/checkout">
                    <Box marginTop='4px'>
                        <AddCart />
                    </Box>
                
                </Link>
            </Flex>
        </Box>
    </VStack>
    
)
}

export default BookTop10

