// Unauthorized users item view
import React from 'react';
import '../containers/App/App.css';
import { Link } from 'react-router-dom';

const Item = ({name, image, body, price, condition, category, updatedAt, id, show}) => {
  return  (
    <div className='Item'>
      <div className='Item-label'>Name</div>
      <div className='Item-field'>{name}</div>
      <div className='Item-label'>Image</div>
      <div className='Item-field'>{image}</div>
      <div className='Item-label'>Description</div>
      <div className='Item-field'>{body}</div>
      <div className='Item-label'>Price</div>
      <div className='Item-field'>{price}</div>
      <div className='Item-label'>Condition</div>
      <div className='Item-field'>{condition}</div>
      <div className='Item-label'>Category</div>
      <div className='Item-field'>{category}</div>
      <div className='Item-label'>Posted</div>
      <div className='Item-field'>{updatedAt}</div>
      {show === 'yes' ?
      <Link to={`/items/${id}`}>Detail</Link>
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