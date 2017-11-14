import React from 'react';
import Item from './item';

const FilterStatus = ({ list, stat_id }) => {
  return (
    <div className='status-filter'>
      {
        list.filter((listItem) => {
          return listItem.status_id === Number(stat_id)
        }).map((item) => {
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
          )
        })
      }
    </div>
  )
}

export default FilterStatus;

//{'/' + item.file}