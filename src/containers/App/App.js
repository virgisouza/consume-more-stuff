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
import LoginUser from '../Login';
import NewUser from '../Register';
import Logout from '../../components/Logout';
import logo from './logo.svg';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';

import { logoutUser } from '../../actions/users';
import FilterMap from '../../components/FilterMap';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.loadConditions();
    this.props.loadItems();
  }

  handleLogout(event) {

  }

  render() {
    console.log('App component rendered.');
    return (
      <div className="App">
        <Header />
        <div className="home_list">
          <FilterMap title={'Vehicles'} list={this.props.items} cat_id={1} />
          <FilterMap title={'Appliances'} list={this.props.items} cat_id={2} />
          <FilterMap title={'Computers'} list={this.props.items} cat_id={3} />
          <FilterMap title={'Furniture'} list={this.props.items} cat_id={4} />
        </div>

      </div>
    );
  }

}
//end class

const mapStateToProps = (state) => {
  return {
    items: state.itemList,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    } 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
