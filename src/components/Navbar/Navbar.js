import React, { Component } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <Logo logoStyle="nav_logo"/>
        <ul className="navbar_list">
          <li>
            <Link className="navbar_link">Tv Shows</Link>
          </li>
          <li>
            <Link className="navbar_link">Movies</Link>
          </li>
          <li>
            <Link className="navbar_link">Upcoming</Link>
          </li>
          <li>
            <Link className="navbar_link">Trailers</Link>
          </li>
          <li>
            <Link className="navbar_link">My list</Link>
          </li>
        </ul>
        <div className="navbar_user_notf_icons">
            <div className="navbar_search">
            <i className="fa-solid fa-magnifying-glass"></i>   
            <input type="text" placeholder="Search For Movies..." />         
            </div>

            <div className="navbar_icons">
            <Link className="link_to_icon"><i className="fa-regular fa-bell"></i></Link>
            <Link className="link_to_icon"><i className="fa-regular fa-user"></i></Link>
            </div>
        </div>
      </div>
    );
  }
}
