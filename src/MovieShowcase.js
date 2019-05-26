import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  //Assignment forces the following syntax
  //return movieData.map((data, index) => <MovieCard key={index} movie={data}/>)
  //You can use the spread operator to shorten the syntax
  //return movieData.map((data, index) => <MovieCard key={index} {...data})
  //On MovieCard access to the data would read 
  //this.props.poster
  //this.props.title
  //this.props.IMDBRating
  //this.props.genres
  generateMovieCards = () => {
    return movieData.map((data, index) => <MovieCard key={index} {...data}/>)
   
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()} 
      </div>
    )
  }
}
