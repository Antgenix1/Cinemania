import React from 'react'
import '../styles/nav.css';
import SearchMovies from './SearchMovies';

function Nav() {
  return (
    <div className='topnav'>
      <SearchMovies />
    </div>
  )
}

export default Nav