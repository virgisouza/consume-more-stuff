import { getUsers, logout } from '../lib/GETrequests';
import { addUser, login } from '../lib/POSTrequests';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USERS = 'GET_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';

const axios = require('axios');

export const loadUsers = () => {
  return function(dispatch) {
    return axios.get('/api/users').then(users => {
      dispatch({
        type : GET_USERS,
        users : users
      });
    });
  }
}

export const addNewUser = (user) => {  
  return function(dispatch) {
    return axios.post('/register', user).then(newUser => {
      dispatch({
        type : REGISTER_USER,
        user : newUser
      });
    });
  }
}

export const loginUser = (user) => {
  return function(dispatch) {
    console.log(user);
    return axios.post('/login', user).then(theUser => {
      console.log('AXIOS POST === ', theUser);
      dispatch({
        type: LOGIN_USER,
        user: theUser
      });
    });
  }
}

export const logoutUser = () => {
  return function(dispatch) {
    return axios.get('/logout').then(response => {
      dispatch({
        type: LOGOUT_USER,
        data: response
      });
    });
  }
}