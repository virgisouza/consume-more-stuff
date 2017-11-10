import React, { Component } from 'react';
import '../containers/App/App.css';

import { connect } from 'react-redux';
import { loadCategories } from '../actions/categories';

class SelectTest extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCategories();
    console.log(this.props);
  }

  render() {
    return (
      <div className="Select-test">
        <h1>Drop Down</h1>
      </div>
    );
  }

}
//end class

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => {
      dispatch(loadCategories());
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SelectTest);