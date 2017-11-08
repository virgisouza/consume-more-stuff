import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemContainer from '../Item/itemContainer';
import NewItemForm from '../NewItem/newItemForm';
import Select from '../../components/select';

class App extends Component {

  constructor(props) {
    console.log('App Constructor');
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Login-reg">
            <ul>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Consume More Stuff</h1>
        </header>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>All Items</li>
            <li>View By Category</li>
          </ul>
        </div>
        <NewItemForm />        
      </div>
    );
  }


}//end class

export default App;
