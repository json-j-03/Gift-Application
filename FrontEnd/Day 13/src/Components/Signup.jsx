// src/components/Signup.js
import  { useState } from 'react';
import '../css/Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    gmail: '',
    name: '',
    mobno: '',
    password: ''
  });
const navigate= useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call for login
      const response = await axios.post('http://localhost:8086/api/v1/auth/register', formData);

      if (response.data.success) {
        console.log('Registration Successful:', response.data);
        const token= response.data.token;
        localStorage.setItem("token",token);
        navigate('/Home');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Register Error:', error.response.data.message);

      } else {
        console.error('Register Error:', error.message);
      }
    }
  };

  return (
<div className="signup">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Email:
          <input
            type="email"
            name="gmail"
            value={formData.gmail}
            onChange={handleChange}
            required
            className="form-input"
            />
        </label>
        <br />
        <label className="form-label">
          Username:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            />
        </label>
        <br />
        <label className="form-label">
          Mobile Number:
          <input
            type="number"
            name="mobno"
            value={formData.mobno}
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
