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
           <Link to="/login" ><button className='login_btn'>Login</button></Link>
           <Link to="/signup"><button className='sign_up_btn'>Sign up</button></Link>
           </div>
           </div>
      </div>
    )
  }
}
