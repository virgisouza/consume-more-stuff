import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { loadItems } from '../../actions/items';
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';
import ItemContainer from '../Item/itemContainer';
import NewItemForm from '../NewItem/newItemForm';
import Select from '../../components/select';
import FilterMap from '../../components/FilterMap';

class App extends Component {

  constructor() {
    console.log('App Constructor');
    super();
  }

  componentDidMount(){
    this.props.loadConditions();
    this.props.loadCategories();
    this.props.loadItems();
  }

  render() {
    console.log(this.props);
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

        <FilterMap list={this.props.items} cat_id={1} />
        <FilterMap list={this.props.items} cat_id={2} />
        <FilterMap list={this.props.items} cat_id={3} />

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


}

const mapStateToProps = (state) => {
  return {
    items: state.itemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
