import React, { useState } from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PatientDetails = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [patientData, setPatientData] = useState({
    fullName: '',
    lastName: '',
    whatsappNo: '',
    age: '',
    gender: '',
    location: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      if (response.ok) {
        console.log('Patient details saved successfully');
        navigate('/symptoms'); // Navigate to the next page
      } else {
        console.error('Failed to save patient details');
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

        <h2 className="text-2xl font-bold text-purple-700 mb-6">Patient Details</h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center border rounded-lg p-2">
              <FaUser className="text-purple-500 mr-2" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={patientData.fullName}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={patientData.lastName}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="flex items-center border rounded-lg p-2">
            <FaPhoneAlt className="text-purple-500 mr-2" />
            <input
              type="text"
              name="whatsappNo"
              placeholder="WhatsApp No"
              value={patientData.whatsappNo}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={patientData.age}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={patientData.gender}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={patientData.location}
              onChange={handleChange}
              className="border rounded-lg p-2 outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientDetails;
