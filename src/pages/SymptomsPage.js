import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import './SymptomsPage.css'; // Import CSS for styling

const SymptomsPage = () => {
  const [patientId, setPatientId] = useState(''); // Store patient ID
  const [symptoms, setSymptoms] = useState(''); // Store symptoms input
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/patientdetails'); // Navigate to the patient details page
  };

  const handlePrescriptionClick = () => {
    navigate('/prescription'); // Navigate to the prescription page
  };

  const handleSymptomsSubmit = async () => {
    if (!patientId || !symptoms) {
      alert('Please fill in both patient ID and symptoms');
      return;
    }

    try {
      // Send symptoms to the backend to store them in MongoDB
      const response = await axios.post('http://localhost:5000/addSymptoms', {
        patientId,
        symptoms: symptoms.split(',').map((s) => s.trim()) // Split symptoms into an array
      });

      console.log(response.data); // Log success message
      alert('Symptoms added successfully!');
      handlePrescriptionClick(); // Navigate to prescription page after submitting
    } catch (error) {
      console.error("Error adding symptoms:", error);
      alert('Failed to add symptoms. Please try again.');
    }
  };

  return (
    <div className="symptoms-page">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h2 className="title">Symptoms</h2>

      <input
        type="text"
        className="patient-id-input"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />

      <textarea
        className="symptoms-input"
        placeholder="Describe your symptoms here"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button className="submit-button" onClick={handleSymptomsSubmit}>
        Submit Symptoms
      </button>
      {/* <button className="submit-button" onClick={handlePrescriptionClick}>
        Write Prescription
      </button> */}
    </div>
  );
};

export default SymptomsPage;
