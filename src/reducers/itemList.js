import { LOAD_ITEMS,
  LOAD_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM
} from '../actions/items';

const intitialState = [];

const itemList = (state = intitialState, action) => {
  switch (action.type){
    case LOAD_ITEMS:
      return [...action.items];

    case LOAD_ITEM:
      return action.item;

    case ADD_ITEM:
      return [...state, action.item];

    case DELETE_ITEM:
      return state.filter((item) => {
        return item.id !== Number(action.item.id)
      });

    case EDIT_ITEM:
      let items = state.filter((item) => {
        return item.id !== Number(action.updatedItem.id)
      });
      return [...items, action.updatedItem];

    default:
      return state;
  }
}

export default itemList;