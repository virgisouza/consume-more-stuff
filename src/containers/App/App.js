/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { loadItems } from '../../actions/items';
/*import { loadInitialItems } from '../../actions/items';*/ //code change
import { loadCategories } from '../../actions/categories';
import { loadConditions } from '../../actions/conditions';

import logo from './logo.svg';

/*CHILD COMPONENTS*/
import Header from '../Header/Header';
import Item from '../../components/item';

import { logoutUser } from '../../actions/users';
import FilterMap from '../../components/FilterMap';

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }


  componentWillMount(){
    this.props.loadConditions();
    this.props.loadItems();

  }

  componentDidMount() {
    this.props.loadConditions();
    this.props.loadItems();
  }


  render() {
    let items = this.props.items;
    let callback = function(a, b) {
      return a.createdAt - b.createdAt;
    }

    console.log(items);

    return (
      <div className="App">
        <Header />

        {
          items.sort(callback)
          .map(item => {
            console.log(item);
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
    items: state.itemList,
    initialItems: state.initialItems, //code change
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    // loadInitialItems: () => { //code change
    //   dispatch(loadInitialItems());
    // },
    loadConditions: () => {
      dispatch(loadConditions());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
