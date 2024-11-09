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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(doctorData),
      });
      
      if (response.ok) {
        console.log('Doctor profile created successfully');
        alert('Doctor profile created');
        navigate('/'); // Redirect to the home page or login page
      } else {
        console.error('Failed to create doctor profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
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
          />
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={doctorData.specialty}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={doctorData.contactNumber}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={doctorData.email}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={doctorData.password}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full outline-none"
          />

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
