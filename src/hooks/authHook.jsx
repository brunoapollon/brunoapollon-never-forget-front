import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = function ({ children }) {
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
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@NF:token');
    localStorage.removeItem('@NF:user');

    setData({});
  }, []);

  const valueProvider = useMemo(
    () => ({ token: data.token, user: data.user, signIn, signOut }),
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
