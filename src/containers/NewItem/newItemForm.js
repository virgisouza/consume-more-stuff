/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

import '../App/App.css';

import Item from '../../components/item';
import Select from '../../components/select';

import { addItem } from '../../actions/items';
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';
import App from '../App/App.js';


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

    // let newItem = {
    //   name: this.state.name,
    //   imageUrl: this.state.image,
    //   body : this.state.body,
    //   price : this.state.price,
    //   condition_id: this.state.condition_id || 1,
    //   category_id: this.state.category_id || 1
    // };

    // this.props.addItem(newItem);


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


  componentDidMount() {
    this.props.loadCategories();
    this.props.loadConditions();
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
      console.log(this.state);
    }

    reader.readAsDataURL(file);
  }

  // handleChangeImage(event) {
  //   event.preventDefault();
  //   this.setState({image : event.target.value});
  // }

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
    console.log('NewItemForm has rendered.');
    console.log(this.props.itemList);
    return (
      <div className="NewItemForm">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="NewItemFormLabel">Item Name</div>
          <input
            type='text'
            placeholder='Name'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Name"}
            value={this.state.name}
            onChange={this.handleChangeName.bind(this)}
          />

          <div className="NewItemFormLabel">Upload Image</div>
          <input
            type='file'
            name='file'
            //placeholder='Image Url'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Image path"}
            //value={this.state.image}
            onChange={this.handleChangeImage.bind(this)}/>

          <div className="NewItemFormLabel">Description</div>
          <textarea
            type='text'
            rows='25'
            placeholder='Body'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Body"}
            value={this.state.body}
            onChange={this.handleChangeBody.bind(this)}
          />

          <div className="NewItemFormLabel">Price</div>
          <input
            type='text'
            style={{width : 50}}
            placeholder='Price'
            onFocus={(e) => e.target.placeholder=""}
            onBlur={(e) => e.target.placeholder="Price"}
            value={this.state.price}
            onChange={this.handleChangePrice.bind(this)}
          />

          <div className="NewItemFormLabel">Category</div>
          <Select
            list={this.props.categories}
            type='name'
            handler={this.handleChangeCategory.bind(this)}
          />

          <div className="NewItemFormLabel">Condition</div>
          <Select
            list={this.props.conditions}
            type='type'
            handler={this.handleChangeCondition.bind(this)}
          />
          <button type='submit'>Submit</button>

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.itemList,
    conditions: state.conditionList,
    categories: state.categoryList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem : (newItem) => {
      dispatch(addItem(newItem));
    },
    loadConditions : () => {
      dispatch(loadConditions());
    },
    loadCategories : () => {
      dispatch(loadCategories());
    }
  };
}

const ConnectedNewItemForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItemForm);

export default ConnectedNewItemForm;