import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import React from "react";
import AccountButton from "../AccountButton/AccountButton";
import BookLogo from "../common/BookLogo";
import { CartIcon } from "../icons";
import NavigationButton from "../NavigationButton/NavigationButton";

const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
      padding="20px 10px"
    >
      <Link w="176px" h="45px">
        <BookLogo />
      </Link>
      <NavigationButton />
      <InputGroup w="500px">
        <Input pr="4.5rem" type="text" placeholder="Find books here..." />
        <InputRightElement children={<SearchIcon color="#A4A4A4" />} />
      </InputGroup>
      <IconButton
        colorScheme="none"
        aria-label="Cart"
        icon={<CartIcon />}
      />
      <AccountButton />
    </Box>
  );
};

export default Header;
