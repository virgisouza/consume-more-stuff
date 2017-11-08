import { getCategories, getCategoryItems } from '../lib/GETrequests';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_CATEGORY_ITEMS = 'LOAD_CATEGORY_ITEMS';

export const loadCategories = () => {
  return function(dispatch) {
    return getCategories().then(categories => {
      dispatch({
        type : LOAD_CATEGORIES,
        categories : categories
      });
    });
  }
}

export const loadCategoryItems = (category_id) => {
  return function(dispatch) {
    return getCategoryItems(category_id).then(categories => {
      dispatch({
        type: LOAD_CATEGORY_ITEMS,
        categories: categories
      });
    });
  }
}