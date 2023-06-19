import React, { useState } from 'react';
import { getSearchedMovie } from '../lib/api.js';

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
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Display the results */}
      <div>
        {results.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.original_title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
