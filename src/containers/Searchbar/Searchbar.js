/* This is a mock search bar component just after the header, and before the items.
It allows filtering of the items below on the board. */


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Searchbar.css';

/*ACTIONS*/
import { changeFilter } from '../../actions/filter';

/*CHILD COMPONENTS*/


class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCondition = this.handleChangeCondition.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangePrice(event) {
    console.log(event.target.value);
    this.props.changeFilter(event.target.value);
  }

  handleChangeCondition(event) {
    console.log(event.target.value);
    this.props.changeFilter(event.target.value);
  }

  handleChangeCategory(event) {
    console.log(event.target.value);
    this.props.changeFilter(event.target.value);
  }

  render() {
    console.log('Searchbar render');
    console.log(this.props);

    return (
      <div className='Searchbar'>
        <input 
          type='text' 
          name='search' 
          placeholder='Search Items..'
          onFocus={(e) => e.target.placeholder=""}
          onBlur={(e) => e.target.placeholder="Search Items.."} 
        />
        <button>Search</button>
        <select onChange={this.handleChangePrice}>
          <option value="" selected>Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select onChange={this.handleChangeCondition}>
          <option value="" selected>Condition</option>
          <option>Best to Worst</option>
          <option>Worst to Best</option>
        </select>
        <select onChange={this.handleChangeCategory}>
          <option value="" selected>Category</option>
          <option>vehicles</option>
          <option>appliances</option>
          <option>computers</option>
          <option>furniture</option>
        </select>
      </div>
    );
  }

}
//end class


const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter : (filter) => {
      dispatch(changeFilter(filter))
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);


/*
{`/users/${localStorage.getItem('user_id')}/items`}
*/