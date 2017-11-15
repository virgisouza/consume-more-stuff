/* This is a filter component rendered on the BOARD. */
/* It takes in a part of the state.itemlist */

/* It will filter by price, either low to high or high to low. It will use sort() depending on 
the order parameter passed in. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterPrice = ({ list, order }) => { 

  return (
    <div>
      {
        list.sort(function(a, b) { // put 2 functions
          return parseInt(a.price) - parseInt(b.price);
        })
        .map(item => {
          return (
            <Item />
          );
        })
      }
    </div>
  );
}

export default FilterPrice;