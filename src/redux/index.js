import * as biz from '$business-layer';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MIDDLEWARE = composeEnhancers(applyMiddleware(thunk));

const bizReducers = {
  User: biz.User.reducer,
};

const APP_REDUCER = combineReducers({
  ...bizReducers,
});

const store = createStore(APP_REDUCER, MIDDLEWARE);

export default store;
