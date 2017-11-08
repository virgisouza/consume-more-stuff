import { GET_ITEMS, ADD_ITEM } from '../constants.js';
import { getItems } from '../../lib/GETrequests';
import { addItem } from '../../lib/POSTrequests';

export const loadItems = () => {
  return function(dispatch) {
    return getItems().then(items => {
      dispatch({
        type : GET_ITEMS,
        items : items
      });
    });
  }
}

export const addNewItem = (item) => {
  return function(dispatch) {
    return addItem(item).then(newItem => {
      dispatch({
        type : ADD_ITEM,
        item : newItem
      });
    });
  }
}