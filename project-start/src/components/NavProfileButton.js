import React from 'react';
import Button from "./Button";
import useLogout from "../hooks/useLogout";

const NavProfileButton = () => {
  const logout = useLogout();

  return (

        <Button onClick={logout}>Logout</Button>
  )
}

export default  NavProfileButton
