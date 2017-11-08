import { LOAD_CONDITIONS } from '../actions/condition_actions';

const inititalState = [];

const conditionList = (state = inititalState, action) => {
  switch (action.type){
    case LOAD_CONDITIONS:
      return [...action.conditions];

    default:
      return state;
  }
}

export default conditionList;