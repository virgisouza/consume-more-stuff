import { LOAD_ITEM } from '../actions/items';
import { EDIT_ITEM } from '../actions/items';

const initialState = {
  Category: '',
  Condition: '',
  Status: '',
  User: ''
}

const singleItem = (state = initialState, action) => {
  switch (action.type){
    case LOAD_ITEM:
      return Object.assign({}, state, action.item);

    case EDIT_ITEM:
      return Object.assign({}, state, action.item);

    default:
      return state;
  }
}

export default singleItem;