import React from "react";

const LabelBestSeller = ({ label }) => {
  return (
    <Flex
      w="100px"
      h="40px"
      bg="#FF7A00"
      borderRadius="0px 80px 80px 0px"
      boxShadow="16px 11px 33px rgba(255, 107, 0, 0.37)"
      fontSize="16px"
      fontWeight="600"
      lineHeight="20px"
      color="#FFFFFF"
      pos="absolute"
      left="0"
      top="20px"
      zIndex="2"
      justifyContent="center"
      alignItems="center"
    >
      <Text>{label}</Text>
    </Flex>
  );
};

export default LabelBestSeller;
