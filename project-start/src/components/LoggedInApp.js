import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Catalog from "./catalog/Catalog";
import Navbar from "./Navbar";
import NavProfileButton from "./NavProfileButton";
import Main from "./Main";
import CartButton from "./CartButton";

const LoggedInApp = () => {
  return (
    <>
      <Navbar appName="PhotoPrint">
        <CartButton
          mr={4}
        />
        <NavProfileButton mr={8} />
      </Navbar>
      <Main>
      <Switch>
        <Route path="/" component={Catalog} exact={true}/>
        <Route path="/cart" component={() => <div>Cart</div>} exact={true}/>
        <Route component={() => <Redirect to="/" />} />
      </Switch>
      </Main>
   </>
  );
}

export default LoggedInApp;
