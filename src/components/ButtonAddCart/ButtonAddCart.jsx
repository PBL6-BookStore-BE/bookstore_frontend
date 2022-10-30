import React from 'react'
import { Text, Button, Box } from "@chakra-ui/react";
import { CartIcon } from "../icons";
import './style.css'

const ButtonAddCart = ({ text }) => {
  return (
    <Button
        bg="#8D28AD"
        color='#fff'
        borderRadius='8px'
        minWidth="100px"
        alignItems='center'
        padding={8,4}
        paddingLeft={2}
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
        <Text fontWeight='400' marginLeft='8px'>{text}</Text>
    </Button>
  )
}

export default ButtonAddCart