import React from 'react';
import Item from './item';

const FilterStatus = ({ list, stat_id, cat_id, title }) => {
  return (
    <div className='status-filter'>
      <h3>{title}</h3>
      {
        list.filter((listItem) => {
          return listItem.status_id === Number(stat_id)
        }).filter((filterListItem) => {
          return filterListItem.category_id === Number(cat_id)
        }).map((item) => {
          return (
            <Item
              name={item.name}
              image={item.image}
              body={item.body}
              price={item.price}
              condition={(item.Condition && item.Condition.type) ? item.Condition.type : ''}
              category={(item.Category && item.Category.name) ? item.Category.name : ''}
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

export default FilterStatus;