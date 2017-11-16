import { FILTER_DATE, FILTER_PRICE, FILTER_CONDITION, FILTER_CATEGORY } from '../actions/filter'; 

const initialState = {
  dateFilter : 0,
  priceFilter : 0,
  conditionFilter : 0,
  categoryFilter : 0
};

const filter = (state = initialState, action) => {

  switch (action.type) {

    case FILTER_DATE :
      console.log(action);
      return Object.assign({}, state, action.dateFilter);

    case FILTER_PRICE :
      console.log(action);
      return Object.assign({}, state, action.priceFilter); 

    case FILTER_CONDITION :
      console.log(action);
      return Object.assign({}, state, action.conditionFilter); 

    case FILTER_CATEGORY :
      console.log(action);
      return Object.assign({}, state, action.categoryFilter); 

    default:
      return state;

  }


}

export default filter;