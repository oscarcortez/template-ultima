import { AuthContext } from './AuthContext';
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { authType } from '../types/auth';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return { isLogged: !!user, user };
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, init);

  const login = (name = '') => {
    const user = { id: 'ABC', name };
    const action = {
      type: authType.login,
      payload: user
    };

    localStorage.setItem('user', JSON.stringify(user));

    authDispatch(action);
  };

  const logout = () => {
    const action = {
      type: authType.logout
    };

    localStorage.removeItem('user');

    authDispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
