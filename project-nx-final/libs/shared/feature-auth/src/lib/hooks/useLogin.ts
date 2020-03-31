import { useContext } from 'react';
import AuthContext from '../authentication-provider/AuthContext';

const useLogin = () => {
  const { setUser } = useContext(AuthContext);

  function login(code: string) {
    console.debug(`Logging in with code ${code}`);
    setUser({ name: 'John + Jane' });
  }

  return login;
};

export default useLogin;
