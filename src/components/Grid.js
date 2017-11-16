import React from 'react';

import './components.css';

import FilterPriceAsc from '../containers/Board/Filters/FilterPriceAsc';
/*import FilterPriceDesc from '../containers/Board/Filters/FilterPriceDesc';
import FilterConditionAsc from '../containers/Board/Filters/FilterConditionAsc';
import FilterConditioDesc from '../containers/Board/Filters/FilterConditionDesc';
import FilterCategory from '../containers/Board/Filters/FilterCategory';*/

const Grid = ({ list, sort }) => {
  console.log('Grid render');
  console.log(list);
  console.log(sort);
  return (
    <FilterPriceAsc list={list} sort={1} />
  );
  
}//end component

export default Grid;