import React from "react";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { StarIcon } from "../../../components/icons";
import "./BookBestSeller.css";
import { Link } from "react-router-dom";

const BookBestSeller = ({bookData}) => {
  return (
    <Link to="/books/book-detail">
      <Grid
        h="280px"
        w="380px"
        templateColumns="repeat(2, 1fr)"
        display="inline-grid"
        cursor="pointer"
        className="book-item"
        marginLeft='30px'
      >
        <GridItem h="100%">
          <Image
            src={bookData.imageUrl}
            alt="Image book"
            borderRadius="20px"
          />
        </GridItem>
        <GridItem w="100%" h="100%" marginLeft="20px">
          <Flex marginBottom="30px">
            <Box className="book-category">{bookData.category}</Box>
            <Box className="book-rating" marginLeft='10px'>
              <StarIcon />
              <span>{bookData.rating}</span>
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
              {bookData.title}
            </Box>
            <Box
              fontSize="16px"
              fontWeight="400"
              lineHeight="24px"
              className="book-author"
            >
              {bookData.author}
            </Box>
          </Box>
          <Box
            fontSize="26px"
            fontWeight="600"
            lineHeight="24px"
            color='#8d28ad'
          >
            ${bookData.price}
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
};

export default BookBestSeller;
