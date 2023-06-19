import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css';

function Nav() {
  return (
    <div className='topnav'>
      <div className='menu'>
        <Link className='link' href={`/`}>Home</Link>
        <Link className='link'>Login</Link>
      </div>
      <form role='search' className='search-container'>
        <input type='search' id='query' name='q' placeholder='Search...'/>
      </form>
    </div>
  )
}

export default Nav