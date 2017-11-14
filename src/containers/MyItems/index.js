import React, { Component } from 'react';
import { connect } from 'react-redux';

/*ACTIONS*/
import { loadUserItems } from '../../actions/items';

/*CHILD COMPONENTS*/
import NewItemForm from '../NewItem/newItemForm'; 

class MyItems extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let userID = parseInt(this.props.match.params.id, 10)
    this.props.loadUserItems(userID);
  }

  render(){
    console.log('MyItems component has rendered');

    return(
      <div className="myItems">
        <NewItemForm />
        <div className="publishedDiv">
          <h2>Published</h2>
        </div>

        <div className="soldDiv">
          <h2>Sold</h2>
        </div>
      </div>
    );
  }


}
//end class

const mapStateToProps = (state) => {
  return {
    items: state.itemList,
    user: state.user
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