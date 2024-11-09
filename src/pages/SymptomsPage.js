import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SymptomsPage.css'; // Import CSS for styling

const SymptomsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleButtonClick = () => {
    // Logic for handling the button click (e.g., save data or navigate)
    console.log("Write Prescription button clicked");
  };

  return (
    <div className="symptoms-page">
      <button className="back-button" onClick={handleBackClick}>
        &larr; Back
      </button>
      <h2 className="title">Symptoms</h2>
      <textarea
        className="symptoms-input"
        placeholder="Describe your symptoms here"
      />
      <button className="submit-button" onClick={handleButtonClick}>
        Write Prescription
      </button>
    </div>
  );
};

export default SymptomsPage;
