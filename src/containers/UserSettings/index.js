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
      email: '',
      show: false
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
    this.setState({
      username: event.target.value,
      show: true
    });

  }

  handleChangePassword(event){
    event.preventDefault();
    this.setState({password: event.target.value});
  }

  handleChangeEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value});
  }

  usernameSwitch(event){
    event.preventDefault();
    if(this.state.show === false){
      this.setState({
        show: 'username'
      });
    }else if(this.state.show === 'password'){
      this.setState({
        show: 'username'
      });
    }else if(this.state.show === 'email'){
      this.setState({
        show: 'username'
      });
    }else{
      this.setState({
        show: false
      })
    }
  }

  emailSwitch(event){
    event.preventDefault();
    if(this.state.show === false){
      this.setState({
        show: 'email'
      });
    }else if(this.state.show === 'password'){
      this.setState({
        show: 'email'
      });
    }else if(this.state.show === 'username'){
      this.setState({
        show: 'email'
      });
    }else{
      this.setState({
        show: false
      })
    }
  }

  passwordSwitch(event){
    event.preventDefault();
    if(this.state.show === false){
      this.setState({
        show: 'password'
      });
    }else if(this.state.show === 'email'){
      this.setState({
        show: 'password'
      });
    }else if(this.state.show === 'username'){
      this.setState({
        show: 'password'
      });
    }else{
      this.setState({
        show: false
      })
    }
  }

  componentDidMount(){

  }

  render(){
    console.log(this.props, 'EDIT USER PROPS')
    console.log('STATE', this.state)
    return(
      <div>
        <Header />

        <p>username has to be at least 6 characters long</p>
        <p>password has to be at least 4 characters long, one number, one uppercase letter</p>
        <p>email has to be a valid email address</p>

        <div className="userSettings">

          <div>
            <h2 className="settingsHeader">Edit User Information</h2>
          </div>

          <div className='editUser'>
            <form onSubmit={this.handleSubmit.bind(this)}>

              <div>
              <button onClick={this.usernameSwitch.bind(this)}>Edit Username</button>
              {this.state.show === 'username' ?
              <div className="userSettings">
                <input
                  class='CheckChange'
                  type='text'
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.handleChangeUsername.bind(this)}
                />
              {this.state.username.length > 6  ?
              <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
              : null}
                <button type='submit'>Submit</button>
              </div>
              : null}
              </div>

              <div>
              <button onClick={this.passwordSwitch.bind(this)}>Edit Password</button>
              {this.state.show === 'password' ?
              <div className="userSettings">
                <input
                  class='CheckChange'
                  type='text'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChangePassword.bind(this)}
                />
              {this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)  ?
              <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
              : null }
                <button type='submit'>Submit</button>
              </div>
              : null }
              </div>

              <div>
              <button onClick={this.emailSwitch.bind(this)}>Edit Email</button>
              {this.state.show === 'email' ?
              <div className="userSettings">
                <input
                  class='CheckChange'
                  type='text'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.handleChangeEmail.bind(this)}
                />
              {this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?
              <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
              : null}
                <button type='submit'>Submit</button>
              </div>
              : null }
              </div>

            </form>
          </div>
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


