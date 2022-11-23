import { AspectRatio, Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CheckoutItem = ({ bookData }) => {
  return (
    <Link to={`/books/book-detail/${bookData.id}`}>
      <Grid
        h="200px"
        w="300px"
        templateColumns="repeat(2, 1fr)"
        display="inline-grid"
        cursor="pointer"
        className="book-item"
      >
        <GridItem>
          <AspectRatio ratio={2 / 3} w={120}>
            <Image
              src={bookData.urls[0] || "./static-data/img-none.jpg"}
              // src={"./static-data/img-none.jpg"}
              alt="Image book"
              borderRadius="20px"
            />
          </AspectRatio>
        </GridItem>
        <GridItem w="100%" h="100%" marginLeft="16px" display="flex" alignItems="center" justifyContent="center">
          <Box minH="86px">
            <Text
              fontSize="18px"
              fontWeight="600"
              lineHeight="24px"
              marginBottom="10px"
              className="book-title"
            >
              {bookData.name || "Null"}
            </Text>
            <Box
              fontSize="14px"
              fontWeight="500"
              lineHeight="24px"
              className="book-author"
            >
              {bookData.authors.map((item, key) => {
                return <span key={key}>{item}</span>;
              })}
              {/* Authors */}
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Link>
  );
};

export default CheckoutItem;
