import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';
import '../App/App.css';

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
      console.log(this.props, 'give props')



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
          <input
            type='text'
            placeholder='Username'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Username"}
            value={this.state.username}
            onChange={this.handleChangeUsername.bind(this)}
          />
           <input
            type='password'
            placeholder='Password'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Password"}
            value={this.state.password}
            onChange={this.handleChangePassword.bind(this)}
          />
          <button type='submit'>Login</button>
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
)(LoginUser);