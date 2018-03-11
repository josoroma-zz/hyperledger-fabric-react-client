import './App.css';

import React from 'react';

import { AppRoutes as Routes } from './App.routes'

// Provider component is a react-redux component for setting up the Redux Store.
import { Provider } from 'react-redux';

// Import the ConfigureStore that holds the initial Configuration.
import { appStore } from './App.store';

// Create a Store using the the `App.store` Config.
const store = appStore();

const App = (props) => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
};

export default App;
