import { useContext } from 'react';
import AuthContext from '../authentication-provider/AuthContext';

const useLogout = () => {
  const { setUser } = useContext(AuthContext);

  function logout() {
    setUser(null)
  }

  return logout;
};

export default useLogout;
