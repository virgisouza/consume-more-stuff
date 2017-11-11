import { LOGIN_USER,
         LOGOUT_USER,
         REGISTER_USER } from '../actions/users';

const initialState = {logged_in: false};

const user = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
      localStorage.setItem('user_id', action.user.id);
      localStorage.setItem('logged_in', true);
      localStorage.setItem('username', action.user.username);
      let test = localStorage.getItem('logged_in');
      console.log(test);

      return Object.assign({}, state, {user_id: action.user.id, logged_in: true, username: action.user.username})


    case LOGOUT_USER:
      localStorage.setItem('user_id', 0);
      localStorage.setItem('logged_in', false);
      localStorage.setItem('username', 'Guest');
      return Object.assign({}, state, {user_id: null, logged_in: false, username: 'Guest'})

    case REGISTER_USER:
      console.log('reducer', action.user);
      return [...state, action.user];

    default:
      return state;
  }
}

export default user;