import React, { FC, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { User } from '../models';

const STORAGE_KEY = 'USR';

export interface AuthenticationProviderProps {
  loggedInApp: React.ReactChild;
  loggedOutApp: React.ReactChild;
}

export const AuthenticationProvider: FC<AuthenticationProviderProps> = ({ loggedInApp, loggedOutApp }) => {
  const userFromStorage = localStorage.getItem(STORAGE_KEY);
  const [user, setUser] = useState<User | null>(userFromStorage ? JSON.parse(userFromStorage) : null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser }}>{user ? loggedInApp : loggedOutApp}</AuthContext.Provider>
};
