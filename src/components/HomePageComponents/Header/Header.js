import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Volume from "../../../images/Group 24.png";
import Ellipse from '../../../images/Ellipse 3.png';
import Play from '../../../images/Vector (2).png';
import "./header.css";

export default class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header_container">
        <div className="bg_fon">
          <Navbar />
          <div className="header_content">
            <h1>THE LOST CITY</h1>
            <ul className="header_content_list">
              <li>
                <Link className="action_adventure category">
                  Action-Adventure
                </Link>
              </li>
              <li>
                <Link className="comedy category">Comedy</Link>
              </li>
              <li>
                <Link className="action category">Action</Link>
              </li>
            </ul>
            <p className="header_description">
              Alan, who is secretly enamored with Loretta, witnesses her
              kidnapping. He recruits Jack Trainer, a former Navy SEAL turned
              CIA operative, to meet him on the island and coordinate a
              rescueattempt.Jack, with no assistance from Alan.
            </p>

            <div className="header_review">
              <div className="review">
                <i className="fa-regular fa-clock"></i>
                <span>164 min.</span>
              </div>
              <div className="review">
                <img src={Volume} alt=""/>
                <span>Subtitles</span>
              </div>

              <div className="review">
                <img src={Ellipse} alt="" />
                <span>Imdb: 9.1/10</span>
              </div>
            </div>
            <div className="header_btns">
              <button className="header_left_btn">
               <img src={Play} alt="" />
               <span>Watch Now</span> 
              </button>
              <button className="header_right_btn">
                <span className="header_plus_icon">+</span>
                <span>Add List</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
