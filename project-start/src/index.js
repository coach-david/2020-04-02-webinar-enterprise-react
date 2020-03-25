import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import Login from "./components/Login";

const customTheme = {
  ...theme
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
