import { LOAD_ITEMS,
  /*LOAD_INITIAL_ITEMS,*/ //code change
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  LOAD_USER_ITEMS
} from '../actions/items';

const intitialState = [];

const itemList = (state = intitialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return [...action.items];

    /*case LOAD_INITIAL_ITEMS: //code change
      return [...action.items]; //need to change this return*/

    case ADD_ITEM:
      return [...state, action.item];

    case DELETE_ITEM:
      let the_items = state.filter((item) => {
        return item.id !== Number(action.item.id)
      });
      return [...the_items, action.item];
    case EDIT_ITEM:
      let items = state.filter((item) => {
        return item.id !== Number(action.item.id)
      });
      return [...items, action.item];

    case LOAD_USER_ITEMS:
      return [...action.items]
    default:
      return state;
  }
}

export default itemList;