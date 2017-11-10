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

  render() {
<<<<<<< HEAD
    console.log('App Component Rendered');

    return (
      <div className="App">
        
        <Header />
        
        <FilterMap list={this.props.items} cat_id={1} />
        <FilterMap list={this.props.items} cat_id={2} />
        <FilterMap list={this.props.items} cat_id={3} />
        <FilterMap list={this.props.items} cat_id={4} />
=======
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
>>>>>>> dev

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
