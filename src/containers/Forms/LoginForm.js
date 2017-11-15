import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

/*ACTIONS*/
import { loginUser } from '../../actions/users';

import './LoginForm.css';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      loggedIn : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  handleSubmit(event) {
    console.log('handle submit');
    event.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(user);

    this.setState({
      username : '',
      password : '',
      loggedIn : true
    });
  }

  render() {
    if (this.state.loggedIn === true) {
      return (<Redirect to='/' />);
    } else {
      return (
        <div className="Login-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ControlLabel className='Login-box'>Log In</ControlLabel>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>User Name</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                value={this.state.username}
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
              /*disabled={this.validateForm()}*/
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>

      ); 
    }


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
    loginUser: (user) => {
      dispatch(loginUser(user))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);