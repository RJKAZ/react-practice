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
        <li>
          <Link to='/github'>GitHub User API Call</Link>
        </li>
        <li>
          <Link to='/counter'>Simple Counter</Link>
        </li>
        <li>
          <Link to='/searchHeros'>Search List</Link>
        </li>
        <li>
          <Link to='/toggle'>Toggle</Link>
        </li>
        <li>
          <Link to='/date'>Date</Link>
        </li>
        <li>
          <Link to='/scroll'>Scroll</Link>
        </li>
        <li>
          <Link to='/image'>Image</Link>
        </li>
        <li>
          <Link to='/fizz'>Fizz Buzz</Link>
        </li>
        <li>
          <Link to='/counterClass'>Counter Class</Link>
        </li>
        <li>
          <Link to='/disableButton'>Disabled Button</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
