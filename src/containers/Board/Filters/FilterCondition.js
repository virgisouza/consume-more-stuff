/* This is a filter component rendered on the BOARD. */
/* It takes in a part of the state.itemlist */

/* It will filter by a single category : if 'vehicles' is selected, board will only show items under that category and not the others. */

/* Potential problems with the fact that the list parameter looks this way:

[ {..}, {..}, {.. category : {id : __, name : __} ] */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterCondition = ({ list, condition }) => {
  
  return (
    <div>
      {
        list.filter(i => {
          return i.category.name === category
        }).map(item => {
          return (
            <Item
              name={item.name}
              image={'/' + item.file}
              body={item.body}
              price={item.price}
              condition={(item.Condition && item.Condition.type) ? item.Condition.type : ''}
              category={(item.Category && item.Category.name) ? item.Category.name : ''}
              updatedAt={item.updatedAt}
              key={item.id}
              id={item.id}
              user_id={item.user_id}
            />
          );
        })
      }
    </div>
  );
}

export default FilterCondition;