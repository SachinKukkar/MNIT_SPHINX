// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState({
    fullName: '',
    specialty: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctorData),
      });

      const data = await response.json(); // Parse response

      if (response.ok) {
        alert('Doctor profile created successfully');
        navigate('/patientdetails'); // Redirect to patient details page
      } else {
        console.error('Failed to create doctor profile:', data.message || data.error);
        alert(`Error: ${data.message || data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <button onClick={() => navigate('/')} className="text-purple-500 mb-4">
          {'< Back'}
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-6">Doctor SignUp</h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={doctorData.fullName}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
            required
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={doctorData.specialty}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={doctorData.contactNumber}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={doctorData.email}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={doctorData.password}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
            required
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4 hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
