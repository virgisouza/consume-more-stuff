/* This is a filter component rendered on the BOARD. */
/* It takes in a part of state.itemlist */

/* It will filter by a single category : if 'vehicles' is selected, board will only show items under that category and not the others. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterCategory = ({ list, cat }) => {

  return (
    <div>
      {
        list.filter(i => {
          if (i.Category) {
            return i.Category.name === cat;
          }
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

export default FilterCategory;