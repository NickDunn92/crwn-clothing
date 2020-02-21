import { UserActionTypes } from './user.types';

/*
  Actions are functions that return objects. Each object must be in the correct format that the action is expected to be.
  setCurrentUser is a function that takes the user object, it returns an object where the type is SET_CURRENT_USER.
  We must always align the action creators type with the reducers type expectation (userReducer case).
*/
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});