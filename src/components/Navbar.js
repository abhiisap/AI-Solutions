import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/events">Events</Link>
      <Link to="/single-page-with-ai">AI Assist</Link>
    </div>
  );
}

export default Navbar;
