import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Play from '../../images/Play.png';
import Discard from '../../images/Vector (3).png';
import './videoCard.css';

export default class VideoCard extends Component {
 state={
  status:false,
   getPlayIcon:React.createRef(),
   getPauseIcon:React.createRef(),
   video:React.createRef()
 }
 componentDidMount(){
       let playIcon=this.state.getPlayIcon.current;
       let pauseIcon=this.state.getPauseIcon.current;
       let getVideoElement=this.state.video.current;
       playIcon.addEventListener('click',()=>{
            
                playIcon.classList.add('hideIcon');
                pauseIcon.classList.remove('hideIcon');
                getVideoElement.play();
       });
       pauseIcon.addEventListener('click',()=>{
        
        playIcon.classList.remove('hideIcon');
        pauseIcon.classList.add('hideIcon');
        getVideoElement.pause();
       })
 }
  render() {
    const{data}=this.props
    return (
      <div className='video_card'>
       <video src={data.video}  id='video' ref={this.state.video} ></video>
       <Link>{data.title}</Link>
       <img src={Play} alt="" className='video_play_icon' ref={this.state.getPlayIcon}/>
       <i className="fa-regular fa-circle-pause hideIcon" ref={this.state.getPauseIcon}></i>
       <img src={Discard} alt=""  className='video_discard_icon'/>
      </div>
    )
  }
}
