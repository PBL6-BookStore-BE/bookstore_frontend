import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Heading, Tooltip } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import { getOrderByUserId } from '../store/cases/order/action';
import { getInforUser } from '../store/cases/user/action';
import { Table } from "react-chakra-pagination";
import { DetailsIcon } from '../components/icons';
import FormOrderDetails from '../components/FormOrderDetails/FormOrderDetails';
import { setDetails, toggleModal } from '../store/cases/order/slice';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);
    const { orderDetails } = useSelector((state) => state.order);
    const [page, setPage] = useState(1);
    const loadOrderByUser = useCallback(async () => {
        const email = localStorage.getItem("email") || "";
        try {
            dispatch(getInforUser(email));
            dispatch(getOrderByUserId(userInfo.id));
        } catch (error) {
            console.log(error);
        }
    }, [userInfo.id, dispatch]);

    useEffect(() => {
        loadOrderByUser();
    }, [userInfo.id, loadOrderByUser]);

    if (orderDetails.isLoading) {
        return <Loading />;
    }

    const numDescending = [...orderDetails.data].sort((a, b) => b.id - a.id);

    // eslint-disable-next-line no-sequences
    const tableData = numDescending.map((order) => ({key: order.id}, {
        createdDate: order.createdDate.slice(0, 10).split('-').reverse().join('/'),
        orderAddress: order.orderAddress,
        receiverName: order.receiverName,
        number: order.number,
        payment: order.payment,
        total: order.total,
        status: (
          order.status ? (
            <Box
                display="inline-block"
                color="#8D28AD"
                padding="0 8px"
                fontSize="12px"
                backgroundColor="rgb(141,40,173,.4)"
                borderRadius="9999px"
            >
                Delivered
            </Box>
          ) : (
            <Box
                display="inline-block"
                color="#C27803"
                padding="0 8px"
                fontSize="12px"
                backgroundColor="#FDF6B2"
                borderRadius="9999px"
            >
                Pending
            </Box>
          )
        ),
        action: (
            <Tooltip label="Details" placement='top'>
                <Button
                    bgColor='#fff' 
                    _hover={{ 
                        color: '#8D28AD' 
                    }}
                    onClick={(e) => {
                        dispatch(toggleModal())
                        dispatch(setDetails({orderId: order.id}))
                    }}
                >
                    <DetailsIcon /> 
                </Button>
                </Tooltip>
        )     
    }));
    const tableColumns = [
    {
        Header: "DATE",
        accessor: "createdDate"
    },
    {
        Header: "RECEIVER NAME",
        accessor: "receiverName"
    },
    {
        Header: "SHIPPING ADDRESS", 
        accessor: "orderAddress"
    },
    {
        Header: "PHONE",
        accessor: "number"
    },
    {
        Header: "METHOD",
        accessor: "payment"
    },
    {
        Header: "AMOUNT",
        accessor: "total"
    },
    {
        Header: "STATUS",
        accessor: "status"
    },
    {
        Header: "ACTION",
        accessor: "action"
    }
    ];
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Order</title>
            </Helmet>
            <Header />
            <Box bg="linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%)">
                <Breadcrumb className="container" fontSize={"md"} pt={3} pb={3}>
                    <BreadcrumbItem color='#8D28AD'>
                        <BreadcrumbLink as={Link} to="/">
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem color='#755A7D'>
                        <BreadcrumbLink as={Link} to="/order-details">
                            My Order
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box  m={[0, 24]}>
                <Heading mt={-14} mb={4} textAlign='left' size='md'>My Orders</Heading>
                <Table
                    colorScheme="purple"
                    totalRegisters={orderDetails.data.length}
                    page={page}
                    onPageChange={(page) => setPage(page)}
                    columns={tableColumns}
                    data={tableData}
                />
            </Box>
            <FormOrderDetails />
            <Footer />
        </div>
    )
}

export default OrderDetails
