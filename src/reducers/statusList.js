import { GET_STATUSES } from '../actions/statuses';

const initialState = [];

const statusList = (state = initialState, action) => {
  switch (action.type){

    case GET_STATUSES:
      return [...action.statuses];

    default:
      return state;
  }
}

export default statusList;