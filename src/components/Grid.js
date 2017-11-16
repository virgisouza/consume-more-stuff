import React from 'react';

import './components.css';

import FilterPriceAsc from '../containers/Board/Filters/FilterPriceAsc';
/*import FilterPriceDesc from '../containers/Board/Filters/FilterPriceDesc';
import FilterCategory from '../containers/Board/Filters/FilterCategory';*/

const Grid = ({ list, date, price, category, condition }) => {
  console.log('Grid render');
  console.log(list);
  console.log(date, price, category, condition);

  return (
    <FilterPriceAsc list={list} />
  );
  
}//end component

export default Grid;