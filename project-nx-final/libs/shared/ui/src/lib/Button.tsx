import React, { FC } from 'react';
import {Button as CButton, ButtonProps} from "@chakra-ui/core";

export const Button: FC<ButtonProps> = (props) => {
  return <CButton variantColor="teal" {...props} />;
};
