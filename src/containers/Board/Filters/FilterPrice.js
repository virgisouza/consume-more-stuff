/* This is a filter component rendered on the BOARD. */
/* It takes in a part of the state.itemlist */

/* It will filter by price, either low to high or high to low. It will use sort() depending on 
the order parameter passed in. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

const FilterPrice = ({ list, sort }) => { 
  console.log('FilterPrice render');
  console.log(sort);


  return (
    <div>
      { 
        sort == 1 ?  //parse could err if NaN .. do check that items are numbers ..
        list.sort(function(a, b) { //do a non number comparison
          return parseInt(a.price) - parseInt(b.price);
        })
        .map(item => {
          return (
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
          );
        })

        :

        list.sort(function(a, b) {
          return parseInt(b.price) - parseInt(a.price);
        })
        .map(item => {
          return (
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
          );
        })
      }
    </div>
  );


}//end component

export default FilterPrice;