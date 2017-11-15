/*This is the guest or user component in the top-left corner of the Header*/

/*If the user is not logged in, it will show 
Hello, Guest ... LOGIN | REGISTER*/

/*If the user is currently logged in, it will show 
Hello, User ... LOGOUT*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './UserGuest.css';

/*ACTIONS*/
import { loginUser, logoutUser } from '../../../actions/users';

/*CHILD COMPONENTS*/
import LoginForm from '../../Forms/LoginForm';
import RegisterForm from '../../Forms/RegisterForm';

class UserGuest extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user'>
      
          {
            localStorage.getItem('logged_in') ? 
            <ul>
                <li><span className='hello-user'>Hello , {localStorage.getItem('username')}</span></li>
                <li><Link className='logout' to='/logout'>Logout</Link></li>
            </ul>
            :
            <ul>
                <li><span className='hello-guest'>Hello, Guest</span></li>
                <li><Link className='login' to='/login'>Login</Link><Link className='register' to='/register'>Register</Link></li>
            </ul> 
          }
        
      </div>
    );
  }




}
//end class

export default UserGuest;