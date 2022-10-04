import { TriangleUpIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';

const NavigationButton = ({onClick}) => {
    return (
        <Button onClick={onClick} colorScheme='purple' display='flex' alignItems='center' justifyContent='space-between'>
            <span>Menu</span>
            <TriangleUpIcon w={2} h={2} marginLeft='10px' />
        </Button>
    );
};

export default NavigationButton;