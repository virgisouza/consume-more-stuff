import React, { Component } from 'react';
import { loadUsers, addNewUser } from '../../actions/users';
import { connect } from 'react-redux';
import '../App/App.css';

class NewUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      show: true
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
      email: (this.state.email).toLowerCase()
    };

    if((this.state.username < 6) ||
      (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/.test(this.state.password) === false) ||
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email) === false){
        alert(
          '* Username must be at least 6 characters long \n* Password must be at least 4 characters long and include: one number and one uppercase letter \n* Email must be a valid email address'
        )
    }else{
        this.props.addNewUser(newUser);
        alert(
          'Registration Successful'
        )
        this.setState({
          username: '',
          password: '',
          email: '',
          show: false
        });
      }

    console.log(newUser);
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
      {this.state.show ?
        <form onSubmit={this.handleSubmit.bind(this)}>

          <input type='text' placeholder= 'Username' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Username"} value={this.state.username} onChange={this.handleChangeUsername.bind(this)} required />
           {this.state.username.length >= 6  ?
            <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
            : null}

          <input type='password' placeholder= 'Password' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Password"} value={this.state.password}
          onChange={this.handleChangePassword.bind(this)} required />
          {this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)  ?
            <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
            : null }<br></br>

          <input type='text' placeholder= 'Email' onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder="Email"} value={this.state.email} onChange={this.handleChangeEmail.bind(this)} required />
           {this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?
            <img src='/assets/bright-green-check-mark-hi.png' height='20' width='20'/>
            : null}

          <button type='submit'>Submit</button>
        </form>
      : null }
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
)(NewUser);