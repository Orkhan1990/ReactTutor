import React, { Component } from 'react';
import Header from '../../components/HomePageComponents/Header/Header';
import Main from '../../components/HomePageComponents/Main/Main';
import Footer from '../../components/HomePageComponents/Footer/Footer';
import './homePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
