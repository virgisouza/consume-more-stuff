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

/*CHILD COMPONENTS*/
import Header from '../Header/Header';

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
    return (
      <div className="App">
      <Header />

        <div className="home_list">
            <FilterMap title={'Vehicles'} list={this.props.items} cat_id={1} />
            <FilterMap title={'Appliances'} list={this.props.items} cat_id={2} />
            <FilterMap title={'Computers'} list={this.props.items} cat_id={3} />
            <FilterMap title={'Furniture'} list={this.props.items} cat_id={4} />
        </div>

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
