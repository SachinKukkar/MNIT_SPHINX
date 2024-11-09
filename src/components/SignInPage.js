import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUser, BiLock } from 'react-icons/bi';
import './SignInPage.css';

const SignInPage = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to check if the user exists in the database
    try {
      const response = await fetch('http://localhost:5000/api/doctor/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrUsername, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Check if the response contains doctor data (meaning user exists)
        if (data.success) {
          // Redirect to the patient details or dashboard page after successful sign in
          navigate('/patientdetails');
        } else {
          // Handle invalid credentials (wrong password or email)
          setErrorMessage('Invalid email/username or password');
        }
      } else {
        // Handle server errors or unexpected responses
        setErrorMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      // Handle network or other errors
      setErrorMessage('Network error. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="login-container flex justify-center items-center h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400">
      <div className="login-form bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="logo text-center mb-6">
          <div className="logo-icon text-6xl text-purple-600">📱</div>
        </div>
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Sign in</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-4">
            <input
              type="text"
              placeholder="Email or Username"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <BiUser className="input-icon absolute right-3 top-3 text-gray-500" />
          </div>
          
          <div className="input-group mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <BiLock className="input-icon absolute right-3 top-3 text-gray-500" />
          </div>
          
          <div className="forgot-password text-right mb-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">Forgot Password?</a>
          </div>
          
          <button type="submit" className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
            Sign In
          </button>
        </form>

        {errorMessage && (
          <div className="error-message text-red-500 text-center mt-4">
            {errorMessage}
          </div>
        )}

        <div className="signup-link text-center mt-6">
          <p className="text-gray-700">Don't have an account? <a href="#" onClick={() => navigate('/signup')} className="text-purple-600 hover:text-purple-800">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
