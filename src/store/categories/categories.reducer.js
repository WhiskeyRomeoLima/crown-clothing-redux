import CATEGORIES_ACTION_TYPES from './categories.types';

export const CATEGORIES_INITIAL_STATE = {
  // categoriesMap: {}, //fire base util change
  categories: []
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} ) => { 
  //  And we also want to make sure that our action, if no action is passed and for some reason our reducer
  //  runs by default, we pass an empty object just so that there's something to call.
  
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
