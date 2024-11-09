import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw'; // Named import for Excalidraw
import { useNavigate } from 'react-router-dom';
import './PrescriptionPage.css'; // Import CSS for styling

const PrescriptionPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/symptoms'); // Navigate to the home page
  };

  const handleButtonClick = () => {
    // Logic for handling the button click (e.g., save data or navigate)
    console.log("Submit Prescription button clicked");
  };

  return (
    <div className="prescription-page">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h2 className="title">Prescription</h2>
      
      {/* Excalidraw Drawing Area */}
      <div style={{ height: "500px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px" }}>
        <Excalidraw />
      </div>

      <button className="submit-button" onClick={handleButtonClick}>
        Submit Prescription
      </button>
    </div>
  );
};

export default PrescriptionPage;
