import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './Movie';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
