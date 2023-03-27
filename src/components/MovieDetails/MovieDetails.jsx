import React, { Component } from "react";
import KimiMovieImage from "../../images/kimi-movie-deatils.png";
import PlayIcon from '../../images/Vector (2).png';
import RefreshIcon from '../../images/refresh.png';
import DownloadIcon from '../../images/download.png';
import ForwardIcon from '../../images/forward.png';
import "./movieDetails.css";

export default class MovieDetails extends Component {
  render() {
    return (
      <div className="movie_details_component_container">
        <h1>Kimi (HBO Max)</h1>
        <div className="movie_details_component_content">
          <div className="movie_details_component_left_side">
            <img src={KimiMovieImage} alt="" className="movie_details_component_kimi_image" />
            <div  className="movie_details_component_review">
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
              Angela suffers from a fear of open spaces, which is exacerbated by
              the general lockdown, so she works from home. Her job is to
              process the erroneous responses of Kimi's trendy voice
              assistant.She reports the incident to her superior, who refers her
              to Natalie Chowdhury, an executive at Amygdala. Angela attempts to
              reach Chowdhury over the phone, but is eventually convinced to
              come to her office in person, with the promise that the FBI will
              be informed about the case. At the office, Angela is disturbed
              when Chowdhury seems reticent to contact the authorities and makes
              reference to her prior mental health leave...
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
      </div>
    );
  }
}
