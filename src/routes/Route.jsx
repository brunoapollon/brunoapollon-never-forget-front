import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = function ({ children }) {
  const authenticatedUser = localStorage.getItem('@NF:user');
  const token = localStorage.getItem('@NF:token');

  if (!authenticatedUser || !token) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
