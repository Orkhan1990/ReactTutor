import React, { Component } from 'react';
import './comment.css';

export default class Comment extends Component {
  render() {
    const{image,time,name,comment}=this.props.data;
    return (
      <div className='comment_component_container'>
        <img src={image} alt="" />
        <div className='comment_component_content'>
            <div className='comment_component_name_time'>
                <h2>{name}</h2>
                <span>{time}</span>
            </div>
            <p>{comment}</p>
        </div>
      </div>
    )
  }
}
