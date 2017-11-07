/*AGGREGATE REDUCER*/
/*AGGREGATE REDUCER*/
/*AGGREGATE REDUCER*/

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  items : itemReducer,
  conditions : conditionReducer,
  categories : categoryReducer,
  users : userReducer,
  status : statusReducer
});

export default allReducers;