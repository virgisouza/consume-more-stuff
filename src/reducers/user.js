import { LOGIN_USER,
         LOGOUT_USER,
         REGISTER_USER } from '../actions/user_actions';

const initialState = [];

const user = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
      localStorage.setItem('user_id', action.user.id);
      localStorage.setItem('logged_in', true);
      return action.user;

    case LOGOUT_USER:
      localStorage.setItem('user_id', 0);
      localStorage.setItem('logged_in', false);
      return action.data;

    case REGISTER_USER:
      return [...state, action.user];

    default:
      return state;
  }
}

export default user;