import React from 'react'
import { VStack, Image, Box, Text, Flex, AspectRatio, IconButton } from '@chakra-ui/react';
import { StarIcon } from "../../../../components/icons";
import AddCart from '../../../../components/AddCart/AddCart';
import { Link, useNavigate } from "react-router-dom";
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { saveItemToCart } from '../../../../store/cases/cart/action';
import { UpdateTotalAmount } from '../../../../store/cases/cart/slice';

const BookTop10 = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleAddToCart = () => {
        if (user) {
            const item = { idBook: data.id, quantity: 1 }
            dispatch(saveItemToCart(item));
            dispatch(UpdateTotalAmount(1))
            toast.success("Product added to cart");
        } else {
            navigate("/login");
        }
    }
    return (
      <VStack
        w='170px'
        align="flex-start"
        marginBottom='42px'
        marginLeft={{base: '102px', lg: '10px'}}
      >
        <Link to={`/books/book-detail/${data.id}`}>
        <AspectRatio ratio={2/3} w={170}>
            <Image 
                borderRadius='20px'
                src={data.urls[0] || './static-data/img-none.jpg'}
            />
        </AspectRatio>
        <Flex spacing={1} marginTop='15px' >
        { data.rating ? 
            Array.from(Array(Math.floor(data.rating)), (e, i) => {
                return (<StarIcon key={i} /> )
            })
            : <span>0 <StarIcon /></span> 
        }
        </Flex>
        <Box display='' h='115px' marginTop='10px'>
            <Text 
                fontSize="18px" 
                fontWeight="500" 
                lineHeight="30px"
                className="book-title"
            >
                {data.name || 'Null' }
            </Text>
            <Text 
                marginTop='8px'
                fontSize="16px" 
                lineHeight="24px"
            >
                {data.authors.map((item, key) =>{
                return (
                  <span key={key}>{item}</span>
                )
              })}
            </Text>
        </Box>
    </Link>
        <Box 
            alignItems="flex-start" 
            w='147px' 
            backgroundColor="#EEDFF3" 
            borderRadius='6px' 
            >
            <Flex >
                <Text 
                fontSize='21px' 
                lineHeight="48px" 
                fontWeight="700" 
                marginLeft='35px' 
                position="relative"
                >
                ${data.price || '0'}
                </Text>
                <IconButton borderRadius="50%" marginLeft="26px" marginTop='4px' onClick={handleAddToCart}>
                    <AddCart />
                </IconButton>
            </Flex>
        </Box>
    </VStack>
    
)
}

export default BookTop10

