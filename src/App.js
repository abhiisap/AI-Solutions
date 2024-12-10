import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/ContactForm';
import AdminLogin from './components/AdminLogin';
import Events from './components/Events';
import SinglePageWithAI from './components/SinglePageWithAI';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/single-page-with-ai" element={<SinglePageWithAI />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add the dashboard route here */}
      </Routes>
    </div>
  );
}

export default App;
