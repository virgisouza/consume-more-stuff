import React from 'react';

const Logout = ({ handler }) => {

  return (
    <button style={{color: 'pink'}} value='Logout' onClick={handler}>Logout</button>
  );

}

export default Logout;