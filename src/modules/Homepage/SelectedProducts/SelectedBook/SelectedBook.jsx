import React from 'react'
import { VStack, Image, HStack, Text, Flex, AspectRatio } from '@chakra-ui/react'
import { StarIcon } from "../../../../components/icons";
import { Link } from "react-router-dom";

const SelectedBook = ( {urls, authors, rating} ) => {
  return (
    <Link to="/books/book-detail" >
      <VStack position='relative'
        w='235px'
        h='450px'
        marginBottom='42px'
        // marginLeft={{base: '102px', lg: '10px'}} 
        // marginRight={{base: '102px', lg: '10px'}}
      >
        <HStack >
          <AspectRatio ratio={2/3} w={210}>

            <Image 
                borderRadius='20px'
                src={urls[0]}
                boxShadow="0px 14px 26px rgba(39, 13, 48, 0.25)"
            />
          </AspectRatio>
        </HStack>
        <HStack  h='75px' w='100%' display='block' position='absolute' top='62%' margin='0 auto' >
            <Image 
                w='60px'
                src='./static-data/img-none.jpg'
                borderRadius='50%'
                border='3px solid #fff'
                margin='0 auto'
            />
            <Text 
                textAlign='center'
                fontSize="16px" 
                fontWeight="600" 
                className="book-title"
            >
              {authors.map((item, key) =>{
                return (
                  <span key={key}>{item}</span>
                )
              })}
            </Text>
            <Flex spacing={1} justifyContent='center'>
            { rating ? 
                Array.from(Array(Math.floor(rating)), (e, i) => {
                    return (<StarIcon key={i} /> )
                })
                : <span>0 <StarIcon /></span>
            }
            {/* 0 */}
          </Flex>
        </HStack>

      </VStack>
    </Link>
  )
}

export default SelectedBook