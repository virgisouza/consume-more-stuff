import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

import './styles/Item.css';

const Item = ({ name, image, body, price, condition, category, postedDate, id, show }) => {

  return  (
    <div className='Item'>
      <div className='Item-price'>${price}</div>
      <div className='Item-image'><img src={image} alt='' height='80' width='80' /></div>
      <div className='Item-name'>{name}</div>
      <div className='Item-category'>category : {category}</div>
      <div className='Item-condition'>condition : <span>{condition}</span></div>
      <div className='Item-date'><Moment format="MM/DD">{postedDate}</Moment></div>
      <div className='Item-label'><Link className='Link' to={`/items/${id}`}>Detail</Link></div>
    </div>
  );

}

export default Item;