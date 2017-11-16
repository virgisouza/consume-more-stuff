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

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import FilterCategory from '../../components/FilterMap';
import FilterMap from '../../components/FilterMap';

class App extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.loadConditions();
    this.props.loadItems();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log('App render');
    
    let items = this.props.items;
    let filter = this.props.filter;
   
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <div className="home_list">
            <FilterMap list={items} cat='vehicles' />
            <FilterMap list={items} cat='appliances' />
            <FilterMap list={items} cat='computers' />
            <FilterMap list={items} cat={filter} />
        </div>
      </div>
    );
  }




}
//end class

const mapStateToProps = (state) => {
  return {
    items : state.itemList,
    filter : state.filter
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
