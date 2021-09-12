import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2>React Practice Site</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/loop'>Loop</Link>
        </li>
        <li>
          <Link to='/update'>Update</Link>
        </li>
        <li>
          <Link to='/alert'>Alert</Link>
        </li>
        <li>
          <Link to='/addnums'>Add Numbers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
