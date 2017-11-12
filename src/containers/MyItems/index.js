import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUserItems } from '../../actions/items';

import Header from '../Header/Header';
import NewItemForm from '../NewItem/newItemForm';

class MyItems extends Component {

  componentDidMount() {
    let userID = parseInt(this.props.match.params.id);
    this.props.loadUserItems(userID);
  }

  render() {
    console.log('MyItems component has rendered', this.props);
    return(
      <div className="myItems">
      <Header />
      
        <div className="publishedDiv">Published Items Here</div>
        <div className="mySoldItems">Sold Items Here</div>
        
      </div>
    );
  }


}
//end class

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyItems);