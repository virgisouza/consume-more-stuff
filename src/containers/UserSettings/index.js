import React, { Component } from 'react';
import UserItem from '../../components/UserItem';
import { connect } from 'react-redux';
import { editUser } from '../../actions/users';
import Header from '../Header/Header';


class UserSettings extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }


  handleSubmit(event){
    event.preventDefault();

    let editUser = {
      id: localStorage.getItem('user_id'),
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }

    this.props.editUser(editUser);

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

  componentDidMount(){

  }

  render(){
    console.log(this.props, 'EDIT USER PROPS')
    return(
      <div>
        <Header />
        <div className='editUser'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChangeUsername.bind(this)}
            />
            <input
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChangePassword.bind(this)}
            />
            <input
              type='text'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChangeEmail.bind(this)}
            />
            <button type='submit'>Submit</button>
          </form>

        </div>
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
    editUser: (user) => {
      dispatch(editUser(user))
    }
  }
}

const ConnectedUserSettings = connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserSettings);

export default ConnectedUserSettings;


