import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

/*ACTIONS*/
import { addNewUser } from '../../actions/users';

import './LoginForm.css';

class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    this.props.addNewUser(newUser);

    this.setState({
      username: '',
      password: '',
      email: ''
    });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  render() {
    console.log('Register Form render');
    return (
      <div className="Login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ControlLabel className='Login-box'>Create Account</ControlLabel>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              autoFocus
              type="email"
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
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>E-Mail</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            /*disabled={this.validateForm()}*/
            type="submit"
          >
            Register
          </Button>
        </form>
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
    addNewUser: (user) => {
      dispatch(addNewUser(user))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);