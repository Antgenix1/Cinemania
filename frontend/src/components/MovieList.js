import React from 'react'
import { getAllMovies } from '../lib/api';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import '../styles/movielist.css';

function MovieList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      getAllMovies().then((m) => setMovies(m))
    } catch(e) {
      console.log(e)
    }
  }, [])

  return (
    <div className="movie-list">
    
        {movies.map((movie, index) => (
          <MovieCard key={index} id={movie.id} title={movie.title} posterPath={movie.poster_path}/>
        ))}
  
    </div>
  )
}

export default MovieList