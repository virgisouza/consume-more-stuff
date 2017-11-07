import React from 'react';
import '../containers/App/App.css';

const Item = ({ description, price, make, model, condition, category, dimensions, datePublished, lastUpdated, details }) => {

  return (
    <div className="Item">
      <div>Description : { description }</div>
      <div>Price : { price }</div>
    </div>
  );
  
}


export default Item;