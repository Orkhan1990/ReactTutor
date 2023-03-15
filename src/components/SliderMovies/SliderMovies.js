import React, { Component } from 'react';
import Title from '../Title/Title';
import LeftRow from '../../images/LeftRow.png';
import RightRow from '../../images/RightRow.png';
import MovieCard from '../MovieCard/MovieCard';
import {popularMovie} from '../../data';
import './sliderMovies.css';

export default class SliderMovies extends Component {
  render() {
    return (
      <div className='sliderMovies_container'>
        <img src= {LeftRow} alt=""/>
        <div className='sliderMovies_content'>
        <Title title="Popular Movies 2022"/>
        <div className='sliderMovies_cards_grid'>
        {
            popularMovie.map(({id,image,title})=>{
              return(
                <MovieCard img={image} title={title} id={id}/>
              )
            })
        }
        </div>
        <button type="" className='sliderMovies_btn'>Load More</button>
        </div>
        <img src={RightRow} alt=""/>
      </div>
    )
  }
}
