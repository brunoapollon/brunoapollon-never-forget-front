import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import RoutePrivate from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';

const Routes = function () {
  return (
    <RoutesDOM>
      <Route
        path="/"
        element={
          <RoutePrivate>
            <Login />
          </RoutePrivate>
        }
      />
      <Route
        path="/profile"
        element={
          <RoutePrivate isPrivate>
            <Login />
          </RoutePrivate>
        }
      />
    </RoutesDOM>
  );
};

export default Routes;
