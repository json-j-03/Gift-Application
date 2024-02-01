// src/components/Signup.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';
import { BiFontFamily } from 'react-icons/bi';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
    // You can make an API call to handle the signup process
  };

  return (
<div className="signup">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <h4><Link to="/Login"></Link><a href='#' >User</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Admin"><a href='#'>Admin</a></Link></h4>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
            />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            />
        </label>
        <br />
        <label className="form-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
            />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
    </div>
   
          
  );
};

export default Signup;
