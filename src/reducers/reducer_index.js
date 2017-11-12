import { combineReducers } from 'redux';

import user from './user';
import itemList from './itemList';
import singleItem from './singleItem';

const reducers = combineReducers({
  user,
  itemList,
  singleItem
});

export default reducers;