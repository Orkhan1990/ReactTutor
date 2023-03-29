import React, { Component } from 'react';
import './movieCast.css';

export default class MovieCast extends Component {
  render() {
    const{image,name,subName}=this.props.data;
    return (
        <div className='movie_cast_card'>
            <img src={image} alt="" />
            <div className='movie_cast_name_subname'> 
                <h3>{name}</h3>
                <h5>{subName}</h5>
            </div>
        </div>
    )
  }
}
