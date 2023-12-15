import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const PublicRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? <Navigate to="/not-found" /> : children;
};
