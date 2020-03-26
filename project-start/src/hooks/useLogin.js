import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useLogin = () => {
  const { setUser } = useContext(AuthContext);

  function login(code) {
    console.debug(`Logging in with code ${code}`)
    setUser({ name: 'John + Jane' })
  }

  return login;
};

export default useLogin;
