import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './movies.css';
import PropTypes from 'prop-types';

class Movie extends Component{
  static propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
  }
  render(){
    return (
      <div>
      <h1>{this.props.title}</h1>
      <MoviePoster poster={this.props.poster}/>
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
