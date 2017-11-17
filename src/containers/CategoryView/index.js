import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import FilterCategory from '../../components/FilterCategory';
import { loadCategoryItems } from '../../actions/categories';

import './CategoryView.css';

class CategoryView extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.loadCategoryItems(this.props.match.params.id);
  }

  render() {
    
    return(
      <div className="Category-view">
        <Header/>
        {Number(this.props.match.params.id) === 1 ?
          <div className="Vehicles">
            <div className="Vehicles-label">View by Category : Vehicles</div>
            <FilterCategory list={this.props.items} cat_id={this.props.match.params.id}/>
          </div>
        : null}
        {Number(this.props.match.params.id) === 2 ?
          <div className="Appliances">
            <div className="Appliances-label">View by Category : Appliances</div>
            <FilterCategory list={this.props.items} cat_id={this.props.match.params.id}/>
          </div>
        : null}
        {Number(this.props.match.params.id) === 3 ?
          <div className="Computers">
            <div className="Computers-label">Computers</div>
            <FilterCategory list={this.props.items} cat_id={this.props.match.params.id}/>
          </div>
        : null}
        {Number(this.props.match.params.id) === 4 ?
          <div className="Furniture">
            <div className="Furniture-label">View by Category : Furniture</div>
            <FilterCategory list={this.props.items} cat_id={this.props.match.params.id}/>
          </div>
        : null}
        <Link to='/'>Back to Home</Link>
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