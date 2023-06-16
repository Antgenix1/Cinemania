import { useEffect, useState } from 'react';
import './App.css';
import { getAllMovies } from './lib/api';
import MovieCard from './components/MovieCard';

function App() {

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      getAllMovies().then((m) => setMovies(m))
    } catch(e) {
      console.log(e)
    }
  })
  
  
  return (
    <div className="App">

      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} posterPath={movie.poster_path}/>
      ))}

    </div>
  );
}

export default App;
