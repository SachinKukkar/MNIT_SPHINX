// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './components/SignInPage';
import PatientDetails from './pages/PatientDetails';
import SymptomsPage from './pages/SymptomsPage';
import Prescription from './pages/PrescriptionPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
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
  );
}

export default App;
