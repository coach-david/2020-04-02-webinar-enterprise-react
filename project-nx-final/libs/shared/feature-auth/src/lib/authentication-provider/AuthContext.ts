import React from 'react';
import { User } from '../models';

const AuthContext = React.createContext<{
  user: User;
  setUser: (user: User) => void;
}>({
  user: null,
  setUser: user => {
    throw new Error();
  }
});

export default AuthContext;
