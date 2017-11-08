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
    return addUser().then(user => {
      dispatch({
        type : ADD_USER,
        user : user
      })
    })
  }
}