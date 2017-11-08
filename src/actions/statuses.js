import { GET_STATUSES } from '../constants.js';
import { getStatuses } from '../../lib/GETrequests';

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