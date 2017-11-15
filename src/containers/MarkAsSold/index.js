import React, { Component } from 'react';
import { deleteItem } from '../../actions/items';
import { connect } from 'react-redux';

class MarkAsSold extends Component {
  constructor(props){
    super(props)
  }

  handleChangeDelete(event){
    event.preventDefault();
    this.props.deleteItem(this.props.the_item.id);
  }

  render(){
    return(
      <button onClick={this.handleChangeDelete.bind(this)}>Mark as SOLD</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => {
      dispatch(deleteItem(item));
    }
  }
}

const ConnectedMarkAsSold = connect(
  null,
  mapDispatchToProps
)(MarkAsSold)

export default ConnectedMarkAsSold;