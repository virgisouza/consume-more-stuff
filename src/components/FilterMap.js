import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';

const FilterMap = ({ list, cat_id, number, title }) => {
  console.log('FilterMap component rendered');
  return (
    <div className="Filter">
      <Link to={`/categories/${cat_id}/items`}><div className="Filter-title">{title}</div></Link>
      {
        list.filter((listItem) => {
          return listItem.category_id === Number(cat_id)
          }).map((item) => {
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