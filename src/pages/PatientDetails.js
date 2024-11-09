// src/pages/PatientDetails.js
import React from 'react';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Excalidraw from '@excalidraw/excalidraw';

const PatientDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="text-purple-500 mb-4"
        >
          {'< Back'}
        </button>

        <h2 className="text-2xl font-bold text-purple-700 mb-6">Patient Details</h2>
        
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center border rounded-lg p-2">
              <FaUser className="text-purple-500 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* WhatsApp Field */}
          <div className="flex items-center border rounded-lg p-2">
            <FaPhoneAlt className="text-purple-500 mr-2" />
            <input
              type="text"
              placeholder="WhatsApp No"
              className="w-full outline-none"
            />
          </div>

          {/* Age, Gender, and Location Fields */}
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="Age"
              className="border rounded-lg p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Gender"
              className="border rounded-lg p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              className="border rounded-lg p-2 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={() => navigate('/symptoms')}
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
                  