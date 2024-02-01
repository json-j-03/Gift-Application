// import React from 'react';
import '../css/Home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { CiBoxList } from "react-icons/ci";
import { MdAttachEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import {gift} from '../assets/gift.jpg';
// import Navbar from './Navbar';


const Home = () => {
  return (
    <div className="wrapper">
    

       <div className="banner">
      
        <div className="navbar">
          <a href="/Home" className="logo">
  
            <img
              className="logo-image"
              src='https://pbs.twimg.com/profile_images/1217561906728357889/GN4SlxtY_400x400.jpg '
              alt="Logo"
            />
       
          </a>
          <div className="search-bar-container">
          <input type="text" placeholder="Search Gifts" className="search-bar" />
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
      <Link to="/ProfilePage"> <Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Track Order</Dropdown.Item>
      </Dropdown.Menu>  
    </Dropdown></a></li>
          </ul>
        </div>
         </div> 
        <div className="content">
        
        </div>
      
      <div className="footer">
      
        <div className="footer-links">

          <Link to="/about">About us</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/report-issue">Report Issue</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="https://www.facebook.com/giftgallery.info">
            <AiFillFacebook size="2rem" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram size="2rem" />
          </Link>
          <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            <MdAttachEmail size="2rem" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
 {/* <button type="button"><span></span>WATCH MORE</button>
            <button type="button"><span></span>SUBSCRIBE</button> */}
