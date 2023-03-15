import React, { Component } from 'react';
import './movieCard.css';

export default class MovieCard extends Component {
  render() {
    return (
      <div className='movieCard'>
        <img src={this.props.img} alt=""/>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}
