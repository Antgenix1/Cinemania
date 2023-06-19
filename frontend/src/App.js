import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './Movie';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
