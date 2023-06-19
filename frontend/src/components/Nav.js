import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css';
import SearchMovies from './SearchMovies';

function Nav() {
  return (
    <div className='topnav'>
      <div className='menu'>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/login">Login</Link>
      </div>
      <SearchMovies />
    </div>
  )
}

export default Nav