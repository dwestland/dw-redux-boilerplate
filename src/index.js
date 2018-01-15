import React from 'react'
import { render } from 'react-dom'
import {applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import reducer from './reducers/index';
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk, logger)
  ));

render((
  <Provider store={store}>
    <App /> 
  </Provider>
), document.getElementById('root'))