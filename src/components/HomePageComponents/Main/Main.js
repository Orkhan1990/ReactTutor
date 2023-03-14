import React, { Component } from 'react';
import Title from '../../Title/Title';
import VideoCard from '../../VideoCard/VideoCard';
import Jumanji from '../../../videos/Jumanji_ I was a little boy.mp4';
import MarryMe from '../../../videos/Will You Marry Me Again_ - Marry Me _ RomComs.mp4';
import Kimi from '../../../videos/KIMI _ Official Trailer _ HBO Max.mp4';
import {videoData} from '../../../data';
import './main.css';

export default class Main extends Component {
    
  render() {
    console.log(videoData);
    return (
      <div className='main_container'>
        <div className='main_first_title'>
        <Title title="Continue Watching"/>
        <div className='main_video_cards'>

            {
                videoData.map(({id,video,title},index)=>{
                    return(
                     <VideoCard videoUrl={video} titleData={title} key={id} id={id}/>
                    )
                    
                })
            }
        
        {/* <VideoCard video={MarryMe} title="Marry Me"/>
        <VideoCard video={Kimi} title="Kimi (HBO Max)"/> */}

        </div>
        
        </div>
       
      </div>
    )
  }
}
