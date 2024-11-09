import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiUser, BiLock } from 'react-icons/bi';
import './SignInPage.css';

import LoginButton from './LoginButton'; // Import LoginButton for Auth0 login
import LogoutButton from './LogoutButton'; // Import LogoutButton for Auth0 logout
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook

const SignInPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0(); // Destructure isAuthenticated and user from useAuth0
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
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Sign In</h2>
        
        {/* Auth0 Login Button renamed to "SignIn" */}
        {!isAuthenticated ? (
          <div className="text-center mt-6">
            <LoginButton /> {/* Auth0 login button */}
          </div>
        ) : (
          <div className="text-center mt-6">
            <p>Welcome, {user.name}!</p>
            <LogoutButton /> {/* Auth0 logout button */}
          </div>
        )}

        <div className="signup-link text-center mt-6">
          <p className="text-gray-700">Don't have an account? <a href="#" onClick={() => navigate('/signup')} className="text-purple-600 hover:text-purple-800">Sign Up</a></p>
        </div>

        {errorMessage && (
          <div className="error-message text-red-500 text-center mt-4">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
