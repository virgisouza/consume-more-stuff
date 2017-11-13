/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser, logoutUser } from '../../actions/users';

import CurrentUser from './CurrentUser';

import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser();
  }

  render() {
    console.log('Header Component has rendered');
    
    return (
      <div className="Header">
        <div className="Login-reg">
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className='Header-logo'><img src='http://bit.ly/2i7HDJx' /></div>
      </div>
    );

  }

}
//end class

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => {
      dispatch(loginUser());
    },
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


