// Navbar.js

// import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Dropdown } from 'bootstrap';
import { CiBoxList } from 'react-icons/ci';
import '../css/Home.css'

const Navbar = () => {
  return (
    <div className="banner">
      
        <div className="navbar">
          <a href="#" className="logo">
  
            <img
              className="logo-image"
              src='../assets/Gifster-logos'
              alt="Logo"
            />
       
          </a>
          <div className="search-bar-container">
          <input type="text" placeholder="Search Gifts " className="search-bar" />
          <i className="search-icon">
            <FaSearch size="1rem" color="black" />
          </i>
        </div>

          <ul>
            <li><a href="#"> Home</a>
    </li>
            <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
            <li><a href="#">Occasions</a></li>
            <li><a href="#">Recipients</a></li>
            <li><Link to="/Category"><a href="#">Categories</a></Link></li>
            <li><a href="#"><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CiBoxList />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Track Order</Dropdown.Item>
      </Dropdown.Menu>  
    </Dropdown></a></li>
          </ul>
        </div>
        </div>
  );
};

export default Navbar;
