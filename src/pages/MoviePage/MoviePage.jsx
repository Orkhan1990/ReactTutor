import React, { Component } from 'react';
import Footer from '../../components/HomePageComponents/Footer/Footer';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Navbar from '../../components/Navbar/Navbar';
import './movie.css';

export default class MoviePage extends Component {
  render() {
    return (
      <div className='movie_page_container'>
        <Navbar/>
        <MovieDetails/>
        <Footer/>
      </div>
    )
  }
}
