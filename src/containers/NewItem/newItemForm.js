/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class NewItemForm extends Component {

  constructor(props) {
    console.log('NewItemForm Constructor');
    super(props);
  }

  componentDidMount() {
    console.log('NewItemForm has mounted on App');
  }

  render() {
    return (
      <div className="NewItemForm">
        <p>NewItemForm Container</p>
      </div>
    );
  }


}//end class

export default NewItemForm;
