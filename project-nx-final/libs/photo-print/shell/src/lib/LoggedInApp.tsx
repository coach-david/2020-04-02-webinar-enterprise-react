import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {PhotoPrintFeatureCatalog} from '@project-nx/photo-print/feature-catalog';
import {PhotoPrintFeatureCheckout} from '@project-nx/photo-print/feature-checkout';

const LoggedInApp = () => {
  return (
    <>
        <Switch>
          <Route path="/" component={PhotoPrintFeatureCatalog} exact={true}/>
          <Route path="/cart" component={PhotoPrintFeatureCheckout} exact={true}/>
          <Route component={() => <Redirect to="/" />} />
        </Switch>
    </>
  );
}

export default LoggedInApp;
