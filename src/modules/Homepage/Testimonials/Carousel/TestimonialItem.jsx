import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "../../../../components/icons";

const TestimonialItem = ({ authors, rating }) => {
  return (
    <Link>
      <VStack
        position="relative"
        w="500px"
        h="300px"
        bgColor="#FFF"
        borderRadius="0px 7px 20px rgba(141, 40, 173, 0.15)"
        boxShadow="10px"
      >
        <HStack>
          <Flex
            spacing={1}
            justifyContent="center"
            marginTop="30px"
            flexDirection="column"
            textAlign="center"
          >
            <Box marginBottom="56px">
              {rating ? (
                Array.from(Array(Math.floor(rating)), (e, i) => {
                  return <StarIcon key={i} />;
                })
              ) : (
                <span>
                  0 <StarIcon />
                </span>
              )}
            </Box>
            <Text
              textAlign="center"
              fontSize="18px"
              fontWeight="600"
              padding="0 30px"
              marginBottom="20px"
              lineHeight="30px"
            >
              Shoping book in Clevr. is very easy. Quick delivery and fast
              respon. They services is awesome!
            </Text>
            <Text textAlign="center" fontSize="16px" fontWeight="600" marginBottom="10px">
              {authors.map((item, key) => {
                return <span key={key}>{item}</span>;
              })}
            </Text>
            <Text textAlign="center" fontSize="12px" fontWeight="400">Book Lovers</Text>
          </Flex>
        </HStack>
        <HStack
          h="80px"
          w="100%"
          display="block"
          position="absolute"
          top="84%"
          margin="0 auto"
        >
          <Image
            w="75px"
            src="./static-data/img-none.jpg"
            borderRadius="50%"
            border="3px solid #fff"
            margin="0 auto"
          />
        </HStack>
      </VStack>
    </Link>
  );
};

export default TestimonialItem;
