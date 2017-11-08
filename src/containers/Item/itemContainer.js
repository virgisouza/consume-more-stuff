/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ItemContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    return(
      <div className="ItemContainer">
        <h1>Item Container</h1>
      </div>
    );
  }



}//end class

export default ItemContainer;
