//create the set current user action which will be accessible by any components to set the user value
import USER_ACTION_TYPES from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils'; //createAction = (type, payload) => ({ type, payload });

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user); //returns an action of type SET_CURRENT_USER and payload user
