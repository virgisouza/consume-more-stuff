/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

import Select from '../../components/select';

class NewItemForm extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('NewItemForm has mounted.');
  }

  render() {
    return (
      <div className="NewItemForm">
        <div>
          <span>Description : </span><br></br>
          <input type="text" /><br></br>
          <span>Price : </span><input type="text" /><br></br>
          <span>Select Component</span><br></br>
          <span>Manufacturer/Make : </span><br></br>
          <input type="text" /><br></br>
          <span>Model Name/Number : </span><br></br>
          <input type="text" /><br></br>
          <span>Dimensions : </span><br></br>
          <span>Notes : </span>
          <textarea rows="4" cols="50" />
        </div>
        <div>
          <p>Picture Icon Here</p>
          <button>Add Image</button>
        </div>
      </div>
    );
  }


}//end class

export default NewItemForm;
