import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginForm } from '@project-nx/shared/feature-auth';

const LoggedOutApp: FC = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route component={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default LoggedOutApp;
