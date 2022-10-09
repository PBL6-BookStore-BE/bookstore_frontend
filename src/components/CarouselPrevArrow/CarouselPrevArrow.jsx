import { Box } from "@chakra-ui/react";
import React from "react";
import { PrevRightIcon } from "../icons";
import './style.css';

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
      zIndex={2}
      onClick={onClick}
      backgroundColor="#FFFFFF"
      w="40px"
      h="40px"
      borderRadius="50%"
      boxShadow="0px 14px 26px rgba(39, 13, 48, 0.25)"
      display='flex'
      alignItems='center'
      justifyContent='center'
      _hover={{
        bg: "#8D28AD",
      }}
      className='c-prev-arrow'
    >
      <PrevRightIcon />
    </Box>
  );
};

export default CarouselPrevArrow;
