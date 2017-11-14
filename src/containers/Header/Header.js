/*HEADER COMPONENT*/
/*CONTAINS OUR LOGO and POST / ACCOUNT options*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

/*ACTIONS*/

/*CHILD COMPONENTS*/
import UserGuest from './UserGuest/UserGuest';


class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <UserGuest />
        <div className="options">
          <ul> 
            <li><Link className='new' to='/new'>Post Item</Link></li>
            <li><Link className='account' to='/myaccount'>Account</Link></li>
          </ul>
        </div>
        <img src='logo.png' className="logo" alt="" width="350" height="105" />
      </div>
    );

  }

}


export default Header;


