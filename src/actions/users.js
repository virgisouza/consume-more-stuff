import { getUsers, logout } from '../lib/GETrequests';
import { addUser, login } from '../lib/POSTrequests';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USERS = 'GET_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loadUsers = () => {
  return function(dispatch) {
    return getUsers().then(users => {
      dispatch({
        type : GET_USERS,
        users : users
      });
    });
  }
}

export const addNewUser = (user) => {
  console.log('action', user);
  return function(dispatch) {
    return addUser(user).then(newUser => {
      console.log(newUser);
      dispatch({
        type : REGISTER_USER,
        user : newUser
      });
    });
  }
}

export const loginUser = (user) => {
  return function(dispatch) {
    return login(user).then(theUser => {
      console.log(theUser)
      dispatch({
        type: LOGIN_USER,
        user: theUser
      });
    });
  }
}

export const logoutUser = (user) => {
  return function(dispatch) {
    return logout(user).then(response => {
      dispatch({
        type: LOGOUT_USER,
        data: response
      });
    });
  }
}
