import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import FilterMap from '../../components/FilterMap';
import { loadItems } from '../../actions/items';
import Item from '../../components/item';
import ScrollArea from 'react-scrollbar';

class AllItems extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadItems();
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <Header />

        <div className="Filter-title">All Items</div>

          {
            this.props.items.map((item) => {
              return(

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
              )
            })
          }


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
    loadItems: () => {
      dispatch(loadItems());
    }
  }
}

const ConnectedAllItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllItems);

export default ConnectedAllItems;