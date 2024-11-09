import React, { useState } from 'react';
import { Excalidraw } from '@excalidraw/excalidraw'; // Named import for Excalidraw
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API requests
import './PrescriptionPage.css'; // Import CSS for styling

const PrescriptionPage = () => {
  const [patientId, setPatientId] = useState(''); // Store patient ID
  const [prescription, setPrescription] = useState(''); // Store prescription input (in text format)
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/symptoms'); // Navigate to the symptoms page
  };

  const handlePrescriptionSubmit = async () => {
    if (!patientId || !prescription) {
      alert('Please fill in both patient ID and prescription');
      return;
    }

    try {
      // Send prescription data to the backend to store it in MongoDB
      const response = await axios.post('http://localhost:5000/addPrescription', {
        patientId,
        prescription: prescription.split(',').map((p) => p.trim()) // Split prescription into an array
      });

      console.log(response.data); // Log success message
      alert('Prescription submitted successfully!');
    } catch (error) {
      console.error("Error submitting prescription:", error);
      alert('Failed to submit prescription. Please try again.');
    }
  };

  return (
    <div className="prescription-page">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h2 className="title">Prescription</h2>

      {/* Input for Patient ID */}
      <input
        type="text"
        className="patient-id-input"
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
      />

      {/* Excalidraw Drawing Area for prescription */}
      <div style={{ height: "500px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}>
        <Excalidraw />
      </div>

      {/* Input for Prescription (text version) */}
      <textarea
        className="prescription-input"
        placeholder="Enter prescription details (e.g., medication)"
        value={prescription}
        onChange={(e) => setPrescription(e.target.value)}
      />

      <button className="submit-button" onClick={handlePrescriptionSubmit}>
        Submit Prescription
      </button>
    </div>
  );
};

export default PrescriptionPage;
