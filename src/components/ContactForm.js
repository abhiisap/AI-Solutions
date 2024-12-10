import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Link to the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    job_title: '',
    job_details: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost/aiassistbackend/contact.php', formData);
      alert(response.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        job_title: '',
        job_details: '',
      });
    } catch (error) {
      alert('Error submitting the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">We'd Love to Hear from You!</h1>
      <p className="contact-subtitle">Fill out the form below, and we'll get in touch with you.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label className="form-label">{key.replace('_', ' ').toUpperCase()}</label>
            <input
              type={key === 'email' ? 'email' : 'text'}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="form-input"
              placeholder={`Enter your ${key.replace('_', ' ')}`}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
