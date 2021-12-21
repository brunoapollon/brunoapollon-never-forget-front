import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App = function () {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
