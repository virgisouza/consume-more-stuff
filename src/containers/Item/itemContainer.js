/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/
/*SMART COMPONENT CONTAINS A SINGLE ITEM*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

import Item from '../../components/item';

class ItemContainer extends Component {

  constructor(props) {
    console.log('ItemContainer Constructor');
    super(props);
  }

  

  render() {
    return(
      <div className="ItemContainer">
        <p>ItemContainer</p>
      </div>
    );
  }



}//end class

export default ItemContainer;