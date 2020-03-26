import {Link} from "react-router-dom";
import IconButton from "./IconButton";
import React from "react";
import useCart from "../hooks/useCart";
import {Box, Badge as CBadge} from "@chakra-ui/core";
import styled from '@emotion/styled';

const Badge = styled(CBadge)`
  border-radius: 100%;
  position: absolute;
  right: 10px;
  top: -5px;
  text-align: center;
  width: 20px;
`

const CartButton = (props) => {
  const {total} = useCart();

  return (
    <Box position="relative" display="inline-block">
      <IconButton
        as={Link}
        to="/cart"
        aria-label="Cart"
        icon="cart"
        bg="transparent"
        border="1px"
        {...props}
      />
      {total > 0 && <Badge fontSize="0.8em">{total}</Badge>}
    </Box>
  )
}

export default CartButton;
