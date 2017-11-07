import React, { Component } from 'react';
import { connect } from 'react-redux';

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


    //checking username and password against db

    this.setState({
      username: '',
      password: ''
    })
  }

  handleChangeUsername(event){

  }

  handleChangePassword(event){

  }

  render(){
    return (

    );
  }
};

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ConnectLoginUser = connect(
  mapStateToProps,
  mapDispatchToProps
  )(LoginUser)

  export default ConnectLoginUser;