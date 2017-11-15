/* This is our main component that contains Header, Board, and Bar. */
/* It will load the list of items from Redux store upon mounting, and feed this data to other components. */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

/*ACTIONS*/
import { loadItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Board from '../Board/Board';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    console.log('App Render');
    const items = this.props.items;
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <Board items={items} filter='category' />
      </div>
    );
  }

}
//end class

const mapStateToProps = (state) => {
  return {
    items: state.itemList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);