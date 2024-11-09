import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Import Auth0Provider
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './components/SignInPage';
import PatientDetails from './pages/PatientDetails';
import SymptomsPage from './pages/SymptomsPage';
import Prescription from './pages/PrescriptionPage';
import SignUp from './pages/SignUp';

// Add your Auth0 credentials
const domain = "sachinkukkar.us.auth0.com";
const clientId = "zNLOKG4Wd56QXQNLkAKDKj3FRFtyBIHC";

function App() {
  return (
    // Wrap your app with Auth0Provider
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contactus" element={<ContactPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/patientdetails" element={<PatientDetails />} />
              <Route path="/symptoms" element={<SymptomsPage />} />
              <Route path="/prescription" element={<Prescription />} />
              <Route path="/symptoms/:patientId" element={<SymptomsPage />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;
