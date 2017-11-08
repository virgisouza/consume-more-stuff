/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ItemContainer extends Component {

  constructor(props) {
    console.log('ItemContainer Constructor');
    super(props);
  }

  componentDidMount() {
    console.log('ItemContainer has mounted.');
  }

  render() {
    return(
      <div className="ItemContainer">

      </div>
    );
  }



}//end class

export default ItemContainer;
