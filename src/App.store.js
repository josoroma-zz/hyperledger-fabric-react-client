import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';

/**
 * Redux Thunk middleware.
 */
import thunkMiddleware from 'redux-thunk';

/**
 * Redux Logging middleware.
 */
import { createLogger } from 'redux-logger';

/**
 * Import the app/root reducer.
 */
import appReducer from './App.reducers';

/**
 * Create the redux logging middleware.
 */
const loggerMiddleware = createLogger();

const composeEnhancers = composeWithDevTools({
  // options like: `actionSanitizer` or `stateSanitizer`.
});

/**
 * appStore Config.
 */

export function appStore() {
  const store = createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );

  return store;
}


