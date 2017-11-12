/*ACTIONS FOR ITEMS*/
/*ACTIONS FOR ITEMS*/
/*ACTIONS FOR ITEMS*/

const axios = require('axios');

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const LOAD_INITIAL_ITEMS = 'LOAD_INITIAL_ITEMS';
export const LOAD_ITEM = 'LOAD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const LOAD_USER_ITEMS = 'LOAD_USER_ITEMS'

export const loadItems = () => {
  return function(dispatch) {
    return axios.get('/api/items')
      .then(items => {
        dispatch({
          type : LOAD_ITEMS,
          items : items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const loadInitialItems = () => {
  return function(dispatch) {
    return axios.get('/api/items/initial')
      .then(initialItems => {
        dispatch({
          type : LOAD_INITIAL_ITEMS,
          initialItems : initialItems
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
}

export const loadUserItems = (user_id) => {
  return function(dispatch) {
    return axios.get('/api/users/' + user_id + '/items')
      .then((items) => {
        dispatch({
          type: LOAD_USER_ITEMS,
          items: items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const loadItem = (item) => {
  return function(dispatch) {
    return axios.get('/api/items/' + item_id)
      .then(item => {
        dispatch({
          type : LOAD_ITEM,
          item : item
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const addItem = (item) => {
  return function(dispatch) {
    return axios.post('/api/items/new', item)
      .then((newItem) => {
        dispatch({
          type: ADD_ITEM,
          item: newItem.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const deleteItem = (item) => {
  return function(dispatch) {
    return axios.delete('/api/items/' + item_id)
      .then(response => {
        dispatch({
          type: DELETE_ITEM,
          item: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const editItem = (item) => {
  return function(dispatch) {
    return axios.put('/api/items/' + item.id)
      .then(editedItem => {
        dispatch({
          type: EDIT_ITEM,
          item: editedItem
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}