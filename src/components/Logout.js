import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../actions/users';
import { connect } from 'react-redux';

class Logout extends Component {
  constructor(props){
    super(props);

    this.state = {
      redirect: false
    }
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser();
    this.setState({
      showLogin: false,
      redirect: true
    })
  }

  render(){
    if(this.state.redirect) {
     return <Redirect to={"/"}/>
    }
    return (
      <button style={{color: 'pink'}} value='Logout' onClick={this.handleLogout.bind(this)}>Logout</button>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Logout);