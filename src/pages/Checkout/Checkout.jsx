import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  IconButton,
  Spacer,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { AddIcon, SubIcon } from "../../components/icons";
import { listCartItems, removeItemFromCart, saveItemToCart, updateItem } from "../../store/cases/cart/action";
import { UpdateTotalAmount } from "../../store/cases/cart/slice";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import PaymentPage from "./PaymentPage/PaymentPage";
import "./style.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);
  const listCartState = useSelector((state) => state.cart.initialListCartState);
  const [total, setTotal] = useState();
  const [isCheckout, setIsCheckout] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCheckout(true);
    
  }

  const cartItemRemoveHanlder = (id, quantity) => {
    dispatch(updateItem({ idBook: id, quantity: quantity - 1}));
  };

  const cartItemAddHandler = (item) => {
    dispatch(saveItemToCart(item));
  };

  const removeItems = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const loadData = useCallback(async () => {
    try {
      dispatch(listCartItems());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      if (!isLogged) {
        navigate("/login");
      } else {
        loadData();
      }
    } catch (error) {
      console.log(error)
    }
  }, [isLogged, navigate, dispatch, loadData]);

  useEffect(() => {
    let temp = 0;
    listCartState?.data.map((item) => {
      temp += item.bookVM.price * item.quantity
    })
    setTotal(temp?.toFixed(2));
  }, [listCartState.data]);

  return (
    <Box>
      <Header />
      <Box bg="linear-gradient(90deg, #FBF7FC 22.24%, rgba(251, 247, 252, 0) 100%)">
        <Breadcrumb className="container" fontSize={"md"} pt={3} pb={3}>
          <BreadcrumbItem color="#8D28AD">
            <BreadcrumbLink as={Link} to="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem color="#755A7D">
            <BreadcrumbLink as={Link} to="/checkout" isCurrentPage>
              Checkout
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {!isCheckout && (
        <Container maxW="container.lg" marginTop="10">
          {listCartState.isFetching && (
            <Flex alignItems="center" justifyContent="center" w="100%" height="100%">
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='#8D28AD'
                size='xl'
              />
            </Flex>
          )}
          <Box maxH="514px" overflowY="auto">
            {!listCartState.isFetching && listCartState.data && (
              <Table variant="simple">
                <Thead
                  className="table-header"
                  position="sticky"
                  top={0}
                  zIndex="2"
                >
                  <Tr>
                    <Th>Item</Th>
                    <Th>Quantity</Th>
                    <Th>Price</Th>
                    <Th>Total Price</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {listCartState.data.map((item) => (
                      <Tr key={item.id}>
                        <Td>
                          <CheckoutItem bookData={item.bookVM} />
                        </Td>
                        <Td>
                          <Box
                            display="inline-flex"
                            padding="8px 0px"
                            bg="#EBEBEB"
                            borderRadius="8px"
                          >
                            <Button
                              color="brand"
                              variant="link"
                              _hover={{
                                opacity: 0.6,
                              }}
                              mr={5}
                              onClick={() => {
                                cartItemRemoveHanlder(item.bookVM.id, item.quantity);
                              }}
                              disabled={item.quantity === 1 ? true : false}
                            >
                              <SubIcon />
                            </Button>
                            <Text fontWeight="bold">{item.quantity}</Text>
                            <Button
                              color="brand"
                              variant="link"
                              _hover={{
                                opacity: 0.6,
                              }}
                              ml={5}
                              onClick={() => {
                                cartItemAddHandler({
                                  idBook: item.bookVM.id,
                                  quantity: 1
                                });
                              }}
                            >
                              <AddIcon />
                            </Button>
                          </Box>
                        </Td>
                        <Td>${item.bookVM.price.toFixed(2)}</Td>
                        <Td>${(item.bookVM.price * item.quantity).toFixed(2)}</Td>
                        <Td>
                          <IconButton
                            colorScheme="gray"
                            variant="ghost"
                            aria-label="Cart"
                            icon={<DeleteIcon />}
                            onClick={() => {
                              removeItems(item.bookVM.id)
                            }}
                          />
                        </Td>
                      </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
          <Box className="checkout-card" padding="20">
            <img
              src="./static-data/bg-checkout.png"
              alt="illustraion"
              className="illustraion-bg"
            />
            <Flex>
              <Box w="50%">
                <Text fontSize='2xl' fontWeight="600">Shopping Summary</Text>
                <Text marginTop="30px" color="rgba(0, 0, 0, 0.5)">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Box>
              <Spacer />
              <Box w="50%">
                <Flex>
                  <Center>
                    <Text color="#755A7D" fontWeight="500">Subtitle</Text>
                  </Center>
                  <Spacer />
                  <Center>
                    <Text fontWeight="700">${listCartState.isFetching ? 0 : total}</Text>
                  </Center>
                </Flex>
                <Flex marginTop="16px">
                  <Center>
                    <Text color="#755A7D" fontWeight="500">Shipping</Text>
                  </Center>
                  <Spacer />
                  <Center>
                    <Text fontWeight="700">${listCartState.isFetching ? 0 : 2.35}</Text>
                  </Center>
                </Flex>
                <Divider orientation='horizontal' marginTop="16px" borderColor="#D5A4E4" />
                <Flex marginTop="16px">
                  <Center>
                    <Text color="#755A7D" fontWeight="500">Total</Text>
                  </Center>
                  <Spacer />
                  <Center>
                    <Text fontWeight="700">${listCartState.isFetching ? 0 : (Number(total) + 2.35)}</Text>
                  </Center>
                </Flex>
                <Button
                  bgColor="#8D28AD"
                  color="#FFF" w="100%"
                  marginTop="20px"
                  _hover={{
                    opacity: "0.8",
                  }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                <Flex alignItems="center" justifyContent="center" className="link-shopping">
                  <Link to="/books" style={{ color: "#8D28AD", fontWeight: "600", fontSize: "14px", marginTop: "10px" }}>Continue Shopping</Link>
                </Flex>
              </Box>          
            </Flex>
          </Box>
        </Container>
      )}
      {isCheckout && (
        <PaymentPage cart={listCartState?.data}/>
      )}
      <Footer />
    </Box>
  );
};

export default Checkout;
