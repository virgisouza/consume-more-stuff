import React, { Component } from 'react';
import { loadUsers, addNewUser } from '../../actions/users';
import { connect } from 'react-redux';
import '../App/App.css';

class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    this.props.addNewUser(newUser);
    console.log(newUser);
    this.setState({
      username: '',
      password: '',
      email: ''
    });
  }

  handleChangeUsername(event){
    event.preventDefault();
    this.setState({username: event.target.value});
  }

  handleChangePassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleChangeEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div className='NewUserForm'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder= 'Username' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Username"} value={this.state.username} onChange={this.handleChangeUsername.bind(this)} required />
          <input type='text' placeholder= 'Password' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Password"} value={this.state.password}
          onChange={this.handleChangePassword.bind(this)} required /><br></br>
          <input type='text' placeholder= 'Email' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Email"} value={this.state.email} onChange={this.handleChangeEmail.bind(this)} required />
          <button type='submit'>Submit</button>
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
    loadUsers: () => {
      dispatch(loadUsers())
    },
    addNewUser: (user) => {
      dispatch(addNewUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);