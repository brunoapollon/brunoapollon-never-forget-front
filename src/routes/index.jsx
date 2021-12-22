import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import RoutePrivate from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Routes = function () {
  return (
    <RoutesDOM>
      <Route path="/" element={<Login />} />
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
