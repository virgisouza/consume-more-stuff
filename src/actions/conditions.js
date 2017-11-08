import { GET_CONDITIONS } from '../constants.js';
import { getConditions } from '../../lib/GETrequests';

export const loadConditions = () => {
  return function(dispatch) {
    return getConditions().then(conditions => {
      dispatch({
        type : GET_CONDITIONS,
        conditions : conditions
      });
    });
  }
}