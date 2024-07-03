import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Navbar">
      <div className="logo">CRUD OPERATION BY AXIOS</div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/create" className="nav-link" activeClassName="active">Create</Link>
          </li>
          <li>
            <Link to="/read" className="nav-link" activeClassName="active">Read</Link>
          </li>
          <li>
            <Link to="/update" className="nav-link" activeClassName="active">Update</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
