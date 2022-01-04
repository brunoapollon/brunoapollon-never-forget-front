import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = function ({ children }) {
  const navigate = useNavigate();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@NF:token');
    const user = localStorage.getItem('@NF:user');

    if (token && user) return { token, user: JSON.parse(user) };

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/authentication', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@NF:token', token);
    localStorage.setItem('@NF:user', JSON.stringify(user));

    setData({ token, user });

    navigate('/dashboard');
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@NF:token');
    localStorage.removeItem('@NF:user');

    setData({});

    navigate('/');
  }, []);

  const updateUser = useCallback(async ({ name, email }) => {
    const token = localStorage.getItem('@NF:token');
    const user = localStorage.getItem('@NF:user');

    api.defaults.headers.common.authorization = `Barer ${token}`;

    const updateData = {
      name: name !== '' ? name : user.name,
      email: email !== '' ? email : user.email,
    };

    const response = await api.patch('users/update', updateData);

    const userUpdate = response.data;
    localStorage.setItem('@NF:user', JSON.stringify(userUpdate));

    setData({ token, userUpdate });
  }, []);

  const valueProvider = useMemo(
    () => ({ token: data.token, user: data.user, signIn, signOut, updateUser }),
    [],
  );

  return (
    <AuthContext.Provider value={valueProvider}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
