/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import logo from './logo.svg';

import { loadInitialItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Item from '../../components/item';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadInitialItems();
  }

  render() {
    console.log('App component has rendered');
    return (
      <div className="App">
        <Header />
        <Item />
      </div>
    );
  }


}
//end class

const mapStateToProps = (state) => {
  return {
    initialItems: state.initialItems
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialItems: () => {
      dispatch(loadInitialItems());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
