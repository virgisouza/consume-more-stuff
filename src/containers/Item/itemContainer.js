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

// Create an attractive Detail view that fits with the rest of the site that presents the following information to the user:

// - description
// - image
// - price, if listed
// - condition
// - category
// - manufacturer
// - model
// - dimensions
// - notes
// - when the item was posted
// - when the item was last updated


// Unauthorized users will only be able to see "published" items.