import React, { useState } from 'react';
import { getSearchedMovie } from '../lib/api.js';
import MovieCard from './MovieCard.js';
import '../styles/movielist.css';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      getSearchedMovie(query).then((q) => setResults(q))
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className='search-bar'>
          <input
            type="search"
            id="query"
            name="q"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      <div>
        {results.map((movie) => (
          <div className='movie-list' key={movie.id}>
            <MovieCard id={movie.id} title={movie.original_title} posterPath={movie.poster_path}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
