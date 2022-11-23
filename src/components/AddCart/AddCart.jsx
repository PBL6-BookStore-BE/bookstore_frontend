import React from 'react';
import { Box } from "@chakra-ui/react";
import { CartIcon } from "../icons";
import './style.css';

const AddCart = () => {
  return (
    <Box
        width="40px"
        height="40px"
        backgroundColor="#8D28AD"
        borderRadius="50%"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        pos="relative"
        className="a-cart-icon"
    >
      <CartIcon />
    </Box>
  )
}

export default AddCart