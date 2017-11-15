/* This is our board component, it will render multiple ITEM components */

/* APP is what passes the list of items into it. It will then call a FilterX component based on
the filter prop passed into it. */

/* It will start off with "most recently submitted" as its filter. */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Board.css';

/*ACTIONS*/

/*CHILD COMPONENTS*/
import Item from '../../components/item';
import FilterCategory from './Filters/FilterCategory';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('Board render');
    let items = this.props.list;
    let filter = this.props.filter;
    return (
      <div className="board">
        <Item />
        {filter == 'category' ? <FilterCategory list={items} cat="appliances" /> : null}
        {filter == 'price' ? console.log('FilterPrice') : null}
        {filter == 'condition' ? console.log('FilterCondition') : null}
        {filter == 'status' ? console.log('FilterStatus') : null}
      </div>
    );
  }

}
//end class


export default connect(
  null,
  null
)(Board);
