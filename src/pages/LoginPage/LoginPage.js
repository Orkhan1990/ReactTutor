import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './loginPage.css';

 class LoginPage extends Component {
  render() {
    return (
      <div className='login_page_container'>
         <h2>Login</h2>
         <form >
          <div className='login_input'>
          <label htmlFor="email">Email</label>
          <input id='email' type="text" placeholder='Email' />
          </div>

          <div className='login_input'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' id="password"/>
          </div>
            <Link className='login_forgot_password'>Forgot Password?</Link>
            <p></p>
            <button type='submit' className='login_page_btn'>Login</button>
         </form>
      </div>
    )
  }
}

export default LoginPage;