import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav id="navbar">
     
      <div className="logo-container">
        <a href="#home">
          <img src="/logo tcc - Copy.png" alt="Logo" className="logo" />
        </a>
      </div>

      <div className="navbar_container">
        <ul className="nav_ul">
          <li className="nav_item">
            <a className="nav_link" href="#about">
              About
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#video-section">
              Videos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
