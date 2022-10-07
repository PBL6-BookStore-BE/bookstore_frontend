import { Box } from "@chakra-ui/react";
import React from "react";
import { ArrowRightIcon } from "../icons";

const CarouselNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      right='-20px'
      pos="absolute"
      top="50%"
      transform="translateY(-50%)"
      cursor="pointer"
      textAlign="center"
      zIndex={1}
      onClick={onClick}
      backgroundColor="#8D28AD"
      width="35px"
      height="35px"
      borderRadius="50%"
      _hover={{
        bg: "#8D28AD",
      }}
      boxShadow='0px 14px 26px rgba(39, 13, 48, 0.25)'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <ArrowRightIcon  />
    </Box>
  );
};

export default CarouselNextArrow;
