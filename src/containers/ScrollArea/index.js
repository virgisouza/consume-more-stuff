import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class ScrollArea extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
      <div>Some long content.</div>
      </ScrollArea>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.itemList
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUserItems: (id) => {
//       dispatch(loadUserItems(id));
//     }
//   }
// }

const ConnectedScrollArea = connect(
  null,
  null
)(ScrollArea);

export default ConnectedScrollArea;