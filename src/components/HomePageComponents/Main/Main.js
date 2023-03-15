import React, { Component } from "react";
import Title from "../../Title/Title";
import VideoCard from "../../VideoCard/VideoCard";
import { videoData } from "../../../data";
import "./main.css";
import SliderMovies from "../../SliderMovies/SliderMovies";

export default class Main extends Component {
  render() {
    console.log(videoData);
    return (
      <div className="main_container">
        <div className="main_first_section">
          <Title title="Continue Watching" />
          <div className="main_video_cards">
            {videoData.map(({ id, video, title }, index) => {
              return (
                <VideoCard
                  videoUrl={video}
                  titleData={title}
                  key={id}
                  id={id}
                />
              );
            })}
          </div>
        </div>
        <div className="main_second_section">
         <SliderMovies/>
        </div>
        <div>
          <SliderMovies/>
        </div>
      </div>
    );
  }
}
