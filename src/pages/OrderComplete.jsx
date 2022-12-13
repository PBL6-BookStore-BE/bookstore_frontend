import { Box, Button, Container, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const OrderComplete = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Box>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Order Complete</title>
            </Helmet>
            <Header />
            <Container
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                padding="4rem 0"
            >
                <Image src='./static-data/Checked.png' marginBottom="16px" boxSize="90px"/>
                <Text fontSize="28px" fontWeight="500" marginBottom="8px">Your order is completed!</Text>
                <Text fontSize="16px" color="#77838f" marginBottom="16px">Thank you for your order! Your order will be shipped within 2-3 days.</Text>
                <Button
                    bgColor="#8D28AD"
                    color="#fff"
                    transition="all 0.2s ease-in-out"
                    _hover={{ 
                        boxShadow: "0 4px 11px rgb(141 49 173 / 35%)",
                        transform: "translateY(-3px)" 
                    }}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    Continue Shopping
                </Button>
            </Container>
            <Footer />
        </Box>
    );
};

export default OrderComplete;