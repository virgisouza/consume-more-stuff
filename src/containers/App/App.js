/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { loadItems } from '../../actions/items';
import { loadInitialItems } from '../../actions/items';
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';

import logo from './logo.svg';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Item from '../../components/item';

import FilterMap from '../../components/FilterMap';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadConditions();
    this.props.loadInitialItems();
  }

  render() {
    let initialItems = this.props.initialItems;
    return (
      <div className="App">
        <Header />
        {
          initialItems.map(i => {
            return (
              <Item />
            );
          })
        }

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    initialItems: state.itemList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialItems: () => {
      dispatch(loadInitialItems());
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
