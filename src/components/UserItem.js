import React from 'react';

const UserItem = ({ username, password, email }) => {

  return (
    <div className="new-user">
      <div>Username : {username}</div>
      <div>Password : {password}</div>
      <div>Email : {email}</div>
    </div>
  )
}

export default UserItem;
