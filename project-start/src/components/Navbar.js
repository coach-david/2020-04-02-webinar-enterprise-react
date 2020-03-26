import React from "react";
import {Flex, Heading, Box} from "@chakra-ui/core";
import {Link} from "react-router-dom";

const Navbar = ({ appName, children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link to="/">{appName}</Link>
        </Heading>
      </Flex>

      <Box>
      {children}
      </Box>
    </Flex>
  )
}

export default Navbar;
