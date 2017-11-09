// Unauthorized users item view
import React from 'react';
import '../containers/App/App.css';

const Item = ({image, body, price, condition, category, updatedAt}) => {

  return  (
    <div className='Item'>
      <span>Image</span><br></br>
      <span>{body}</span><br></br>
      <span>{price}</span><br></br>
      <span>Condition : {condition}</span><br></br>
      <span>Category : {category}</span><br></br>
      <span>Posted : {updatedAt}</span><br></br>
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