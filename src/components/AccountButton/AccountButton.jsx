import { TriangleDownIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { UserIcon } from "../icons";
import './AccountButton.css';

const AccountButton = (props) => {
  return (
    <Button colorScheme="purple" variant="outline" {...props}>
      <Flex justifyContent='space-between' alignItems='center'>
        <UserIcon />
        <p className="name-account">Roberto Karlos</p>
        <TriangleDownIcon color='purple' w={2} h={2}/>
      </Flex>
    </Button>
  );
};

export default AccountButton;
