/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { loadItems } from '../../actions/items';
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';

import { logoutUser } from '../../actions/users';

import Header from '../Header/Header';
import ItemContainer from '../Item/itemContainer';
import NewItemForm from '../NewItem/newItemForm';
import Select from '../../components/select';
import FilterMap from '../../components/FilterMap';
import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.loadConditions();
    this.props.loadCategories();
    this.props.loadItems();
  }

  render() {
    console.log(this.props.items);

    return (
      <div className="App">
        
        <Header />
        
        <FilterMap list={this.props.items} cat_id={1} />
        <FilterMap list={this.props.items} cat_id={2} />
        <FilterMap list={this.props.items} cat_id={3} />

      </div>
    );
  }

}
//end class

const mapStateToProps = (state) => {
  return {
    items: state.itemList,
    user: state.user
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
    },
    logoutUser: () => {
      dispatch(logoutUser());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
