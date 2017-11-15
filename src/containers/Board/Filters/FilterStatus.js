/* This is a filter component rendered on the BOARD. */
/* It takes in a part of the state.itemlist */

/* It will toggle showing SOLD items, or not. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterStatus = ({ list, stat }) => {
  
  return (
    <div>
      {
        list.filter(i => {
          if (i.Status) {
            return i.Status.type === stat;
          }
        }).map(item => {
          return (
            <Item />
          );
        })
      }
    </div>
  );
}

export default FilterStatus;