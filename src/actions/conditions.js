import getConditions from '../lib/GETrequests';

export const LOAD_CONDITIONS = 'LOAD_CONDITIONS';

export const loadConditions = () => {
  return function(dispatch) {
    return getConditions().then(conditions => {
      dispatch({
        type : LOAD_CONDITIONS,
        conditions : conditions
      });
    });
  }
}