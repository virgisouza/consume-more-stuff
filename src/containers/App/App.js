import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
import logo from './logo.svg';
import './App.css';

import ItemContainer from '../Item/itemContainer';
import NewItemForm from '../NewItem/newItemForm';
import Select from '../../components/select';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
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
      </div>
    );
  }


}//end class

const mapStateToProps = (state) => {
  return {
    items : state.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems : () => {
      dispatch(loadItems())
    }
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


