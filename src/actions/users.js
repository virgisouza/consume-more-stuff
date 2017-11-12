/*ACTIONS FOR USERS*/
/*ACTIONS FOR USERS*/
/*ACTIONS FOR USERS*/

const axios = require('axios');

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const GET_USERS = 'GET_USERS';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loadUsers = () => {
  return function(dispatch) {
    return axios.get("/api/users")
      .then(users => {
        dispatch({
          type : GET_USERS,
          users : users
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const addNewUser = (user) => {
  return function(dispatch) {
    return axios.post("/register")
      .then(newUser => {
        dispatch({
          type : REGISTER_USER,
          user : newUser
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const loginUser = (user) => {
  return function(dispatch) {
    return axios.post("/login")
      .then(theUser => {
        dispatch({
          type: LOGIN_USER,
          user: theUser
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const logoutUser = () => {
  return function(dispatch) {
    return axios.get('/logout')
      .then(response => {
        dispatch({
          type: LOGOUT_USER,
          data: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}