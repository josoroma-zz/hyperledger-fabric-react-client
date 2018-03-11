import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import OrderContainer from './features/orders/container';

/**
 * Provides all the Routing Config.
 */
const AppRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={OrderContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export { AppRoutes };
