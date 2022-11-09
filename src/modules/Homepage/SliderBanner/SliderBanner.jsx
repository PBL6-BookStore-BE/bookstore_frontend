import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import {
  BookIcon,
  CircleElement,
  CustomerIcon,
} from "../../../components/icons";
import CircleElementSmall from "../../../components/icons/sliderbanner/CircleElementSmall";
import BookBanner from "./BookBanner/BookBanner";
import "./SliderBanner.css";

const SliderBanner = ({ booksData }) => {
  return (
    <Box bg="#451355" color="#FFFFFF" pos="relative">
      <CircleElement position="absolute" bottom="0" zIndex="0" />
      <CircleElementSmall
        position="absolute"
        top="10%"
        left="50%"
        transform="translate(-50%, -10%)"
      />
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={10}
        padding="100px 0"
        className="container"
        isolation="isolate"
      >
        <GridItem className="heading" colSpan={2} w={600}>
          <Box
            className="heading-title"
            fontSize="68px"
            lineHeight="74px"
            marginBottom="16px"
          >
            Welcome to <Text as="b">Clevr</Text> Online Book Store
          </Box>
          <Box
            className="heading-description"
            fontSize="18px"
            color="rgba(255, 255, 255, 0.8)"
            fontWeight="400"
            lineHeight="24px"
            marginBottom="30px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </Box>
          <Flex className="heading-counts" marginBottom="20px">
            <Box className="counts-book" fontSize="18px">
              <Flex alignItems="center" fontSize="28px">
                <BookIcon />
                <Text display="inline-block" marginLeft="10px" fontWeight="600">
                  68+k
                </Text>
              </Flex>
              <Text
                color="rgba(255, 255, 255, 0.6)"
                fontWeight="400"
                fontSize="16px"
              >
                Book Collections
              </Text>
            </Box>
            <Box className="counts-customer" fontSize="18px" marginLeft="48px">
              <Flex alignItems="center" fontSize="28px">
                <CustomerIcon />
                <Text display="inline-block" marginLeft="10px" fontWeight="600">
                  25,634
                </Text>
              </Flex>
              <Text
                color="rgba(255, 255, 255, 0.6)"
                fontWeight="400"
                fontSize="16px"
              >
                Customers
              </Text>
            </Box>
          </Flex>
          <Button
            colorScheme="pink"
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
            size="lg"
            width="300px"
            padding="30px 20px"
            textAlign="start"
            justifyContent="space-between"
          >
            Go to Collections
          </Button>
        </GridItem>
        <GridItem colSpan={3}>
          <Slider
            infinite
            autoplay
            autoplaySpeed={2000}
            slidesToShow={2}
            slidesToScroll={1}
            arrows={false}
            dots
            appendDots={(dots) => <ul>{dots}</ul>}
            customPaging={(i) => <div className="slick-custom"></div>}
            className="slider"
          >
            {booksData.map((item, key) => {
              return <BookBanner key={item.id} bookData={item} />;
            })}
          </Slider>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SliderBanner;
