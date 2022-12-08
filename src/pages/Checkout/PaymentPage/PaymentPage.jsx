import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Spacer,
  Select,
  Input,
  AspectRatio,
  Button,
  Image,
  Divider,
  Center
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PaypalButton from '../../../components/PaypalButton/PaypalButton';
import { getInforUser } from '../../../store/cases/user/action';

const PaymentPage = ({ cart, subtitle }) => {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 19
  };

  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const { email } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState([]);

  const handleBuy = () => {
    console.log(userInfo);
  }

  useEffect(() => {
    if (email) {
      dispatch(getInforUser(email)).then(res => setUserInfo(res.payload));
    }
  }, [dispatch, email])
  return (
      <Flex className='container' marginTop="20" marginBottom="20">
        <Flex flexDirection="column" w="60%">
          <Box padding="50px 40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Text fontWeight="600" fontSize="22px">Shipping Information</Text>
                <Box>
                  <Flex>
                    <FormControl mt={4} w="45%">
                      <FormLabel mb={2}>Full Name *</FormLabel>
                      <Input
                        value={userInfo.fullName}
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        onChange={(event) => setUserInfo({
                          ...userInfo,
                          fullName: event.target.value,
                        })}
                      />
                    </FormControl>
                    <Spacer  />
                    <FormControl mt={4}  w="45%">
                      <FormLabel mb={2}>Email *</FormLabel>
                      <Input
                        value={userInfo.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(event) => setUserInfo({
                          ...userInfo,
                          email: event.target.value,
                        })}
                      />
                    </FormControl>
                  </Flex>
                  <Flex>
                    <FormControl mt={4} w="45%">
                      <FormLabel mb={2}>Address *</FormLabel>
                      <Input
                        value={userInfo.address}
                        name="address"
                        type="text"
                        placeholder="Address"
                        onChange={(event) => setUserInfo({
                          ...userInfo,
                          address: event.target.value,
                        })}
                      />
                    </FormControl>
                    <Spacer />
                    <FormControl mt={4} w="45%">
                      <FormLabel mb={2}>City *</FormLabel>
                      <Input
                        value={userInfo.city}
                        name="city"
                        type="text"
                        placeholder="City"
                        onChange={(event) => setUserInfo({
                          ...userInfo,
                          city: event.target.value,
                        })}
                      />
                    
                    </FormControl>
                  </Flex>
                  <FormControl mt={4}>
                      <FormLabel mb={2}>Phone Number *</FormLabel>
                      <Input
                        value={userInfo.phoneNumber}
                        name="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        onChange={(event) => setUserInfo({
                          ...userInfo,
                          phoneNumber: event.target.value,
                        })}
                      />
                    </FormControl>
                </Box>
          </Box>
          <Box padding="50px 40px" marginTop="40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Text fontWeight="600" fontSize="22px" marginBottom="10px">Payment Method</Text>
              <Text marginBottom="10px">Select your payment method below</Text>
              <Select name="paymentMethod" onChange={(e) => {
                setPaymentMethod(e.target.value)
              }}>
                <option value="cash">Cash</option>
                <option value="paypal">Paypal</option>
              </Select>
              {paymentMethod === "cash" && (
                <Button
                    type="submit"
                    className="btn-submit"
                    colorScheme="purple"
                    onClick={handleBuy}
                >
                    Buy
                </Button>
              )}
              {paymentMethod === "paypal" && (
                <Box marginTop="20px">
                  <PaypalButton product={product} />
                </Box>
              )}
          </Box>
        <Spacer />
        </Flex>
        <Spacer />
          <Box w="35%">
            <Text fontWeight="600" fontSize="22px">Order Summary</Text>
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="100%" padding="20px 20px" overflow="hidden">
              <Box  maxH="300px" overflowY="auto">
                {cart && (
                  cart.map((item) => (
                    <Box marginBottom="16px" key={item.id}>
                      <Text fontSize="14px" fontWeight="600" marginBottom="8px">{item.bookVM.name}</Text>
                      <Flex>
                        <Box>
                          <AspectRatio ratio={2 / 3} w="50px">
                            <Image
                              src={item.bookVM.urls[0] || "./static-data/img-none.jpg"}
                              alt="Image book"
                            />
                          </AspectRatio>
                        </Box>
                        <Spacer/>
                        <Text>Lorems</Text>
                        <Spacer/>
                        <Flex flexDirection="column" alignItems="flex-end">
                          <Text fontWeight="600">${item.bookVM.price}</Text>
                          <Text fontWeight="600">Quantity {item.quantity}</Text>
                          <Link fontSize="12px">Remove</Link>
                        </Flex>
                      </Flex>
                    </Box>
                  )
                ))}
              </Box>
              <Divider margin="20px 0" />
              <Flex>
                <Center>
                  <Text color="#755A7D" fontWeight="500">Subtitle</Text>
                </Center>
                <Spacer />
                <Center>
                  <Text fontWeight="600">${subtitle}</Text>
                </Center>
              </Flex>
              <Flex marginTop="10px">
                <Center>
                  <Text color="#755A7D" fontWeight="500">Shipping</Text>
                </Center>
                <Spacer />
                <Center>
                  <Text fontWeight="600">$2.35</Text>
                </Center>
              </Flex>
              <Divider margin="20px 0" />
              <Flex marginTop="16px">
                <Center>
                  <Text color="#755A7D" fontWeight="500">Total</Text>
                </Center>
                <Spacer />
                <Center>
                  <Text fontWeight="700">${Number(subtitle) + 2.35}</Text>
                </Center>
              </Flex>
            </Box>
        
          </Box>
      </Flex>
  );
};

export default PaymentPage;