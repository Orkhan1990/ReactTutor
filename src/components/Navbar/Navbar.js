import React, { Component } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
 
  render() {
    function logOutFromPage(e){
         e.preventDefault();
         window.location.href='/';
         localStorage.removeItem('logedUser');
    }
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
            <div className="navbar_loged_user">
              {JSON.parse(localStorage.getItem("logedUser")).name}
            <Link className="link_to_icon" ref={this.takeIconElement} onClick={logOutFromPage}><i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
