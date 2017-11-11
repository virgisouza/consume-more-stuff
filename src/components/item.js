// Unauthorized users item view
import React from 'react';
import '../containers/App/App.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

const Item = ({name, image, body, price, condition, category, updatedAt, id, show}) => {

  return  (
    <div className='Item'>

      <div className='Item-price'>${price}</div>
      <div className='Item-image'><img src={image} height='80' width='80' /></div>

      <div className='Item-name'>{name}</div>

      <div className='Item-category'>category : {category}</div>
      <div className='Item-condition'>condition : <span>{condition}</span></div>

      <div className='Item-date'><Moment format="MM/DD">{updatedAt}</Moment></div>

      {/*<div>Description</div>
      <div className='Item-field'>{body}</div>*/}

      {show === 'yes' ?
      <div className='Item-label'><Link className='Link' to={`/items/${id}`}>Detail</Link></div>
      :null}

    </div>
  );

}

export default Item;

// Create an attractive Detail view that fits with the rest of the site that presents the following information to the user:

// - description
// - image
// - price, if listed
// - condition
// - category
// - manufacturer
// - model
// - dimensions
// - notes
// - when the item was posted
// - when the item was last updated


// Unauthorized users will only be able to see "published" items.