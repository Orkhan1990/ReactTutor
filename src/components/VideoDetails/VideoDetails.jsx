import React, { Component } from 'react';
import PlayIcon from '../../images/Play.png';
import './videoDetails.css';

export default class VideoDetails extends Component {
  render() {
    const{video}=this.props.data
    return (
      <div className='video_details_component_container'>
        <video src={video} className='video_details_component_video_itself'>
        </video>
        <img src={PlayIcon} alt=""  className='video_details_component_play_icon'/>
       </div>
    )
  }
}
