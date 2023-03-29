import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

/* before reselect/memoization
export const selectCategoriesMap = (state) =>{ 
  console.log('selector fired')
  
  return state.categories.categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items; //accumulate items as lowercase title
      return acc;
    }, {});
  }
  */
