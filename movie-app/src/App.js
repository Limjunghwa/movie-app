import React, { Component } from 'react';
import './App.css';
import Movie from './movies';



class App extends Component {

 state={
   greeting:"hello?",
   movies : [
     {
       title:"Matrix",
       poster:"https://i.ytimg.com/vi/mSWDTG3I-dQ/maxresdefault.jpg"
     },
     {
       title:"Full Metal Jacket",
       poster:"https://ww3.sinaimg.cn/large/87c01ec7gy1fhg19uu0o8j208c0bo75w.jpg"
     },
     {
       title:"Oldboy",
       poster:"https://images-na.ssl-images-amazon.com/images/I/91wPAjXfJaL._SL1500_.jpg"
     },
     {
       title:"Star Wars",
       poster:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/RKc/image/AHaBhR3QEffn-YOYsIkdP_nMnD4.jpg"
     }

   ]
 }
 componentDidMount(){
   setTimeout(()=>{
     this.setState({
       greeting:"hellozzzz",
       movies:[
         ...this.state.movies,
         {
          title:"limjunghwa",
          poster: "https://images-na.ssl-images-amazon.com/images/I/91wPAjXfJaL._SL1500_.jpg"
         }
       ]
     })
   },5000)
 }
  render() {
    return (
      <div className="App">
      {this.state.greeting}
      {

      this.state.movies.map((movie,index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index}/>
      })
    }
      </div>
    );
  }
}


export default App;
