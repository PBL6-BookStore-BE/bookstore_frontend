import { Box, Heading, VStack, Text, HStack, TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import './style.css'
import { toggleModal } from "../../store/cases/order/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrderById } from "../../apis/order.api";
import InvoiceRow from "./InvoiceRow";

const FormOrderDetails = () => {
    const dispatch = useDispatch();
    const { isModalOpen, orderId } = useSelector((store) => store.order);
    const [invoices, setInvoices]=useState();

    useEffect(() => {
        getOrderById(orderId).then((res) => setInvoices(res));
    }, [orderId]);

    return (
        <div className={`${isModalOpen? 'form-add active': 'form-add'}`}>
            <Box className='form-box'>
                <HStack spacing={16} p={[4, 6]} pr={8} mb={6} bgColor='#F0E4F4'>
                <VStack align='flex-start'>
                    <Heading size='md' fontWeight='500'>
                    Product
                    </Heading>
                    <Text fontSize='14px'>
                        List of products you have ordered
                    </Text>
                </VStack>
                <Box 
                    className='icon-close' 
                    onClick={(e) => {
                    dispatch(toggleModal())
                    }}
                >
                    <CloseIcon m='15px' w='10px' h='10px'/>
                </Box>
                </HStack>
                <TableContainer m='32px 0'>
                <Table>
                    <Thead>
                    <Tr>
                        <Th textTransform="uppercase" color='#707275'>Product name</Th>
                        <Th textTransform="uppercase" color='#707275'>Quantity</Th>
                        <Th textTransform="uppercase" color='#707275'>Item price</Th>
                        <Th textTransform="uppercase" color='#707275'>Amount</Th> 
                    </Tr>
                    </Thead>
                    <Tbody>
                        {invoices?.orderDetails?.map((item, index) => (
                            <InvoiceRow key={index} id={item.idBook} quantity={item.quantity} />
                        ))}
                    </Tbody>
                </Table>
                </TableContainer>
                <Box w='100%' padding='24px 32px' borderRadius='12px' backgroundColor='#f9fafb' border='1px solid #f4f5f7'>
                    <Box display='flex' justifyContent='space-between'>
                        <Box display='flex' textTransform="uppercase" flexDirection='column' textAlign='left'>
                        <Box color='#4c4f52' fontWeight='700' fontSize='14px' mb='4px'>Payment Method</Box>
                        <Box color='#707275' fontWeight='600' fontSize='14px'>{invoices?.payment}</Box>
                        </Box>
                        <Box display='flex' textTransform="uppercase" flexDirection='column' textAlign='left'>
                        <Box color='#4c4f52' fontWeight='700' fontSize='14px' mb='4px'>Shipping cost</Box>
                        <Box color='#707275' fontWeight='600' fontSize='14px'>$2.35</Box>
                        </Box>
                        <Box display='flex' textTransform="uppercase" flexDirection='column' textAlign='left'>
                        <Box color='#4c4f52' fontWeight='700' fontSize='14px' mb='4px'>Total amount</Box>
                        <Box color='#f05252' fontWeight='700' fontSize='20px'>${invoices?.total}</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default FormOrderDetails
