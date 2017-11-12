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
          let image = ''
          if(item.file[0] === 'h'){
            image = item.file
          }else{
            image = '/' + item.file.split('/').splice(7).join('/');
          }
          return (
            <Item
              name={item.name}
              image={image}
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