/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

import './NewItemForm.css';

import App from '../App/App.js';
import Item from '../../components/item';
import Select from '../../components/select';

import { addItem } from '../../actions/items';


class NewItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      file: '',
      body : '',
      price : '',
      condition_id: '',
      category_id: ''
      // redirect: false

    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    console.log(formData, 'FORM DATA')

    formData.append('file', this.state.file);
    formData.append('name', this.state.name);
    formData.append('body', this.state.body);
    formData.append('price', this.state.price);
    formData.append('category_id', this.state.category_id || 1);
    formData.append('condition_id', this.state.condition_id || 1);
    for(var key of formData.keys()){
      console.log(key, formData.get(key));
    }
    this.props.addItem(formData);

    this.setState({
      name: '',
      file: '',
      body : '',
      price : '',
      condition_id: '',
      category_id: ''
      // redirect: true
    });

  }

  /*HANDLERS*/
  handleChangeImage(event){
    event.preventDefault();
    let reader = new FileReader();

    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      })
    }

    reader.readAsDataURL(file);
  }

  handleChangeBody(event) {
    event.preventDefault();
    this.setState({body : event.target.value});
  }

  handleChangePrice(event) {
    event.preventDefault();
    this.setState({price : parseInt(event.target.value)});
  }

  handleChangeName(event) {
    event.preventDefault();
    this.setState({name : event.target.value});
  }

  handleChangeCondition(event) {
    event.preventDefault();
    this.setState({condition_id : parseInt(event.target.value)});
  }

  handleChangeCategory(event) {
    event.preventDefault();
    this.setState({category_id: parseInt(event.target.value)});
  }

  render() {
    return (
        <form className="NewItemForm" onSubmit={this.handleSubmit.bind(this)}>
          <span className="NewItemFormLabel">Item Name</span>
          <input
            type='text'
            placeholder='Name'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Name"}
            value={this.state.name}
            onChange={this.handleChangeName.bind(this)}
          />

          <span className="NewItemFormLabel">Upload Image</span>
          <input
            type='file'
            name='file'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Image path"}
            //value={this.state.image}
            onChange={this.handleChangeImage.bind(this)}/>

          <span className="NewItemFormLabel">Description</span>
          <textarea
            type='text'
            rows='15'
            cols='48'
            placeholder='Body'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Body"}
            value={this.state.body}
            onChange={this.handleChangeBody.bind(this)}
          />

          <span className="NewItemFormLabel">Price</span>
          <input
            type='text'
            style={{width : 50}}
            placeholder='Price'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Price"}
            value={this.state.price}
            onChange={this.handleChangePrice.bind(this)}
          />

          <span className="NewItemFormLabel">Category</span>
          <Select
            list={this.props.categories}
            type='name'
            handler={this.handleChangeCategory.bind(this)}
          />

          <span className="NewItemFormLabel">Condition</span>
          <Select
            list={this.props.conditions}
            type='type'
            handler={this.handleChangeCondition.bind(this)}
          />
          <button type='submit'>Submit</button>
        </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.itemList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (newItem) => {
      dispatch(addItem(newItem));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItemForm);