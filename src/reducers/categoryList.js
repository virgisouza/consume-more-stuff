import { LOAD_CATEGORIES,
         LOAD_CATEGORY_ITEMS } from '../actions/categories';

const initialState = [];

const categoryList = (state = initialState, action) => {
  switch (action.type){
    case LOAD_CATEGORIES:
      return [...action.categories];

    case LOAD_CATEGORY_ITEMS:
      return [...action.items];

    default:
      return state;
  }
}

export default categoryList;