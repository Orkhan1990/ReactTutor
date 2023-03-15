import React, { Component } from 'react';
import Title from '../Title/Title';
import LeftRow from '../../images/LeftRow.png';
import RightRow from '../../images/RightRow.png';
import MovieCard from '../MovieCard/MovieCard';
import './sliderMovies.css';

export default class SliderMovies extends Component {

  render() {
    console.log(this.props.popularMovieData)
    return (
      <div className='sliderMovies_container'>
        <img src= {LeftRow} alt=""/>
        <div className='sliderMovies_content'>
        <Title title={this.props.titleData}/>
        <div className='sliderMovies_cards_grid'>
        {
            this.props.popularMovieData?.map((item,index)=>{
              return(
                <MovieCard img={item.image} title={item.title} id={item.id} key={item.id}/>
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
