import { getItems, getItemById } from '../lib/GETrequests';
import { addNewItem } from '../lib/POSTrequests';
import { itemDelete } from '../lib/DELETErequests';
import { itemEdit } from '../lib/PUTrequests';
//const axios = require('axios');

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_ITEM = 'LOAD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const loadItems = () => {
  return function(dispatch) {
    return getItems().then(items => {
      dispatch({
        type : LOAD_ITEMS,
        items : items
      });
    });
  }
}

// export const loadItem = (item) => {
//   console.log('first item', item)
//   return function(dispatch) {
//     return axios.get(`/api/items/${item}`).then(item => {
//       console.log('second item', item);
//       dispatch({
//         type : LOAD_ITEM,
//         item : item.data
//       });
//     });
//   }
// }

export const loadItem = (item) => {
  console.log('first item', item)
  return function(dispatch) {
    return getItemById(item).then(item => {
      console.log('second item', item);
      dispatch({
        type : LOAD_ITEM,
        item : item
      });
    });
  }
}

export const addItem = (item) => {
  return function(dispatch) {
    return addNewItem(item).then(newItem => {
      dispatch({
        type: ADD_ITEM,
        item: newItem.data
      });
    });
  }
}

export const deleteItem = (item) => {
  return function(dispatch) {
    return itemDelete(item).then(response => {
      dispatch({
        type: DELETE_ITEM,
        item: response.data
      });
    });
  }
}

export const editItem = (item) => {
  return function(dispatch) {
    return itemEdit(item).then(editedItem => {
      dispatch({
        type: EDIT_ITEM,
        item: editedItem
      });
    });
  }
}