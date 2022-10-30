import React from 'react'
import {Box, Text, Button, HStack, Image, AspectRatio } from "@chakra-ui/react";
import { AddIcon, SubIcon } from '../icons';
const ButtonCount = () => {
    return (
    <Box
        display='flex'
        padding='8px 0px'
        bg='#EBEBEB'
        borderRadius='8px'
    >
        <Button 
            color='brand' 
            variant='link' 
            underline='none'
            _hover={{
                opacity: 0.8
            }}
            mr={5}
        >
            <SubIcon />
        </Button>
        <Text fontWeight='bold'>1</Text>
        <Button 
            color='brand' 
            variant='link'
            _hover={{
                opacity: 0.8
            }}
            ml={5}
            
        >
            <AddIcon />
        </Button>
    </Box>
    )
}

export default ButtonCount
