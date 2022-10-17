import React from 'react'
import { Text, Button, Box } from "@chakra-ui/react";
import { CartIcon } from "../icons";
import './style.css'

const ButtonAddCart = () => {
  return (
    <Button
        bg="#8D28AD"
        color='#fff'
        borderRadius='6px'
        minWidth="150px"
        alignItems='center'
        paddingLeft={0}
        _hover={{opacity: '0.6'}}
        
    >
      <Box
        width="30px"
        height="30px"
        alignItems="center"
        pos="relative"
        className="a-cart-icon"
        marginLeft='8px'
      >
        <CartIcon />
      </Box>
        <Text fontWeight='400' marginLeft='8px'>Add to cart</Text>
    </Button>
  )
}

export default ButtonAddCart