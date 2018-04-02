import React, { Component } from 'react';
import './App.css';
import Movie from './movies';



class App extends Component {

 state={

 }
 componentDidMount(){

   this._getMovies();
 }
 _callApi = () =>{
   return (fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
   .then(response => response.json())
   .then(json => json.data.movies)
   .catch(err => console.log(err)));
 }
 _getMovies = async() => {
   const movies = await this._callApi();

  this.setState({
     movies : movies
   })
 }
 _renderMovies = () =>{

   const movies = this.state.movies.map(movie=> {
     console.log(movie);
     return <Movie title={movie.title} poster={movie.large_cover_image} descrption ={movie.description_full}key={movie.id}/>
   })
   return movies;
 }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}


export default App;
