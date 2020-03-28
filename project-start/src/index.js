import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import AuthenticationProvider from "./context/AuthenticationProvider";
import LoggedOutApp from "./components/LoggedOutApp";
import LoggedInApp from "./components/LoggedInApp";
import CartProvider from "./context/CartProvider";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <AuthenticationProvider
          loggedOutApp={<LoggedOutApp />}
          loggedInApp={
            <CartProvider>
              <LoggedInApp />
            </CartProvider>
          }
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
