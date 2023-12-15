import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? children : <Navigate to="/login" />;
};
