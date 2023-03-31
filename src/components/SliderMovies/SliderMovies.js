import React, { Component } from 'react';
import Title from '../Title/Title';
import LeftRow from '../../images/LeftRow.png';
import RightRow from '../../images/RightRow.png';
import MovieCard from '../MovieCard/MovieCard';
import './sliderMovies.css';

export default class SliderMovies extends Component {
  state={
    leftArrow:React.createRef(),
    rightArrow:React.createRef(),
    cardSlider:React.createRef(),
  }
 componentDidMount(){
  let elements=this.state.cardSlider.current.children;
 let count=0;
 function slide(){
  for(let i=0;i<elements.length;i++){
     elements[i].style.transform=`translateX(${count*-300}px)`
  }
 }
  setInterval(() => {
    if(count<elements.length-4){
      count++;
      slide();
    }else{
       count=0;
       slide();
    }
  }, 2000);
    let leftElement=this.state.leftArrow.current;
    leftElement.addEventListener('click',()=>{
      if(count<elements.length-4){
        count--;
        slide()
      }else{
        count=0;
        slide();
      }
    })

    let rightElement=this.state.rightArrow.current;
    rightElement.addEventListener('click',()=>{
      if(count<elements.length-4){
        count++;
        slide();
      }else{
        count=0;
        slide();
      }
    })
 }
  render() {
   
   
    const{titleData,movieData,show}=this.props;
    const{leftArrow,rightArrow,cardSlider}=this.state;
    return (
      <div className='sliderMovies_container'>
        <img src= {LeftRow} alt="" ref={leftArrow} className="arrow" />
        <div className='sliderMovies_content'>
        <Title title={titleData}/>
        <div className='sliderMovies_cards_grid' ref={cardSlider}>
        {
            movieData?.map((item,index)=>{
              return(
                <MovieCard data={item} key={index}/>
              )
            })
        }
        </div>
        {show&&<button type="" className='sliderMovies_btn'>Load More</button>}
        </div>
        <img src={RightRow} alt="" ref={rightArrow} className="arrow"/>
      </div>
    )
  }
}
