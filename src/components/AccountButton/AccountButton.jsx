import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon } from "../icons";
import { MdLogout } from 'react-icons/md'
import "./AccountButton.css";
import { IoBagCheckOutline } from "react-icons/io5";

const AccountButton = ({ username, props }) => {
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="purple" variant="outline" {...props}>
        <Flex justifyContent="space-between" alignItems="center">
          <UserIcon />
          <p className="name-account">{username}</p>
          <TriangleDownIcon color="purple" w={2} h={2} />
        </Flex>
      </MenuButton>
      <MenuList bg='#dbb4e8'>
        <MenuItem 
          icon={<IoBagCheckOutline />}
          bg='#dbb4e8'
          _hover={{
            bg: '#dbb4e8',
            color: '#761793',
            fontWeight: 700
          }}
          onClick={() => navigate('/order-details')}
        >
          {/* <Link to="/order-details" className="link-button">My Orders</Link> */}
          My Orders
        </MenuItem >
        <MenuItem 
          icon={<MdLogout />}
          bg='#dbb4e8'
          _hover={{
            bg: '#dbb4e8',
            color: '#761793',
            fontWeight: 700
          }}
          onClick={() => navigate('/logout')}
        >
          {/* <Link to="/logout" className="link-button">Log out</Link> */}
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AccountButton;
