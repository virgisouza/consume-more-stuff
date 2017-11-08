export const loadItems = () => {
  return function(dispatch) {
    return getItems().then(items => {
      dispatch({
        type : GET_ITEMS
        items : items
      });
    });
  }
}

export const addItem = (item) => {
  return function(dispatch) {
    return addItem().then(item => {
      dispatch({
        type : ADD_ITEM,
        item : item
      });
    });
  }
}