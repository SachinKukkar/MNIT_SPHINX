import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/patientdetails'); // Redirect to the patient details page
  };

  const handleLoginClick = () => {
    navigate('/signin'); // Redirect to login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Welcome message at the top */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-10">
        Welcome to Our Healthcare App
      </h1>

      <div className="text-center space-y-6">
        {/* "Add Patient" button */}
        <button
          onClick={handleAddPatientClick}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Add Patient
        </button>

        {/* "Login" and "Signup" buttons aligned in a row */}
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleLoginClick}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={handleSignupClick}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
