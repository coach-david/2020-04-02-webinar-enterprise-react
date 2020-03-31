import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  AuthenticationProvider,
} from '@project-nx/shared/feature-auth';
import { Theme } from './theme/Theme';
import LoggedOutApp from './LoggedOutApp';
import LoggedInApp from './LoggedInApp';

/* eslint-disable-next-line */
export interface PhotoPrintShellProps {}

export const PhotoPrintShell = (props: PhotoPrintShellProps) => {
  return (
    <Theme>
      <BrowserRouter>
        <AuthenticationProvider
          loggedInApp={<LoggedInApp />}
          loggedOutApp={<LoggedOutApp />}
        />
      </BrowserRouter>
    </Theme>
  );
};

export default PhotoPrintShell;
