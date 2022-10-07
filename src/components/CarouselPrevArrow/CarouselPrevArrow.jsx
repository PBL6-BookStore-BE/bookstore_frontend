import { Box } from "@chakra-ui/react";
import React from "react";
import { PrevRightIcon } from "../icons";

const CarouselPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      left='-20px'
      pos="absolute"
      top="50%"
      transform="translateY(-50%)"
      cursor="pointer"
      width="40px"
      textAlign="center"
      zIndex={1}
      onClick={onClick}
      backgroundColor="#FFFFFF"
      w="35px"
      h="35px"
      borderRadius="50%"
      _hover={{
        bg: "#FFFFFF",
      }}
      boxShadow="0px 14px 26px rgba(39, 13, 48, 0.25)"
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <PrevRightIcon/>
    </Box>
  );
};

export default CarouselPrevArrow;
