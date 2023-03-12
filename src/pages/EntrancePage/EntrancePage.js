import React, { Component } from 'react';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import './entrancePage.css'

export default class EntrancePage extends Component {
  render() {
    return (
      <div className='entrance_container'>
        <div className='bg_opocity'>
           <Logo/>
           <div className='entrance_btns'>
           <button className='login_btn'><Link to="" className='link_login'>Login</Link></button>
           <button className='sign_up_btn'><Link to="" className='link_sign_up'>Sign up</Link></button>
           </div>
           </div>
      </div>
    )
  }
}
