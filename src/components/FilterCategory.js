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
            <div>
              <Item 
                name={item.name}
                image={item.file}
                body={item.body}
                price={item.price}
                condition={item.Condition.type}
                category={item.Category.name}
                updatedAt={item.updatedAt}
                key={item.id}
                id={item.id}
                user_id={item.user_id}
              />
              {Number(localStorage.getItem('user_id')) === item.user_id ?
                  <MarkAsSold the_item={item} />
              : null}
            </div>
          );
        })
      }

    </div>
  );

}

export default FilterCategory;