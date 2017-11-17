import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';
import MarkAsSold from '../containers/MarkAsSold';

const FilterCategory = ({ list, cat_id }) => {
  
  return (
    <div className="FilterCategory">
      
      {
        list.filter((listItem) => {
          return listItem.category_id === Number(cat_id)
          }).map((item) => {
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
          )
        })
      }
    </div>
  )
}

export default FilterCategory;