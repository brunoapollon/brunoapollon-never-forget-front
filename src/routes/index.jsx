import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import RoutePrivate from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import AllTasks from '../pages/AllTasks';
import CreateNewTask from '../pages/CreateNewTask';

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
      <Route
        path="/dashboard"
        element={
          <RoutePrivate>
            <Dashboard />
          </RoutePrivate>
        }
      />
      <Route
        path="/all_tasks"
        element={
          <RoutePrivate>
            <AllTasks />
          </RoutePrivate>
        }
      />
      <Route
        path="/create_task"
        element={
          <RoutePrivate>
            <CreateNewTask />
          </RoutePrivate>
        }
      />
    </RoutesDOM>
  );
};

export default Routes;
