import React, { Component } from 'react';
import { loadUsers, addNewUser } from '../../actions/users';
import { connect } from 'react-redux';


class NewUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      login: localStorage.getItem('logged_in')
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.password
    };

    this.props.addNewUser(newUser);
    console.log(newUser);
    this.setState({
      username: '',
      password: '',
      email: ''
    })
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
    console.log(this.props)
    return (
      <div className='NewUserForm'>
      {!(this.state.login === 'true') ?
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
          type='text'
          placeholder= 'Username'
          value={this.state.username}
          onChange={this.handleChangeUsername.bind(this)}
          />
          <input
          type='text'
          placeholder= 'Password'
          value={this.state.password}
          onChange={this.handleChangePassword.bind(this)}
          />
          <input
          type='text'
          placeholder= 'Email'
          value={this.state.email}
          onChange={this.handleChangeEmail.bind(this)}
          />
          <button type='submit'>Submit</button>
        </form>
      : null}
      </div>


      )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.user
  }
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

const ConnectedUserList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(NewUser)

  export default ConnectedUserList;