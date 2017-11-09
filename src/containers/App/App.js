import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { loadItems } from '../../actions/items';
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';

import { logoutUser } from '../../actions/users';

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



  }

  componentDidMount(){
    this.props.loadConditions();
    this.props.loadCategories();
    this.props.loadItems();
  }

  handleLogout(event){
    event.preventDefault();
    this.props.logoutUser();
  }

  render() {
    console.log('THIS', this.props);
    return (
      <div className="App">
        <header className="App-header">

          <div className="Login-reg">
            <ul>
              <li><LoginUser/></li>
              <li><NewUser/></li>
              {(this.props.user.logged_in === true || localStorage.getItem('logged_in') === 'true') ?
              <li><Logout handler={this.handleLogout.bind(this)}/></li>
              :null}
            </ul>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Consume More Stuff</h1>
        </header>

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
