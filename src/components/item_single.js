// Item component for AuthUserEdit, and single item view
import React from 'react';
import '../components/components.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

const SingleItem = ({name, image, body, price, condition, category, updatedAt}) => {

  return (
    <div className="SingleItem">
      <div className='SingleItem-price'>${price}</div>
      <div className='SingleItem-image'><img src='/favicon.ico' height='80' width='80' /></div>

      <div className='SingleItem-name'>{name}</div>

      <div className='SingleItem-category'>category : {category}</div>
      <div className='SingleItem-condition'>condition : <span>{condition}</span></div>
      
      <div className='SingleItem-date'><Moment format="MM/DD">{updatedAt}</Moment></div>
      <div className='SingleItem-body'><div></div>{body}</div>
    </div>
  );


}

export default SingleItem;