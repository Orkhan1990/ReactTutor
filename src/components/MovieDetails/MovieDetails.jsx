import React, { Component } from "react";
import KimiMovieImage from "../../images/kimi-movie-deatils.png";
import PlayIcon from "../../images/Vector (2).png";
import RefreshIcon from "../../images/refresh.png";
import DownloadIcon from "../../images/download.png";
import ForwardIcon from "../../images/forward.png";
import MovieCast from "../MovieCast/MovieCast";
import "./movieDetails.css";
import {
  getMovieCastData,
  getVideoDetails,
  getVideosDataForSlider,
  getCommentData,
} from "../../config/MainConfig";
import VideoDetails from "../VideoDetails/VideoDetails";
import SliderMovies from "../SliderMovies/SliderMovies";
import Comment from "../Comment/Comment";

export default class MovieDetails extends Component {
  state = {
    movieCastData: [],
    videoDetailsData: [],
    videoArrayForSlider: [],
    commentArr: [],
  };
  componentDidMount() {
    getMovieCastData().then((data) => {
      this.setState({
        movieCastData: data,
      });
    });

    getVideoDetails().then((data) => {
      this.setState({
        videoDetailsData: data,
      });
    });

    getVideosDataForSlider().then((data) => {
      this.setState({
        videoArrayForSlider: data,
      });
    });
    getCommentData().then((data) => {
      this.setState({
        commentArr: data,
      });
    });
  }
  render() {
    const { movieCastData, videoDetailsData, videoArrayForSlider, commentArr } =
      this.state;
    return (
      <div>
        <div className="movie_details_component_container">
          <h1>Kimi (HBO Max)</h1>
          <div className="movie_details_component_content">
            <div className="movie_details_component_left_side">
              <img
                src={KimiMovieImage}
                alt=""
                className="movie_details_component_kimi_image"
              />
              <div className="movie_details_component_review">
                <div className="movie_details_component_review_detail">
                  <span>Crime,Drama</span>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#8B8B8B" />
                  </svg>
                  <span>1h 29 min</span>
                </div>
                <div className="movie_details_component_review_detail">
                  <span>Movie</span>
                  <div className="movie_details_component_hd">
                    <span>H</span>
                    <span>D</span>
                  </div>
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3" fill="#8B8B8B" />
                  </svg>
                  <span>Imdb: 6.3/10</span>
                </div>
              </div>
            </div>
            <div className="movie_details_component_right_side">
              <ul className="movie_details_component_right_side_list">
                <li>SUBTITLE</li>
                <li>DUBLAJ</li>
                <li>CINEMA MOOD</li>
              </ul>
              <p className="movie_details_component_right_side_paragraph">
                Angela suffers from a fear of open spaces, which is exacerbated
                by the general lockdown, so she works from home. Her job is to
                process the erroneous responses of Kimi's trendy voice
                assistant.She reports the incident to her superior, who refers
                her to Natalie Chowdhury, an executive at Amygdala. Angela
                attempts to reach Chowdhury over the phone, but is eventually
                convinced to come to her office in person, with the promise that
                the FBI will be informed about the case. At the office, Angela
                is disturbed when Chowdhury seems reticent to contact the
                authorities and makes reference to her prior mental health
                leave...
              </p>
              <div className="movie_details_component_right_side_buttons">
                <button className="movie_details_component_right_side_play_button">
                  <img src={PlayIcon} alt="" />
                  <span>Play</span>
                </button>

                <div className="movie_details_component_right_side_icon_list">
                  <div className="movie_details_component_right_side_make_circle">
                    <img src={RefreshIcon} alt="" />
                  </div>
                  <div className="movie_details_component_right_side_make_circle">
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                  <div className="movie_details_component_right_side_make_circle">
                    <img src={DownloadIcon} alt="" />
                  </div>
                  <div className="movie_details_component_right_side_make_circle">
                    <img src={ForwardIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="movie_details_component_about_video_side">
            <div className="movie_details_component_cast_side_container">
              <h2>CAST</h2>
              <div className="movie_details_component_cast_side">
                {movieCastData.map((data, index) => {
                  return <MovieCast data={data} key={index} />;
                })}
              </div>
              <i className="fa-solid fa-angles-down"></i>
            </div>
            <div className="movie_details_component_category_and_videos">
              <h2>VIDEOS:TRAILERS,TEASERS,FEATURETTES</h2>
              <div className="movie_details_component_video_detail_cards">
                {videoDetailsData.map((data, index) => {
                  return <VideoDetails data={data} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <SliderMovies titleData="My List" movieData={videoArrayForSlider} />
        <div className="movie_details_comment_section">
          <h2 className="movie_details_comment_header">Comments (30)</h2>
          <div className="movie_details_comment_cards">
            {commentArr.map((data, index) => {
              return <Comment data={data} key={index} />;
            })}
            <div className="movie_details_spoiler_alert">spoiler alert</div>
          </div>
          <div className="movie_details_comment_read_more">
            <span>Read more</span>
            <i className="fa-solid fa-angles-down"></i>
          </div>
        </div>
      </div>
    );
  }
}
