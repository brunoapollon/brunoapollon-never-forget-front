import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import RoutePrivate from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';

const Routes = function () {
  return (
    <RoutesDOM>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profile"
        element={
          <RoutePrivate>
            <Profile />
          </RoutePrivate>
        }
      />
    </RoutesDOM>
  );
};

export default Routes;
