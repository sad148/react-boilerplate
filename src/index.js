import * as React from 'react';
import * as ReactDOM from "react-dom";
import "./styles/styles.css";
import AppRouter from './Routes';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import searchUsers from './Reducers/SearchUsers'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
// import {routerReducer} from 'react-router-redux';

const logger = createLogger({});
// const store = createStore(combineReducers({routing: routerReducer, searchUsers}), {}, applyMiddleware(logger, thunk, promise))
const store = createStore(searchUsers, {}, applyMiddleware(logger, thunk, promise))

var mountNode = document.getElementById("app");

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then((reg) => {
      console.log("Service worker is registered")
    })
    .catch((error) => {
      console.log("Service worker not registered", error);
    })
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>, mountNode);