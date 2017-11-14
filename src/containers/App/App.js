/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
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
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
    console.log(this.props.items);
  }

  render() {
    console.log('App Render');
    const items = this.props.items;
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <Board list={items} filter='category' />
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