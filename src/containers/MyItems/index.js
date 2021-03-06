import React, { Component } from 'react';
import { loadUserItems } from '../../actions/items';
import { connect } from 'react-redux';
import FilterStatus from '../../components/FilterStatus';
import Header from '../Header/Header';
import NewItemForm from '../NewItem/newItemForm';
import UserSettings from '../UserSettings';


class MyItems extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    let userID = parseInt(this.props.match.params.id, 10)
    this.props.loadUserItems(userID);
  }

  componentDidMount(){
    let userID = parseInt(this.props.match.params.id, 10)
    this.props.loadUserItems(userID);
  }

  render(){
    console.log('useritems', this.props)
    return(
      <div className="myItems">
      <Header />
      <div className="myItemsDiv">

        <NewItemForm />
          <div className="publishedSold">
            <div className="publishedDiv">
              <h2>Published</h2>
              <div className="myPublishedItems">
                <FilterStatus
                  list={this.props.items}
                  stat_id={1}
                />
              </div>
            </div>

            <div className="soldDiv">
              <h2>Sold</h2>
              <div className="mySoldItems">
                <FilterStatus
                  list={this.props.items}
                  stat_id={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

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

const ConnectedMyItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyItems);

export default ConnectedMyItems;