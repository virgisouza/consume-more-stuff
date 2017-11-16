/*This is the redux-aware component.*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Board.css';

/*ACTIONS*/
import { loadItems } from '../../actions/items'; 

/*CHILD COMPONENTS*/
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../../components/Grid';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    console.log('Board render');

    let items = this.props.items;
    let filter = this.props.filter;

    console.log(items);
    console.log('Current Filter : ', filter);

    return (
      <div className="board">
        <Searchbar />
        <Grid list={items} sort={filter} />
      </div>
    );
  }

}
//end class

const mapStateToProps = (state) => {
  return {
    items : state.itemList,
    filter : state.filter,
    category : state.category
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems : () => {
      dispatch(loadItems())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);