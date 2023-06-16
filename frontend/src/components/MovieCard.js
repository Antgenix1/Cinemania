import React from 'react'

function MovieCard({ title, posterPath }) {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const imageUrl = `${baseImageUrl}${posterPath}`

    return (
    <div className='movie-card'>
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
    </div>
  )
}

export default MovieCard