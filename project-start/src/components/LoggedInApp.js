import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Catalog from "./Catalog";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import NavProfileButton from "./NavProfileButton";
import IconButton from "./IconButton";

const LoggedInApp = () => {
  return (
    <>
      <Navbar appName="PhotoPrint">
        <IconButton
          as={Link}
          to="/cart"
          aria-label="Cart"
          icon="cart"
          bg="transparent"
          border="1px"
          mr={4}
        />
        <NavProfileButton mr={8} />
      </Navbar>
      <Switch>
        <Route path="/" component={Catalog} exact={true}/>
        <Route path="/cart" component={() => <div>Cart</div>} exact={true}/>
        <Route component={() => <Redirect to="/" />} />
      </Switch>
   </>
  );
}

export default LoggedInApp;
