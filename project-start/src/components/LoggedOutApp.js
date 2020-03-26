import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Login from "./Login";

const LoggedOutApp = () => {
  return <Switch>
    <Route path="/login" component={Login}/>
    <Route component={() => <Redirect to="/login" />} />
  </Switch>
}

export default LoggedOutApp;
