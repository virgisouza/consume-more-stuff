// Unauthorized users item view
import React, { Component } from 'react';
import '../containers/App/App.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import AuthUserEditItem from '../containers/AuthUserEditItem';

class Item extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    }
  }

  edit(event){
    event.preventDefault();
    if(this.state.show === false){
      this.setState({
        show:true
      })
    }else{
      this.setState({
        show:false
      })
    }
  }

  componentDidMount(){

  }

  render(){
    console.log(this.props.image, 'IMAGE PROPS')
    return  (


      <div className='Item'>

        <div className='Item-price'>${this.props.price}</div>
        <div className='Item-image'><img src={this.props.image} height='80' width='80' /></div>

        <div className='Item-name'>{this.props.name}</div>

        <div className='Item-category'>category : {this.props.category}</div>
        <div className='Item-condition'>condition : <span>{this.props.condition}</span></div>

        <div className='Item-date'><Moment format="MM/DD">{this.props.updatedAt}</Moment></div>

        {Number(this.props.user_id) === Number(localStorage.getItem('user_id')) ?
        <button onClick={this.edit.bind(this)}>Edit</button>
        :null}

        {this.state.show === true ?
        <div className='Item-label'><AuthUserEditItem id={this.props.id}/></div>
        : null }
      </div>
    );

  }

}

export default Item;

// const Item = ({name, image, body, price, condition, category, updatedAt, id, user_id}) => {

//   return  (
//     <div className='Item'>

//       <div className='Item-price'>${price}</div>
//       <div className='Item-image'><img src={image} height='80' width='80' /></div>

//       <div className='Item-name'>{name}</div>

//       <div className='Item-category'>category : {category}</div>
//       <div className='Item-condition'>condition : <span>{condition}</span></div>

//       <div className='Item-date'><Moment format="MM/DD">{updatedAt}</Moment></div>

//       {/*<div>Description</div>
//       <div className='Item-field'>{body}</div>*/}

//       {Number(user_id) === Number(localStorage.getItem('user_id')) ?
//       <div className='Item-label'><AuthUserEditItem id={id}/></div>
//       :null}

//     </div>
//   );

// }

// export default Item;
