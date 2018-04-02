import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './movies.css';

class Movie extends Component{
  render(){
    return (
      <div>
      <MoviePoster poster={"http://t1.daumcdn.net/movie/73d078e4c3d27c1d5d2240b4981dc94980676be1"}/>
      </div>
    );
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src={this.props.poster}/>
    );
  }
}
export default Movie;
