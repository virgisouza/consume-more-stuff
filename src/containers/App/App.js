/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Board from '../Board/Board';
import Searchbar from '../Searchbar/Searchbar';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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

export default App;