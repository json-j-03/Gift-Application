// Login.js
import  { useState } from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
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
    // Add your login logic here
    console.log('Form submitted:', formData);
    // You can make an API call to handle the login process
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
    // You can navigate to the forgot password page or show a modal
  };

  return (
  <div className="log">
    
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <br /><Link to="/Post">
        <button type="submit" className="submit-button">
          Login
        </button></Link>
      </form>
      <div className="forgot-password" onClick={handleForgotPassword}>
        <span>Forgot Password?</span>
      </div>
    </div>
     </div>
  );
};

export default Login;
