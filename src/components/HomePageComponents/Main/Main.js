import React, { Component } from "react";
import Title from "../../Title/Title";
import VideoCard from "../../VideoCard/VideoCard";
import SliderMovies from "../../SliderMovies/SliderMovies";
import { getPopularMovieData,getActionMoviesData,getComedyMoviesData,getVideoData } from "../../../config/MainConfig";
import "./main.css";

export default class Main extends Component {
  state={
    videoArr:[],
    popularMovieArr:[],
    comedyMovieArr:[],
    actionMovieArr:[]
  }
  componentDidMount(){
   getVideoData()
   .then(movie=>{
    this.setState({
      videoArr:movie
    })
   });

   getPopularMovieData()
   .then(popularMovie=>{
     this.setState({
      popularMovieArr:popularMovie
     })
   });

   getComedyMoviesData()
   .then(comedyData=>{
    this.setState({
       comedyMovieArr:comedyData
    })
   });

   getActionMoviesData()
   .then(actionData=>{
    this.setState({
      actionMovieArr:actionData
    })
   })
  }
  render() {
    const{videoArr,popularMovieArr,comedyMovieArr,actionMovieArr}=this.state;
    // console.log(this.state.actionMovieArr);
    return (
      <div className="main_container">
        <div className="main_first_section">
          <Title title="Continue Watching" />
          <div className="main_video_cards">
            {videoArr.map((data,i) => {
              return (
                <VideoCard
                 key={i}
                  data={data}
                />
              );
            })}
          </div>
        </div>
        <div className="main_second_section">
         <SliderMovies titleData="Popular Movies 2022" movieData={popularMovieArr}/>
        </div>
        <div>
          <SliderMovies titleData="Best Comedies"  movieData={comedyMovieArr}/>
        </div>
        <div className="main_fourth_section">
        <SliderMovies titleData="Action & Adventure"  movieData={actionMovieArr}/>
        </div>
      </div>
    );
  }
}
