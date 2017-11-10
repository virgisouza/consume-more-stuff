/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
/*THE NEW ITEM FORM CONTAINER*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
      image: '',
      body : '',
      price : '',
      condition_id: '',
      category_id: '',
      redirect: false

    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let newItem = {
      name: this.state.name,
      image: this.state.image,
      body : this.state.body,
      price : this.state.price,
      condition_id: this.state.condition_id || 1,
      category_id: this.state.category_id || 1
    };

    this.props.addItem(newItem);

    this.setState({
      name: '',
      image: '',
      body : '',
      price : '',
      condition_id: '',
      category_id: '',
      redirect: true
    });

  }

  handleChangeBody(event){
    event.preventDefault();
    this.setState({body : event.target.value});
  }

  handleChangePrice(event){
    event.preventDefault();
    this.setState({price : parseInt(event.target.value)});
  }

  handleChangeName(event){
    event.preventDefault();
    this.setState({name : event.target.value});
  }

  handleChangeImage(event){
    event.preventDefault();
    this.setState({image : event.target.value});
  }

  handleChangeCondition(event){
    event.preventDefault();
    this.setState({condition : parseInt(event.target.value)});
  }

  handleChangeCategory(event){
    event.preventDefault();
    this.setState({category : parseInt(event.target.value)});
  }

  componentDidMount(){
    this.props.loadCategories();
    this.props.loadConditions();
  }

  render() {

    const redirect = this.state.redirect;
    if(redirect){
       return <Redirect to='/'/>

    }

    return (
      <div className="NewItemForm">

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChangeName.bind(this)}
          />

          <input
            type='text'
            placeholder='Image Url'
            value={this.state.image}
            onChange={this.handleChangeImage.bind(this)}
          />

          <input
            type='text'
            placeholder='Body'
            value={this.state.body}
            onChange={this.handleChangeBody.bind(this)}
          />

          <input
            type='text'
            placeholder='Price'
            value={this.state.price}
            onChange={this.handleChangePrice.bind(this)}
          />

          <Select
            list={this.props.categories}
            label='Category: '
            type='name'
            handler={this.handleChangeCategory.bind(this)}
          />

          <Select
            list={this.props.conditions}
            label='Condition : '
            type='type'
            handler={this.handleChangeCondition.bind(this)}
          />
          <input type='submit'/>
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
  }
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
