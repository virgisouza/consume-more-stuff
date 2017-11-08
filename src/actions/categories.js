export const loadCategories = () => {
  return function(dispatch) {
    return getCategories().then(categories => {
      dispatch({
        type : GET_CATEGORIES
        categories : categories
      });
    });
  }
}