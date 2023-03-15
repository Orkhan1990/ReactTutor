import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import { Link } from 'react-router-dom';
import Facebook from '../../../images/facebook.png';
import Instagram from '../../../images/instagram.png';
import Tweeter from '../../../images/twitter.png';
import Youtube from '../../../images/youtube.png';
import GooglePlay from '../../../images/googlePlay.png';
import AppStore from '../../../images/appStore.png';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer_container'>
       <div className='footer_nav'>
       <Logo logoStyle="footer_nav_logo"/>
       <ul className='footer_links'>
        <li><Link>Tv Shows</Link></li>
        <li><Link>Movies</Link></li>
        <li><Link>Upcoming</Link></li>
        <li><Link>Trailers</Link></li>
        <li><Link>My list</Link></li>
       </ul>
       <div className='footer_icons'>
        <Link><img src={Youtube} alt="" /></Link>
        <Link><img src={Instagram} alt="" /></Link>
        <Link><img src={Facebook} alt="" /></Link>
        <Link><img src={Tweeter} alt="" /></Link>
       </div>
        </div> 
        <div className='footer_play_market'>
            <Link><img src={GooglePlay} alt="" /></Link>
            <Link><img src={AppStore} alt="" /></Link>
        </div>
      </div>
    )
  }
}
