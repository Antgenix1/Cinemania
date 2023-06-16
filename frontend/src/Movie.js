import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from './lib/api';
import './styles/movie.css';
import ReviewCard from './components/ReviewCard';
import PostReview from './components/PostReview';

function Movie() {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const { id } = useParams();
    
    // Fetch movie details using the ID and display them
    const [movie, setMovie] = useState([]);
    
    
    useEffect(() => {
        try{
            getMovieById(id).then((m) => setMovie(m))
        } catch(e) {
            console.log(e)
        }
    })
    
    const imageUrl = `${baseImageUrl}${movie.poster_path}`

  return (
    <div className='movie-details'>
        <div className='image-container'>
            <img src={imageUrl} alt={movie.title} />
        </div>
        <div className='content-container'>
            <h1>{movie.title}</h1>
            <div className='review-container'>
                <ReviewCard id={id} />
                <PostReview id={id}/>
            </div>
        </div>
    </div>
  );
}

export default Movie;
