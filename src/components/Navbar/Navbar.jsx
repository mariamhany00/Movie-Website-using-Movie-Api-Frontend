import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import your custom CSS file

const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">Movie</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarScroll">
          <ul className="navbar-nav flex-grow-1 flex-wrap">
            <li className="nav-item">
             <NavLink
               className='nav-link mx-3' 
               to='/'>Home
             </NavLink>
            </li>
            <li className="nav-item">
             <NavLink className='nav-link mx-3' to='/movies'>Movies</NavLink>
            </li>
            <li className="nav-item">
             <NavLink className='nav-link mx-3' to='/moviesdet'>Movies Details</NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


