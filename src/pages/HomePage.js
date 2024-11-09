import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/patientdetails'); // Redirect to the patient details page
  };

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to Our Healthcare App</h1>
        
        <button
          onClick={handleAddPatientClick}
          className="p-4 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Add Patient
        </button>
        
        <div className="space-x-4">
          <button
            onClick={handleLoginClick}
            className="p-4 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="p-4 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
