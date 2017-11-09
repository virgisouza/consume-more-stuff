import { combineReducers } from 'redux';
import categoryList from './categoryList';
import conditionList from './conditionList';
import user from './user';
import itemList from './itemList';
import statusList from './statusList';

const reducers = combineReducers({
  categoryList,
  conditionList,
  user,
  itemList,
  statusList
});

export default reducers;