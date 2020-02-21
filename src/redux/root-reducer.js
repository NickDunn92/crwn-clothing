/* 
  Root reducer is the base object that represents all of the state in the application.
  It is the code that combines all of the states together.
*/

// We import our user reducer into the the root reducer and we combine all of the reducers by importing combineReducer.
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});