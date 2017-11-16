import { FILTER_DATE, FILTER_PRICE, FILTER_CONDITION, FILTER_CATEGORY } from '../actions/filter'; 

const initialState = [];

const filter = (state = initialState, action) => {

  switch (action.type) {
    case FILTER_DATE :
      return action.dateFilter;

    case FILTER_PRICE :
      return action.priceFilter;

    case FILTER_CONDITION :
      return action.conditionFilter;

    case FILTER_CATEGORY :
      return action.categoryFilter;

    default:
      return state;

  }


}

export default filter;