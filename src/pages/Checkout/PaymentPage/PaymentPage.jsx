import { Box, Flex, useDisclosure, Button, Text, Spacer, Select, Img, AspectRatio, Image } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import AddressCustomerForm from './AddressCustomerForm';

const schema = yup.object({
  fullName: yup.string().required("Please provide a full name."),
  city: yup.string().required("Please provide an city."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please provide an email address."),
  address: yup.string().required("Please provide an address"),
  phoneNumber: yup.number().required("Please provide a phone number"),
});

const PaymentPage = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      city: ""
    },
    mode: "onSubmit",
  });
  const onSubmit = useCallback(
    async (data) => {
      try {
        console.log(data)
      } catch (error) {
      }
    },
    []
  );
  console.log(cart)
    return (
        <Flex className='container' marginTop="20" marginBottom="20">
          <Flex flexDirection="column" w="60%">
            <Box padding="50px 40px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <Text fontWeight="600" fontSize="22px">Shipping Information</Text>
                  <AddressCustomerForm />
                  {/* <Button
                      // isLoading={isLoading}
                      type="submit"
                      className="btn-submit"
                      colorScheme="purple"
                  >
                      Payment
                  </Button> */}
                  </form>
              </FormProvider>
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

                {/* <Button
                    // isLoading={isLoading}
                    type="submit"
                    className="btn-submit"
                    colorScheme="purple"
                >
                    Payment
                </Button> */}
            </Box>
          <Spacer />
          </Flex>
          <Spacer />
            <Box w="35%">
              <Text fontWeight="600" fontSize="22px">Order Summary</Text>
              <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" w="100%" padding="20px 20px">
                {cart && (
                  cart.map((item) => {
                    console.log(item);
                    <Box marginBottom="16px">
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
                          <Text fontWeight="600">$item.bookVM.price</Text>
                          <Text fontWeight="600">Quantity item.quantity</Text>
                          <Link>Remove</Link>
                        </Flex>
                      </Flex>
                    </Box>
                  }
                ))}
              </Box>
         
            </Box>
        </Flex>
    );
};

export default PaymentPage;