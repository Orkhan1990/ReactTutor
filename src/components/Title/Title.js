import React, { Component } from 'react';
import Line from '../../images/Rectangle 22.png';
import { Link } from 'react-router-dom';
import './title.css'

export default class Title extends Component {
  render() {
    return (
      <div className='main_title'>
        <div className='title_side'>
        <h2>{this.props.title}</h2>
         <img src={Line} alt="" />
        </div>
        <div className='view_all'>
            <Link>View all</Link>
        </div>
        
      </div>
    )
  }
}
