import React, { Component } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./header.css";

export default class Header extends Component {
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

            <div>
                <div>
                <i class="fa-regular fa-clock"></i>  
                <span>164 min.</span>
                </div>
                <div>
                <i class="fa-regular fa-volume"></i>
                <span>Subtitles</span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
