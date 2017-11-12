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
          //console.log(item.file)
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
          )
        })
      }
    </div>
  )
}

export default FilterMap;