import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import AvatarGroup from "react-avatar-group";
import { useSelector } from "react-redux";
import CarouselCustom from "./Carousel/CarouselCustom";

const Testimonials = () => {
  const { list } = useSelector((state) => state.book);
  return (
    <Box backgroundColor="#FCF8FD" w="100%">
      <Flex className="container" height='500px' alignItems='center'>
        <Box maxWidth='500px'>
          <Text fontWeight="600" fontSize='30px' marginBottom='25px'>Testimonials</Text>
          <Text marginBottom="25px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
          <AvatarGroup
            avatars={["James", "Amy", "Will", "Ashley", "Character" /* or IAvatar objects */]}
            initialCharacters={1}
            max={3}
            size={45}
            displayAllOnHover={false}
            shadow={2}
          />
        </Box>
        <CarouselCustom books={list.data} />
      </Flex>
    </Box>
  );
};

export default Testimonials;
