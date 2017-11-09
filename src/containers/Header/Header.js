/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../App/logo.svg';
import '../App/App.css';

import { logoutUser } from '../../actions/users';

import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';

class Header extends Component {
  
  constructor() {
    super();
    this.state = {
      showLogin : false,
      showRegister : false
    };
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser();
  }

  showLogin() {
    this.setState({
      showLogin : true
    });
  }

  showRegister() {
    this.setState({
      showRegister : true
    });
  }

  render() {
    console.log('Header Component rendered');
    const loginForm = (<LoginUser />);
    const registerForm = (<NewUser />);
    
    return (
      <div className="App-header">
        <div className="Login-reg">
          <ul>
            <li className="Login-reg-first"><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#" onClick={this.showRegister.bind(this)}>Register</a></li> 
            <li><a href="#" onClick={this.showLogin.bind(this)}>Login</a></li>
          </ul>
        </div>
        {this.state.showLogin ? loginForm : null}
        {this.state.showRegister ? registerForm : null}
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Consume More Stuff</h1>
      </div>
    );

  }

}
//end class

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Header);


