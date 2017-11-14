import React from 'react';
import Header from '../containers/Header/Header';
import { Link } from 'react-router-dom';

const Goodbye = () => {
  return (
    <div>
      <Header/>
      <h3>You have successfully logged out!</h3>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Goodbye;