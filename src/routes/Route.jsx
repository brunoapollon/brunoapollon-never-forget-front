import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = function (props) {
  const { isPrivate, children } = props;

  const authenticatedUser = localStorage.getItem('@NF:user');
  const token = localStorage.getItem('@NF:token');

  if ((!authenticatedUser || !token) && isPrivate) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
