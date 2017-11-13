// Unauthorized users item view
import React from 'react';
import '../containers/App/App.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';


const Item = ({name, image, body, price, condition, category, status, updatedAt, id, user_id, detailView}) => {

  return  (
    <div className='Item'>
      {price ?
      <div className='Item-price'>${price}</div>
      : null }

      <div className='Item-image'><img src={image} height='80' width='80' /></div>

      {name ?
      <div className='Item-name'>{name}</div>
      : null }

      {detailView === 'yes' ?
      <div className='Item-body'>{body}</div>
      : null}

      {detailView === 'yes' ?
      <div className='Item-status'>{status}</div>
      : null}

      {detailView === 'yes' ?
      <div className='Item-category'>category : {category}</div>
      : null }

      <div className='Item-condition'>condition : <span>{condition}</span></div>

      <div className='Item-date'><Moment format="MM/DD">{updatedAt}</Moment></div>

      {detailView !== 'yes' ?
      <Link to={`/items/${id}`}>Detail</Link>
      : null}

      {detailView === 'yes' ?
      <Link to={'/'}>Back to All Items</Link>
      : null}

    </div>
  );

}

export default Item;
