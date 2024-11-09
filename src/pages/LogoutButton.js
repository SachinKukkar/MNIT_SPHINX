// src/LogoutButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';  // Import the useAuth0 hook

const LogoutButton = () => {
  const { logout } = useAuth0();  // Get the logout function from Auth0

  // Handle the logout click
  const handleLogout = () => {
    // This will log the user out and redirect them to the home page
    logout({ returnTo: window.location.origin });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
