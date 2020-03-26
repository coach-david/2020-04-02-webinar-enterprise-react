import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useUser = () => {
  const { user } = useContext(AuthContext);

  return user;
};

export default useUser;
