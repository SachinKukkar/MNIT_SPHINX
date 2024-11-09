import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="w-full p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex justify-between items-center shadow-lg fixed top-0 left-0 z-10">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-white">📱DocTrail</div>
        </div>

        <div className="flex-1 text-center">
          {/* Quote in the middle of the navbar */}
          <span className="italic text-lg">"Your Health, Our Priority"</span>
        </div>

        <div className="flex space-x-8">
          {/* About Us and Contact Us links */}
          <button
            onClick={() => navigate('/aboutus')}
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            About Us
          </button>
          <button
            onClick={() => navigate('/contactus')}
            className="text-lg hover:text-gray-200 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-purple-600">
          Welcome to Our Healthcare App
        </h1>

        <p className="text-xl text-center mb-10 text-gray-700">
          We provide the best healthcare services with top doctors and easy access to medical support.
        </p>

        <div className="space-y-6">
          <div className="flex justify-center space-x-8 mt-4">
            <button
              onClick={() => navigate('/signin')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; 2024 Healthcare Inc. | All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default HomePage;
