import React, { Component } from 'react';
import { loadUserItems } from '../actions/items';
import { connect } from 'react-redux';
import FilterMap from './FilterMap';

class MyItems extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let userID = parseInt(this.props.match.params.id)
    this.props.loadUserItems(userID);
  }

  render(){
    console.log(this.props)
    return(
      <div className="myItems">
        <FilterMap list={this.props.items}
                   cat_id={1}
                   title={'Vehicles'}
        />

        <FilterMap list={this.props.items}
                   cat_id={2}
                   title={'Appliances'}
        />

        <FilterMap list={this.props.items}
                   cat_id={3}
                   title={'Computers'}
        />

        <FilterMap list={this.props.items}
                   cat_id={4}
                   title={'Furniture'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserItems: (id) => {
      dispatch(loadUserItems(id));
    }
  }
}

const ConnectedMyItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyItems);

export default ConnectedMyItems;