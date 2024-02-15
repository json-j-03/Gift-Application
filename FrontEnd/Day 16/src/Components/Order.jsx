// import React from 'react';
import '../css/Home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link ,useNavigate } from 'react-router-dom';
import { CiBoxList } from "react-icons/ci";
import { MdAttachEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
//  import {gift} from '../assets/gift.jpg';
// import Navbar from './Navbar';


const Order = () => {
    const [errorMessage,setErrorMessage]= useState("");

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        purchaseId:'',
        productId:'',
        productName: '',
        productPrice: '',
        mobileNumber: ''
    });
    useEffect(() => {
        const product = JSON.parse(localStorage.getItem('products'));
        console.log(product);
        if (product) {
            setFormData(prevState => ({
                ...prevState,
                purchaseId: product.productId,
                productId: product.productId,
                productName: product.productName,
                productPrice: product.productPrice,
            }));
        }
    }, []);
    
    const handleChange = (e) => {
        const mobile = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      [e.target.name]: mobile,
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        console.log(formData);
          const response = await axios.post('http://localhost:8080/postpd', formData);
        console.log(response);
        // navigate('/pay');

        } catch (error) {
          if (axios.isAxiosError(error)) {
            setErrorMessage("Invalid credentials");
            console.error('Login Error:', error.response.data.message);
          } else {
            console.error('Login Error:', error.message);
          }
      
      }
      }
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
            <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
            <li><Link to="/Recipient"><a href="#">Recipients</a></Link></li>
            <li><Link to="/Category"><a href="#">Categories</a></Link></li>
            <li><a href="#"><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CiBoxList />
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Link to="/ProfilePage"> <Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">View Order</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Track Order</Dropdown.Item> */}
      </Dropdown.Menu>  
    </Dropdown></a></li>
          </ul>
        </div>
         </div> 
        <div className="content">
        <div className="login-container">
      <h2>Enter mobile number</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-label">
           Phone:
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {/* <p style={{color:"red"}}>
        {errorMessage}
        </p> */}
    </div>
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

export default Order;
