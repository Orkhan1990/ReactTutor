import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Play from '../../images/Play.png';
import Discard from '../../images/Vector (3).png';
import './videoCard.css';

export default class VideoCard extends Component {

  render() {
    const{data}=this.props
    return (
      <div className='video_card'>
       <video src={data.video} controls id='video' ></video>
       <Link>{data.title}</Link>
       <img src={Play} alt="" className='video_play_icon' />
       <img src={Discard} alt=""  className='video_discard_icon'/>
      </div>
    )
  }
}
