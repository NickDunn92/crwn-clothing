/* 
  createStore and applyMiddleware are functions we get from redux. We need to add middleware to our store so that when actions get fired we can catch them
  and display them. The middleware receives actions in, does something with them and then passes them out into the root reducer.
*/
import { createStore, applyMiddleware } from 'redux';

// Redux logger catches the action, logs it out and then moves it along
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

/*
  Store is assigned the createStore function, createStore receives the rootReducer and also the return value of applyMiddleware. 
  Inside the applyMiddleware we spread the middlewares.
  applyMiddleware will spread all of the values in the logger array into the function call as individual arguments. 
*/
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;