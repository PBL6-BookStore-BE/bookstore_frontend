import React from "react";
import { Box, Flex, Grid, GridItem, Image, AspectRatio } from "@chakra-ui/react";
import { StarIcon } from "../../../components/icons";
import "./BookBestSeller.css";
import { Link } from "react-router-dom";

const BookBestSeller = ({bookData}) => {
  
  return (
    <Link to={`/books/book-detail/${bookData.id}`}>
      <Grid
        h="280px"
        w="380px"
        templateColumns="repeat(2, 1fr)"
        display="inline-grid"
        cursor="pointer"
        className="book-item"
        marginLeft='30px'
      >
        <GridItem >
          <AspectRatio ratio={2/3} w={190}>
            <Image
              src={bookData.urls[0] || './static-data/img-none.jpg'}
              alt="Image book"
              borderRadius="20px"
              // w='190px'
              // h='100%'
            />

          </AspectRatio>
        </GridItem>
        <GridItem w="100%" h="100%" marginLeft="20px">
          <Flex marginBottom="30px">
            <Box className="book-category">{bookData.categoryName || 'None'}</Box>
            <Box className="book-rating" marginLeft='10px'>
              <StarIcon />
              <span>{bookData.rating ? bookData.rating : 0}</span>
            </Box>
          </Flex>
          <Box minH='86px' marginBottom='50px'>
            <Box
              fontSize="22px"
              fontWeight="500"
              lineHeight="24px"
              minH='48px'
              marginBottom="14px"
              className="book-title"
            >
              {bookData.name || 'Null'}
            </Box>
            <Box
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              className="book-author"
            >
              {/* {bookData.authors || 'Null'} */}
              {bookData.authors.map((item, key) =>{
                return (
                  <span key={key}>{item}</span>
                )
              })}
            </Box>
          </Box>
          <Box
            fontSize="26px"
            fontWeight="600"
            lineHeight="24px"
            color='#8d28ad'
          >
            ${bookData.price || '0'}
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
};

export default BookBestSeller;
