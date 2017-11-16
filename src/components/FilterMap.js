import React from 'react';
import { Link } from 'react-router-dom';

import Item from './item';
import MarkAsSold from '../containers/MarkAsSold';

const FilterMap = ({ list, cat }) => {

  console.log('FilterMap render');

  return (
    <div className="Filter">
      {
        list.filter(i => {
            if (i.Category) {
              return i.Category.name === cat;
            }
          }) 
          .map(item => {
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

export default FilterMap;

/*<Link to={`/categories/${cat_id}/items`}><div className="Filter-title">{title}</div></Link>*/