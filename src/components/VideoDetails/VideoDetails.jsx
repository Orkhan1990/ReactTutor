import React, { Component } from 'react';
import PlayIcon from '../../images/Play.png';
import './videoDetails.css';

export default class VideoDetails extends Component {
  state={
    playIconButton:React.createRef(),
    pauseIconButton:React.createRef(),
    videoPlay:React.createRef()
  }

  componentDidMount(){
    let getPlayIconButton=this.state.playIconButton.current;
    let getPauseIconButton=this.state.pauseIconButton.current;
    let getVideoElement=this.state.videoPlay.current;
    getPlayIconButton.addEventListener('click',()=>{
         getPauseIconButton.classList.remove('hide_video');
         getPlayIconButton.classList.add('hide_video');
         getVideoElement.play(); 
    })
    getPauseIconButton.addEventListener('click',()=>{
      getPlayIconButton.classList.remove('hide_video');
      getPauseIconButton.classList.add('hide_video');
      getVideoElement.pause();
    });
    function pauseVideo(){
       getPlayIconButton.classList.remove('hide_video');
        getPauseIconButton.classList.add('hide_video');
        getVideoElement.pause();
    }
    setInterval(() => {
      pauseVideo()
       
    }, 146000);
  }
  render() {
    const{video}=this.props.data;
    const{playIconButton,pauseIconButton,videoPlay}=this.state;
    return (
      <div className='video_details_component_container'>
        <video src={video} className='video_details_component_video_itself' ref={videoPlay}>
        </video>
        <img src={PlayIcon} alt=""  className='video_details_component_play_icon' ref={playIconButton}/>
        <i className="fa-regular fa-circle-pause video_details_component_play_icon hide_video" ref={pauseIconButton}></i>
       </div>
    )
  }
}
