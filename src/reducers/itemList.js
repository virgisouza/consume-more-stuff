import { LOAD_ITEMS,
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

    case ADD_ITEM:
      return [...state, action.item];

    case DELETE_ITEM:
      return state.filter((item) => {
        console.log(item, 'REDUCERR')
        console.log(action.item, "222")
        return item.id !== Number(action.item.id)
      });

    case EDIT_ITEM:
      let items = state.filter((item) => {

        return item.id !== Number(action.item.id)
      });
      return [...items, action.item];

    case LOAD_USER_ITEMS:
      return [...action.items];

    default:
      return state;
  }
}

export default itemList;