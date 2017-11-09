import { LOAD_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM
} from '../actions/items';

const intitialState = [];

const itemList = (state = intitialState, action) => {
  switch (action.type){
    case LOAD_ITEMS:
      return [...action.items];

    case ADD_ITEM:
      return [...state, action.item];

    case DELETE_ITEM:
      return state.filter((item) => {
        return item.id !== Number(action.item.id)
      });

    case EDIT_ITEM:
      let items = state.filter((item) => {

        return item.id !== Number(action.item.id)
      });
      return [...items, action.item];

    default:
      return state;
  }
}

export default itemList;