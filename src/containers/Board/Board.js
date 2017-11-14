/* This is our board component, it starts off with the 20 most recent items */
/* It will render ITEM component */
/* It will also render a SEARCHBAR.. */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Board.css';

/*ACTIONS*/
import { loadInitialItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import Searchbar from '../Searchbar/Searchbar';
import Item from '../../components/item';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadInitialItems();
  }

  render() {
    let initialItems = this.props.initialItems;
    
    return (
      <div className="board">
        {
          initialItems.map(item => {
            return (
              <Item 
                name={item.name}
                image={item.file}
                body={item.body}
                price={item.price}
                condition={item.Condition.type}
                category={item.Category.name}
                updatedAt={item.updatedAt}
                key={item.id}
                id={item.id}
                user_id={item.user_id}
              />
            );
          })
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    initialItems: state.itemList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialItems: () => {
      dispatch(loadInitialItems());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
