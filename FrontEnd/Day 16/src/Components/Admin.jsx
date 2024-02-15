// Login.js
import  { useState } from 'react';
import '../css/Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    gmail: '',
    password: '',
  });
 const navigate = useNavigate();
 const [errorMessage,setErrorMessage]= useState("");
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
      const response = await axios.post('http://localhost:8086/api/v1/auth/authenticate', formData);

      if (response.data.success) {
        console.log('Login Successful:', response.data);
        const token= response.data.token;
        localStorage.setItem("token",token);
        navigate('/Post');
      } else {
        console.error('Invalid credentials');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage("Invalid credentials");
        console.error('Login Error:', error.response.data.message);
      } else {
        console.error('Login Error:', error.message);
      }
  
  }
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    navigate('/Signup');
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
            name="gmail"
            value={formData.gmail}
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
          Login
        </button>
      </form>
      {errorMessage}
    </div>
     </div>
  );
};

export default Login;
