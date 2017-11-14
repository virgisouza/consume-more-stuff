/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/
/*HEADER COMPONENT WITH LOGIN AND REGISTER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

/*ACTIONS*/
import { loginUser, logoutUser } from '../../actions/users';

/*CHILD COMPONENTS*/
import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';

class Header extends Component {


  constructor(props) {
    super(props);

    this.state = {
      showLogin : false,
      showRegister : false
    };
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser();
    this.setState({
      showLogin: false
    })
  }

  showLogin() {
    if(this.state.showLogin === true){
      this.setState({
        showLogin: false
      })
    }else{
      this.setState({
      showRegister : false,
      showLogin : true
      });
    }
  }

  showRegister() {
    if(this.state.showRegister === true){
      this.setState({
        showRegister: false
      })
    }else{
      this.setState({
        showLogin : false,
        showRegister : true
      });
    }
  }

  render() {
    return (
      <div className="main">
        
        <div className="login-bar">
          <ul>
            <li><Link to={'/'}>All Items</Link></li>
            <li>{localStorage.getItem('username')}</li>

            {localStorage.getItem('logged_in') !== 'true' ?
            <div>
            <li><a href="#" onClick={this.showRegister.bind(this)}>Register</a></li>
            {this.state.showRegister === true ?
            <NewUser />
            : null}

            <li><a href="#" onClick={this.showLogin.bind(this)}>Login</a></li>
            {this.state.showLogin === true ?
            <LoginUser />
            : null}
            </div>
            : null}

            {localStorage.getItem('logged_in') === 'true' ?
            <div>
              <Link to={`/users/${localStorage.getItem('user_id')}/items`}><li>My Items</li></Link>
              <li><Logout handler={this.handleLogout.bind(this)}/> </li>
            </div>
            : null }

          </ul>
        </div>

        <img src='logo.png' className="logo" alt="" width="350" height="105" />
      </div>
    );

  }

}


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
    },
    loginUser: () => {
      dispatch(loginUser());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


