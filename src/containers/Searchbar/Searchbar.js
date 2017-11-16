/* A somewhat smart component. It will have a local state that will filter things from the
Redux-aware BOARD component. It will then output things in a CONTENT dummy component. */

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
    event.target.value === 'Low to High' ? this.props.changeFilter(1) : this.props.changeFilter(2);
  }

  handleChangeCondition(event) {
    event.target.value === 'Best to Worst' ? this.props.changeFilter(3) : this.props.changeFilter(4);
  }

  handleChangeCategory(event) {
    switch (event.target.value) {
      case 'vehicles': 
        return this.props.changeFilter(5);
      case 'appliances':
        return this.props.changeFilter(6);
      case 'computers':
        return this.props.changeFilter(7);
      case 'furniture':
        return this.props.changeFilter(8);
      default:
        return null;
    }
  }

  render() {
    console.log('Searchbar render');
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
          <option value="">Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select onChange={this.handleChangeCondition}>
          <option value="">Condition</option>
          <option>Best to Worst</option>
          <option>Worst to Best</option>
        </select>
        <select onChange={this.handleChangeCategory}>
          <option value="">Category</option>
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