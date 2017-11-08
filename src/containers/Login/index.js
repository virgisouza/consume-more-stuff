import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';

class LoginUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginUser(user);
    //checking username and password against db

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

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type='text'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChangeUsername.bind(this)}
        />
         <input
          type='text'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChangePassword.bind(this)}
        />
        <button type='submit'>Login</button>
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user))
    }
  }
}

const ConnectLoginUser = connect(
  mapStateToProps,
  mapDispatchToProps
  )(LoginUser)

  export default ConnectLoginUser;