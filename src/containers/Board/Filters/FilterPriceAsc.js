/* This is fed into Grid component, sorts items' price by lowest to highest. */

import React from 'react';
import Item from '../../../components/item';
import { Link } from 'react-router-dom';

import '../Board.css';

const FilterPriceAsc = ({ list }) => { 
  console.log('FilterPriceAsc render');

  return (

    <div className="Grid">
      { 
        //parse could err if NaN .. do check that items are numbers .. or do non# comparison
        list.sort(function(a, b) {
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

      }
    </div>

  );//end return

}//end component

export default FilterPriceAsc;