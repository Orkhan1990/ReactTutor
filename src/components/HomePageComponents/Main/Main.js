import React, { Component } from "react";
import Title from "../../Title/Title";
import VideoCard from "../../VideoCard/VideoCard";
import { videoData } from "../../../data";
import SliderMovies from "../../SliderMovies/SliderMovies";
import {popularMovie} from '../../../data';
import {bestComedies} from '../../../data';
import {actionAndAdventure} from '../../../data';
import "./main.css";

export default class Main extends Component {
  render() {
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
         <SliderMovies titleData="Popular Movies 2022" popularMovieData={popularMovie}/>
        </div>
        <div>
          <SliderMovies titleData="Best Comedies"  popularMovieData={bestComedies}/>
        </div>
        <div className="main_fourth_section">
        <SliderMovies titleData="Action & Adventure"  popularMovieData={actionAndAdventure}/>
        </div>
      </div>
    );
  }
}
