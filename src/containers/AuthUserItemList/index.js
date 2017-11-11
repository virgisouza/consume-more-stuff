import React, { Component } from 'react';
import Item from '../../components/Item';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
//load all items from specific user
//divide those items by status : 2 rows {published and sold}

class AuthUserItemList extends Components {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {

    return (
      <div className='AuthUserItemList'>
        {
          this.props.items.filter(item => {
      //kevin help here
            return item.Status.type === this.props.columnStatus
          })
          .map(props => {

            return (
              <Item
                image={props.file}
                body={props.body}
                price={props.price}
                condition={props.condition}
                category={props.category}
                createdAt={props.createdAt}
              />
            );
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.AuthUserItemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedAuthUserItemList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AuthUserItemList)

export default ConnectedAuthUserItemList;