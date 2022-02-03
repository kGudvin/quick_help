import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initState } from './initState';

export const store = createStore(
  rootReducer, initState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
