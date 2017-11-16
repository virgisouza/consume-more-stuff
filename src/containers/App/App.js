/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

/*ACTIONS*/
import { loadItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Searchbar from '../Searchbar/Searchbar';
import Board from '../Board/Board';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('App render');

    return (
      <div className="App">
        <Header />
        <Searchbar />
        <Board />
      </div>
    );
  }


}
//end class

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems : () => {
      dispatch(loadItems())
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
