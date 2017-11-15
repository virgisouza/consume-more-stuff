/* This is a login form that resembles Craigslist. It will ask for a username and password, and will validate input fields. */

/* It will not only show up when the user clicks 'Login' at the top-left corner, but also when the user accesses a locked route such as 'Post New Item'. */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

/*ACTIONS*/
import { loginUser } from '../../actions/users';

import './LoginForm.css';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      handle : '',
      password : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.handle.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    console.log('Login Form rendered');
    return (
      <div className="Login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ControlLabel className='Login-box'>Log In</ControlLabel>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email/Handle</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.handle}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={this.validateForm()}
            type="submit"
          >
            Login
          </Button>
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