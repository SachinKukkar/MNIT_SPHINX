// src/components/SignInPage.js
import React from 'react';
import './SignInPage.css';
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BiUser, BiLock } from 'react-icons/bi';


import './SignInPage.css'; // Create a CSS file for styles

const SignInPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo">
 
          <div className="logo-icon">📱</div>
        </div>
        <h2>Sign in</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Email or User Name" />
            <i className="icon-user"></i>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <i className="icon-lock"></i>
          </div>
          <div className="forgot-password">
            <a href="#">Forget Password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
        {/* <div className="alt-signin">
          <p>Or sign in with</p>
          <div className="social-icons">
            <button className="icon-google">G</button>
            <button className="icon-facebook">F</button>
            <button className="icon-twitter">X</button>
            <button className="icon-linkedin">L</button>
          </div>
        </div> */}
        <div className="signup-link">
          <p>Don't have an account? <a href="#">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;