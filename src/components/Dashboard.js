import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import external CSS for styling

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(sessionStorage.getItem('logged_in')); // Check if 'logged_in' is set
    if (sessionStorage.getItem('logged_in') === 'true') {
      const fetchInquiries = async () => {
        try {
          const response = await axios.get('http://localhost/aiassistbackend/fetch_inquiries.php');
          
          // Handle the response and update the state
          if (response.data && response.data.length > 0) {
            setInquiries(response.data);
          } else {
            setError('No inquiries found');
          }
        } catch (error) {
          setError('Error fetching data');
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); // Set loading to false after the request is finished
        }
      };
      fetchInquiries();
    } else {
      alert('Please log in to access the dashboard.');
    }
  }, []);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Admin Dashboard</h1>
      <div className="table-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Job Title</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id}>
                    <td>{inquiry.name}</td>
                    <td>{inquiry.email}</td>
                    <td>{inquiry.phone}</td>
                    <td>{inquiry.company}</td>
                    <td>{inquiry.job_title}</td>
                    <td>{inquiry.job_details}</td>
                    <td>{inquiry.created_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-data">
                    No inquiries found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
