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

import Select from '../../components/select';
import SelectTest from '../../components/select_test';

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
    console.log('App Component Rendered');

    return (
      <div className="App">
        
        <Header />
        
        <FilterMap list={this.props.items} cat_id={1} />
        <FilterMap list={this.props.items} cat_id={2} />
        <FilterMap list={this.props.items} cat_id={3} />
        <FilterMap list={this.props.items} cat_id={4} />

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
