import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AddIcon, SubIcon } from "../../components/icons";
import { listCartItems, removeItemFromCart, saveItemToCart } from "../../store/cases/cart/action";
import { AddToCart, RemoveAllItems, RemoveFromCart } from "../../store/cases/cart/slice";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import "./style.css";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart.initialCartState);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const listCartState = useSelector((state) => state.cart.initialListCartState)
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    try {
      dispatch(listCartItems());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      if (!user) {
        navigate("/Login");
      } else {
        dispatch(listCartItems()).unwrap();
      }
    } catch (error) {
      console.log(error)
    }
  }, [user, navigate, dispatch]);

  const cartItemRemoveHanlder = (id) => {
    dispatch(RemoveFromCart({ id: id }));
  };

  const cartItemAddHandler = (item) => {
    dispatch(saveItemToCart(item));
  };

  const removeItems = (id) => {
    dispatch(removeItemFromCart(id));
  };

  useEffect(() => {
    loadData();
  }, [loadData])

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
      <Container maxW="container.lg">
        <Box maxH="514px" overflowY="auto">
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
              {listCartState.data &&
                listCartState.data.map((item) => (
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
                            cartItemRemoveHanlder(item.id);
                          }}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
