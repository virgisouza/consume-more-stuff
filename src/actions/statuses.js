export const loadStatuses = () => {
  return function(dispatch) {
    return getStatuses().then(statuses => {
      dispatch({
        type : GET_STATUSES
        stauses : statuses
      });
    });
  }
}