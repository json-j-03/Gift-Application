// Login.js
import  { useState } from 'react';
import '../css/Login.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [formData, setFormData] = useState({
    gmail: '',
    password: '',
  });
  const [errorMessage, setErrorMessage]= useState("");
const navigate = useNavigate();
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
        navigate('/Home');
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
  }
  const handleForgotPassword = () => {
    navigate('/signup');
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
      <p style={{color:"red"}}>
        {errorMessage}
        </p>
      <div className="forgot-password" onClick={handleForgotPassword}>
        <span>Create New Account</span>
      </div>
    </div>
     </div>
  );
};

export default Login;
