export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = (filter) => {
  return function(dispatch) {
    dispatch({
      type : CHANGE_FILTER,
      filter : filter
    });
  }
}