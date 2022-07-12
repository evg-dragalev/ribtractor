import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Ribtractor</h1>
      <div className='links'>
        <Link to='/'>Constructor</Link>
        <Link to='/markups'>Markups</Link>
      </div>
    </nav>
  );
}

export default Navbar;
