import { useEffect, useState } from 'react';
import './App.css';
import { getAllMovies } from './lib/api';

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
      {
        movies.map((movie) => {
          return(
            <li>
              <img src={`${imageUrl}${movie.poster_path}`} alt="" />
              <h1>{movie.title}</h1>
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
