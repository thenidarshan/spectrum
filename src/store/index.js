// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Simple root reducer
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEBSOCKET_CONNECTION':
      return {
        ...state,
        connectionStatus: action.value,
      };
    default:
      return state;
  }
};

export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};