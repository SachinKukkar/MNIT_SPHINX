import React from 'react';
import Excalidraw from '@excalidraw/excalidraw';
import { useNavigate } from 'react-router-dom';
import './PrescriptionPage.css'; // Import CSS for styling

const PrescriptionPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleButtonClick = () => {
    // Logic for handling the button click (e.g., save data or navigate)
    console.log("Write Prescription button clicked");
  };

  return (
    <div className="prescription-page">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h2 className="title">Prescription</h2>
      <textarea
        className="prescription-input"
        placeholder="Describe your prescription here"
      />
      <button className="submit-button" onClick={handleButtonClick}>
        Submit Prescription
      </button>
    </div>
  );
};

export default PrescriptionPage;
