import React from "react";
import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { StarIcon } from "../../../components/icons";
import "./BookBestSeller.css";
import { Link } from "react-router-dom";

const BookBestSeller = () => {
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
        <GridItem w="100%" h="100%">
          <Image
            src="./static-data/dummy-image-book.jpg"
            alt="Image book"
            borderRadius="20px"
          />
        </GridItem>
        <GridItem h="100%" marginLeft="20px">
          <Flex justifyContent="space-between" marginBottom="30px">
            <Box className="book-category">Nature</Box>
            <Box className="book-rating">
              <StarIcon />
              <span>4.3</span>
            </Box>
          </Flex>
          <Box
            fontSize="24px"
            fontWeight="500"
            lineHeight="24px"
            marginBottom="14px"
            className="book-title"
          >
            Life of Wilds
          </Box>
          <Box
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            marginBottom="60px"
            className="book-author"
          >
            Jasmine Belle
          </Box>
          <Box
            fontSize="26px"
            fontWeight="600"
            lineHeight="24px"
            className="book-price"
          >
            $24,99
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
};

export default BookBestSeller;
