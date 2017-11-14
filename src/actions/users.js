import { getUsers, logout } from '../lib/GETrequests';
import { addUser, login } from '../lib/POSTrequests';
import { userEdit } from '../lib/PUTrequests';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USERS = 'GET_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const EDIT_USER = 'EDIT_USER';

const axios = require('axios');

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
      console.log(theUser)
      dispatch({
        type: LOGIN_USER,
        user: theUser
      });
    });
  }
}

export const logoutUser = () => {
  return function(dispatch) {
    return logout().then(response => {
      dispatch({
        type: LOGOUT_USER,
        data: response
      });
    });
  }
}

export const editUser = (user) => {
  return function(dispatch) {
    return axios.put(`/users/${user.id}/edit`, user).then(editedUser => {
      dispatch({
      type: EDIT_USER,
      user: editedUser.data
      })
    })
  }
}