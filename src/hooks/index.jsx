import React from 'react';

import { AuthProvider } from './authHook';

const AppProvider = function ({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
