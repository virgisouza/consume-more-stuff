import getStatuses from '../lib/GETrequests';
export const GET_STATUSES = 'GET_STATUSES';

export const loadStatuses = () => {
  return function(dispatch) {
    return getStatuses().then(statuses => {
      dispatch({
        type : GET_STATUSES,
        stauses : statuses
      });
    });
  }
}