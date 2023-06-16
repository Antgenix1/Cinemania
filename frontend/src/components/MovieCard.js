import React from 'react'
import '../styles/moviecard.css';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, posterPath }) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const imageUrl = `${baseImageUrl}${posterPath}`

    return (
    <div className='movie-card'>
        <Link to={`/movies/${id}`}>
            <img className='poster' src={imageUrl} alt={title} />
            <h2>{title}</h2>
        </Link>
    </div>
  )
}

export default MovieCard