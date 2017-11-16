/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

/*ACTIONS*/
import { loadItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Board from '../Board/Board';

class App extends Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('App render');

    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }


}
//end class

const mapStateToProps = (state) => {
  return {
    items : state.itemList,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems : () => {
      dispatch(loadItems())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
