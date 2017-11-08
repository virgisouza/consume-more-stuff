import { combineReducers } from 'redux';
import categoryList from './categoryList';
import conditionList from './conditionList';
import user from './user';
import itemList from './itemList';
import statusList from './statusList';

export default combineReducers({
  categoryList,
  conditionList,
  user,
  itemList,
  statusList
});