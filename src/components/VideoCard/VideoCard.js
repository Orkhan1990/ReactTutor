import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Play from '../../images/Play.png';
import Discard from '../../images/Vector (3).png';
import './videoCard.css';

export default class VideoCard extends Component {
  state={
    status:false,
    playIcon:'../../images/Play.png'
  }

  render() {
   const playVideo=(id)=>{
    
    //  let videoElement=document.getElementById('video');
    
    }
    return (
      <div className='video_card'>
       <video src={this.props.videoUrl} controls id='video' ></video>
       <Link>{this.props.titleData}</Link>
       <img src={Play} alt="" className='video_play_icon' onClick={playVideo(this.props.id)}/>
       <img src={Discard} alt=""  className='video_discard_icon'/>
      </div>
    )
  }
}
