/* This is a mock search bar component just after the header, and before the items.
It allows filtering of the items below on the board. */


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Searchbar.css';

/*ACTIONS*/


/*CHILD COMPONENTS*/


class Searchbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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
        <select>
          <option value="" selected>Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select>
          <option value="" selected>Condition</option>
          <option>Best to Worst</option>
          <option>Worst to Best</option>
        </select>
        <select>
          <option value="" selected>Category</option>
          <option>Vehicles</option>
          <option>Appliances</option>
          <option>Computers</option>
          <option>Furniture</option>
        </select>
      </div>
    );
  }

}
//end class


export default Searchbar;

/*
{`/users/${localStorage.getItem('user_id')}/items`}
*/