export const loadConditions = () => {
  return function(dispatch) {
    return getConditions().then(conditions => {
      dispatch({
        type : GET_CONDITIONS
        conditions : conditions
      });
    });
  }
}