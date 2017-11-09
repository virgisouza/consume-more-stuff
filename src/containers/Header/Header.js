/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../App/logo.svg';
import '../App/App.css';

/*import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';*/

class Header extends Component {
  
  constructor() {
    super();
  }

  handleLogout(event){
    event.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <header className="App-header">
        <div className="Login-reg">
          <ul>
            {/*This li has a separate className because of border issues*/}
            <li className="Login-reg-first"><a href="#">FAQ</a></li>

            <li><a href="#">Blog</a></li>
            <li><Link to={'/register'}>Register</Link></li>

            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Consume More Stuff</h1>
      </header>
    );
  }

}
//end class

export default Header;

