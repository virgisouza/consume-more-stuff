import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import FilterMap from '../../components/FilterMap';
import { loadCategoryItems } from '../../actions/categories';

class CategoryView extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadCategoryItems(this.props.match.params.id);
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <Header/>
        {Number(this.props.match.params.id) === 1 ?
          <div className="Filter-title">Vehicles</div>
        : null}
        {Number(this.props.match.params.id) === 2 ?
          <div className="Filter-title">Appliances</div>
        : null}
        {Number(this.props.match.params.id) === 3 ?
          <div className="Filter-title">Computers</div>
        : null}
        {Number(this.props.match.params.id) === 4 ?
          <div className="Filter-title">Furniture</div>
        : null}
        <FilterMap
          list={this.props.items}
          cat_id={this.props.match.params.id}
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
    loadCategoryItems: (category_id) => {
      dispatch(loadCategoryItems(category_id));
    }
  }
}

const ConnectedCategoryView = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryView);

export default ConnectedCategoryView;