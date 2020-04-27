import { UserActionTypes } from './user.types'; 
 
/*
  The user reducer is the reducer that stores the current state of user.
  A reducer is a function that gets 2 properties:
    .State object (initial state)
    .Action
  
  An action is an object that has a type (string value) which describes what specific action it is.
  It also has a payload which is a flexible value that can be anything. 
*/

// This is an object that represents the initial state of the reducer.
const INITIAL_STATE = {
  currentUser: null
}

// The state is something that the redux store is going to pass to the reducer whenever the action fires.
const UserReducer = (state = INITIAL_STATE, action) => {

  // 1. Based on the action.type value,
  switch (action.type) {

    // 2. If the case of that action type ('SET_CURRENT_USER') is one we want, then we will render something.
    case UserActionTypes.SET_CURRENT_USER:

      /*
        If our case is the action type that is fired, we return a new object which represents the new state the user reducer
        is going to transform into. That value will be everything else on the state but more importantly the current user.
        We are setting the current user value as the payload.
      */
      return {
        ...state,
        currentUser: action.payload
      }

    /*
      3. Otherwise we will return the default state. Every reducer gets every action that is fired even if they are not related.
      That is why we want to return to defualt state so that if none of the action types match then we return the default state.
    */
    default:
      return state;
  }
}

export default UserReducer;