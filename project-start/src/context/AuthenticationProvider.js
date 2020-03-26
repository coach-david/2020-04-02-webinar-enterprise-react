import React, {useEffect, useState} from "react";
import AuthContext from './AuthContext';

const STORAGE_KEY = 'USR';

const AuthenticationProvider = ({ loggedInApp, loggedOutApp }) => {
  const userFromStorage = localStorage.getItem(STORAGE_KEY);
  const [user, setUser] = useState(userFromStorage ? JSON.parse(userFromStorage) : null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser }}>{user ? loggedInApp : loggedOutApp}</AuthContext.Provider>
}

export default AuthenticationProvider;
