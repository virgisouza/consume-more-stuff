/* Searchbar will keep local state, and pass a filter into the Redux-aware BOARD component. */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Searchbar.css';

/*ACTIONS*/
import { filterDate, filterPrice, filterCategory, filterCondition } from '../../actions/filter';

class Searchbar extends Component {

  constructor(props) {
    super(props);

    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCondition = this.handleChangeCondition.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  handleChangePrice(event) {
    
  }

  handleChangeCondition(event) {
    
  }

  handleChangeCategory(event) {
    
    
  }

  render() {
    console.log('Searchbar render');
    return (
      <div className='Searchbar'>

        <div className="Price">
          <div className="Price-label"><span>Sort By Price</span></div>
          <select onChange={this.handleChangePrice}>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        <div className="Category">
          <div className="Category-label"><span>View Categories</span></div>
          <select onChange={this.handleChangeCategory}>
            <option>all</option>
            <option>vehicles</option>
            <option>appliances</option>
            <option>computers</option>
            <option>furniture</option>
          </select>
        </div>
        
        <div className="Condition">
          <div className="Condition-label"><span>Condition</span></div>
          <div>
            <label for='new'>New</label>
            <input type='checkbox' id='new' onChange={this.handleChangeCondition} />
          </div>
          <div>
            <label for='Good'>Good</label>
            <input type='checkbox' id='Good' onChange={this.handleChangeCondition} />
          </div>
            <label for='Fair'>Fair</label>
            <input type='checkbox' id='Fair' onChange={this.handleChangeCondition} />
          <div>
            <label for='Worn'>Worn</label>
            <input type='checkbox' id='Worn' onChange={this.handleChangeCondition} />
          </div>
        </div>

        <div className="Search-button">
          <button>Search</button>
        </div>
      </div>
    );
  }

}
//end class


const mapDispatchToProps = (dispatch) => {
  return {
    filterDate : (filter) => {
      dispatch(filterDate(filter))
    },
    filterPrice : (filter) => {
      dispatch(filterPrice(filter))
    },
    filterCategory : (filter) => {
      dispatch(filterCategory(filter))
    },
    filterCondition : (filter) => {
      dispatch(filterCondition(filter))
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