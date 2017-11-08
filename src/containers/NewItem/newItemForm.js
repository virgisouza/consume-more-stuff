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
    this.state = {
      description : '',
      price : '',
      make : '',
      model : '',
      dimensions : '',
      notes : ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let newItem = {
      description : this.state.description,
      price : this.state.price,
      make : this.state.make,
      model : this.state.model,
      dimensions : this.state.dimensions,
      notes : this.state.notes
    };

    this.props.addItem(newItem);

    this.setState = {
      description : '',
      price : '',
      make : '',
      model : '',
      dimensions : '',
      notes : ''
    };

  }

  handleChangeDescription(event){
    event.preventDefault();
    this.setState({description : event.target.value});
  }

  handleChangePrice(event){
    event.preventDefault();
    this.setState({price : event.target.value});
  }

  handleChangeMake(event){
    event.preventDefault();
    this.setState({make : event.target.value});
  }

  handleChangeModel(event){
    event.preventDefault();
    this.setState({model : event.target.value});
  }

  handleChangeDimensions(event){
    event.preventDefault();
    this.setState({dimensions : event.target.value});
  }

  handleChangeNotes(event){
    event.preventDefault();
    this.setState({notes : event.target.value});
  }

  render() {
    return (
      <div className="NewItemForm">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>Description : </span><br></br>
          <input type="text" value={this.state.description} 
          onChange={this.handleChangeDescription.bind(this)} />
          <span>Price : </span><br></br>
          <input type="text" value={this.state.price} 
          onChange={this.handleChangePrice.bind(this)} />
          <span>Manufacturer/Make : </span><br></br>
          <input type="text" value={this.state.make}
          onChange={this.handleChangeMake.bind(this)} />
          <span>Model : </span><br></br>
          <input type="text" value={this.state.model} 
          onChange={this.handleChangeModel.bind(this)} />
          <span>Dimensions : </span><br></br>
          <input type="text" value={this.state.dimensions} 
          onChange={this.handleChangeDimensions.bind(this)} />
          <span>Notes : </span>
          <textarea rows="4" cols="50"
          onChange={this.handleChangeNotes.bind(this)} />
          <button type="submit">Submit</button>
        </form>
  
      </div>
    );
  }


}//end class

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (newItem) => {
      dispatch(addNewItem(newItem));
    }
  };
}

const ConnectedNewItemForm = connect(
  null,
  mapDispatchToProps
)(NewItemForm);

export default ConnectedNewItemForm;
