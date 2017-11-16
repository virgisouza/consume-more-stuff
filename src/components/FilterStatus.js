import React from 'react';
import Item from './item';
import MarkAsSold from '../containers/MarkAsSold';

const FilterStatus = ({ list, stat_id }) => {
  return (
    <div className='status-filter'>
      {
        list.filter((listItem) => {
          return listItem.status_id === Number(stat_id)
        }).map((item) => {
          return (
            <div className="userItem">
            <Item
              name={item.name}
              image={item.file}
              body={item.body}
              price={item.price}
              condition={(item.Condition && item.Condition.type) ? item.Condition.type : ''}
              category={(item.Category && item.Category.name) ? item.Category.name : ''}
              updatedAt={item.updatedAt}
              key={item.id}
              id={item.id}
              user_id={item.user_id}
            />
            {Number(localStorage.getItem('user_id')) === item.user_id && item.status_id === 1 ?
              <MarkAsSold the_item={item} />
            : null}
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterStatus;

//{'/' + item.file}