// Unauthorized users item view
import React from 'react';
import '../containers/App/App.css';
import { Link } from 'react-router-dom';

const Item = ({name, image, body, price, condition, category, updatedAt, id, show}) => {
  return  (
    <div className='Item'>
      <div>Name: {name}</div>
      <div>Image : {image}</div>
      <div>Description : {body}</div>
      <div>Price : {price}</div>
      <div>Condition : {condition}</div>
      <div>Category : {category}</div>
      <div>Posted: {updatedAt}</div>
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