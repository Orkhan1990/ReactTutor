import React, { Component } from 'react';
import {imgUrl} from '../../mainApi'
import './movieCard.css';

export default class MovieCard extends Component {

  render() {
    const{data}=this.props;
    return (
      <div className='movieCard'>
        <img src={imgUrl+data.poster_path} alt=""/>
        <h2>{data.title}</h2>
      </div>
    )
  }
}
