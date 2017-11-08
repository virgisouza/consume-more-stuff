import getUsers, logout from '../lib/GETrequests';
import addUser, login from '../lib/POSTrequests';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER = 'LOGIN_USER';

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
  return function(dispatch) {
    return addUser(user).then(newUser => {
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
