/* This is a login form that resembles Craigslist. It will ask for a username and password, and will validate input fields. */

/* It will not only show up when the user clicks 'Login' at the top-left corner, but also when the user accesses a locked route such as 'Post New Item'. */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';

import './LoginForm.css';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(user);

    this.setState({
      username: '',
      password: ''
    })
  }

  handleChangeUsername(event){
    event.preventDefault();
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword(event){
    event.preventDefault();
    this.setState({
      password: event.target.value
    })
  }

  render() {
    console.log('Login Form rendered');
    return (

      <div className="Login-form">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="Login-box">
            <span>Log In</span>
          </div>
          <div className="Login-handle">
            <span>Email/Handle</span>
          </div>
            
           <div>
            <input
              type='text'
              placeholder=''
              onFocus={(e) => e.target.placeholder=""}
              onBlur={(e) => e.target.placeholder=""}
              onChange={this.handleChangeUsername.bind(this)}
            />
           </div>

          <div className="Login-pw">
            <span>Password</span>
          </div>

            <div>
              <input
                type='text'
                placeholder=''
                onFocus={(e) => e.target.placeholder=""}
                onBlur={(e) => e.target.placeholder=""}
                onChange={this.handleChangePassword.bind(this)}
              />
            </div>
            
            <div className="Login-bottom">
              <button type='submit'>Log In</button>
              <a>Forgot Password?</a>
            </div>
        </form>

      </div>

    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);