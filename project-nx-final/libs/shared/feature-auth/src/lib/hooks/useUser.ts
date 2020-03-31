import { useContext } from 'react';
import AuthContext from '../authentication-provider/AuthContext';

const useUser = () => {
  const { user } = useContext(AuthContext);

  return user;
};

export default useUser;
