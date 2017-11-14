import React, { Component } from 'react';
import Item from '../../components/item';
import { connect } from 'react-redux';
import Header from '../Header/Header';
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
      condition_id: '',
      show: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let formData = new FormData();
    console.log(formData, 'FORM DATA')


    formData.append('file', this.state.file);
    formData.append('name', this.state.name);
    formData.append('body', this.state.body);
    formData.append('price', this.state.price);
    formData.append('category_id', this.state.category_id || 1);
    formData.append('condition_id', this.state.condition_id || 1);
    formData.append('id', parseInt(this.props.match.params.id));

    for(var key of formData.keys()){
      console.log(key, formData.get(key));
    }

    this.props.editItem(formData);

    this.setState({
      name: '',
      file: '',
      body: '',
      price: '',
      category_id: '',
      condition_id: '',
      show: false

    })
  }

  handleChangeDelete(event){
    event.preventDefault();
    this.props.deleteItem(this.props.item.id);
  }

  handleChangeName(event){
    event.preventDefault();
    this.setState({name: event.target.value});
  }

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

  handleChangeBody(event){
    event.preventDefault();
    this.setState({body: event.target.value});
  }

  handleChangePrice(event){
    event.preventDefault();
    this.setState({price: event.target.value});
  }

  handleChangeCategory(event){
    event.preventDefault();
    this.setState({category_id: event.target.value});
  }

  handleChangeCondition(event){
    event.preventDefault();
    this.setState({condition_id: event.target.value});
  }

  toggleEdit(event){
    event.preventDefault();
    if(this.state.show === false){
      this.setState({
        show:true
      })
    }else{
      this.setState({
        show:false
      })
    }
  }

  componentDidMount(){

    // let itemID = parseInt(this.props.match.params.id);
    // console.log('itemId', itemID);
    // console.log('thishere', this.props.loadItem(itemID));
    this.props.loadConditions();
    this.props.loadCategories();
  }

  render(){
    // console.log('PROPS', this.props)
    // console.log('STATE', this.state)
    return (
      <div>

        {this.props.item.user_id === Number(localStorage.getItem('user_id')) && this.props.item.status_id === 1 ?
        <div>
          <button onClick={this.toggleEdit.bind(this)}>Edit</button>
          <button onClick={this.handleChangeDelete.bind(this)}>Mark as SOLD</button>
        </div>
        : null }

        <div className='EditItem'>
          {this.state.show === true && this.props.item.user_id === Number(localStorage.getItem('user_id')) && this.props.item.status_id === 1 ?
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type='text'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />

            <input
              type='file'
              name='file'
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
              defaultVal={this.props.item.category_id}
            />

            <Select
              list={this.props.conditions}
              label='Condition : '
              type='type'
              handler={this.handleChangeCondition.bind(this)}
              defaultVal={this.props.item.condition_id}
            />
            <button type='submit'>Submit</button>

          </form>
          : null}
        </div>
      </div>
    )
  }
}

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

