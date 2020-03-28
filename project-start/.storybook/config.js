// File: .storybook/config.js

import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "@chakra-ui/core";
import Theme from "./../src/theme";

addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

configure(require.context("../src/stories", true, /\.js$/), module);
