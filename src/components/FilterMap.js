import React from 'react';
import Item from './item';

const FilterMap = ({ list, cat_id, number, title }) => {
  console.log('FilterMap component rendered');
  return (
    <div className="Filter">
      <div className="Filter-title">{title}</div>
      {
        list.filter((listItem) => {
          return listItem.category_id === Number(cat_id)
          }).map((item) => {
          return (
            <Item
              name={item.name}
              image={item.image}
              body={item.body}
              price={item.price}
              condition={item.Condition.type}
              category={item.Category.name}
              updatedAt={item.updatedAt}
              key={item.id}
              id={item.id}
              show='yes'
            />
          )
        })
      }
    </div>
  )
}

export default FilterMap;