import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook from Auth0

const LogoutButton = () => {
  const { logout } = useAuth0(); // Destructure logout function from useAuth0

  return (
    <button
      onClick={() =>
        logout({ returnTo: window.location.origin }) // Logout and redirect to home
      }
      className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
