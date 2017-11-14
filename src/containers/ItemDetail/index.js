import React, { Component } from 'react';
import Item from '../../components/item';
import Header from '../Header/Header';
import AuthUserEditItem from '../AuthUserEditItem';
import { loadItem } from '../../actions/items';
import { connect } from 'react-redux';

class ItemDetail extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  componentDidMount(){
    let item_id = parseInt(this.props.match.params.id);
    this.props.loadItem(item_id);
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Header />
        <Item
          name={this.props.item.name}
          image={this.props.item.file}
          body={this.props.item.body}
          price={this.props.item.price}
          condition={this.props.item.Condition.type}
          category={this.props.item.Category.name}
          status={this.props.item.Status.type}
          updatedAt={this.props.item.updatedAt}
          id={this.props.item.id}
          user_id={this.props.item.user_id}
          detailView='yes'
        />
        <AuthUserEditItem submitHandler=/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.singleItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItem: (id) => {
      dispatch(loadItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);

