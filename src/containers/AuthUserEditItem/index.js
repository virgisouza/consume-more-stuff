import React, { Component } from 'react';
import SingleItem from '../../components/item_single';
import { connect } from 'react-redux';

import '../App/App.css';

import { loadItem } from '../../actions/items';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { editItem, deleteItem } from '../../actions/items';

import Select from '../../components/select';

class AuthUserEditItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      file: '',
      body: '',
      price: '',
      category_id: '',
      condition_id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let editItem = {
      name: this.state.name,
      file: this.state.file,
      body: this.state.body,
      price: this.state.price,
      category_id: this.state.category_id || 1,
      condition_id: this.state.condition_id || 1,
      id: parseInt(this.props.match.params.id)
    }

    this.props.editItem(editItem);

    this.setState({
      name: '',
      file: '',
      body: '',
      price: '',
      category_id: '',
      condition_id: ''
    })
  }

  handleChangeDelete(event) {
    event.preventDefault();
    this.props.deleteItem(this.props.match.params.id);
  }

  handleChangeName(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  handleChangeImage(event) {
    event.preventDefault();
    this.setState({file: event.target.value});
  }

  handleChangeBody(event) {
    event.preventDefault();
    this.setState({body: event.target.value});
  }

  handleChangePrice(event) {
    event.preventDefault();
    this.setState({price: event.target.value});
  }

  handleChangeCategory(event) {
    event.preventDefault();
    this.setState({category_id: event.target.value});
  }

  handleChangeCondition(event) {
    event.preventDefault();
    this.setState({condition_id: event.target.value});
  }


  componentDidMount(){
    let itemID = parseInt(this.props.match.params.id);
    this.props.loadItem(itemID);
    this.props.loadConditions();
    this.props.loadCategories();
  }

  render(){
    
    return (

      <div>
        <SingleItem name={this.props.item.name}
              image={this.props.item.image}
              body={this.props.item.body}
              price={this.props.item.price}
              condition={this.props.item.Condition.type}
              category={this.props.item.Category.name}
              updatedAt={this.props.item.updatedAt} />

        {this.props.item.user_id === Number(localStorage.getItem('user_id')) && this.props.item.status_id === 1 ?
        <div className="EditItemForm">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type='text'
              placeholder='Name'
              onFocus={(e) => e.target.placeholder=""}
              onBlur={(e) => e.target.placeholder="Name"}
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />

            <input
              type='text'
              placeholder='Image Url'
              onFocus={(e) => e.target.placeholder=""}
              onBlur={(e) => e.target.placeholder="Image URL"}
              value={this.state.image}
              onChange={this.handleChangeImage.bind(this)}
            />

            <textarea
              type='text'
              placeholder='Body'
              rows='25'
              onFocus={(e) => e.target.placeholder=""}
              onBlur={(e) => e.target.placeholder="Body"}
              value={this.state.body}
              onChange={this.handleChangeBody.bind(this)}
            />

            <input
              type='text'
              placeholder='Price'
              onFocus={(e) => e.target.placeholder=""}
              onBlur={(e) => e.target.placeholder="Price"}
              value={this.state.price}
              onChange={this.handleChangePrice.bind(this)}
            />
            <div className='EditItemForm-selectLabel'>Category</div>
            <Select
              className='EditItemForm-select'
              list={this.props.categories}
              type='name'
              handler={this.handleChangeCategory.bind(this)}
            />
            <div className='EditItemForm-selectLabel'>Condition</div>
            <Select
              className='EditItemForm-select'
              list={this.props.conditions}
              type='type'
              handler={this.handleChangeCondition.bind(this)}
            />
            <button type='submit'>Submit</button>
            <button onClick={this.handleChangeDelete.bind(this)}>Mark as SOLD</button>
          </form>
        </div>

      //FOR MERGE CONFLICT, COMMENTING OUT
    )
  }
}

      {/*<div className='EditItem'>
      <Item name={this.props.item.name}
            image={this.props.item.file}
            body={this.props.item.body}
            price={this.props.item.price}
            condition={this.props.item.Condition.type}
            category={this.props.item.Category.name}
            updatedAt={this.props.item.updatedAt} />

        {this.props.item.user_id === Number(localStorage.getItem('user_id')) && this.props.item.status_id === 1 ?
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChangeName.bind(this)}
          />

          <input
            type='text'
            placeholder='file Url'
            value={this.state.file}
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
          <button type='submit'>Submit</button>
          <button onClick={this.handleChangeDelete.bind(this)}>Mark as SOLD</button>
        </form>
>>>>>>> dev
        : null}
      </div>*/


const mapStateToProps = (state) => {
  return {
    item : state.singleItem,
    categories: state.categoryList,
    conditions: state.conditionList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    },
    loadItem: (id) => {
      dispatch(loadItem(id));
    },
    editItem: (item) => {
      dispatch(editItem(item));
    },
    deleteItem: (item) => {
      dispatch(deleteItem(item));
    }
  }
}
const ConnectedEditItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthUserEditItem);

export default ConnectedEditItem;

