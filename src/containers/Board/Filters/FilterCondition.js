/* This is a filter component rendered on the BOARD. */
/* It takes in a part of the state.itemlist */

/* It will filter by a single condition. If the user selects 'New' from the dropdown, the BOARD component will only show new items. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterCondition = ({ list, cond }) => {
  
  return (
    <div>
      {
        list.filter(i => {
          if (i.Condition) {
            return i.Condition.type === cond;
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

export default FilterCondition;