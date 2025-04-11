// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import DocumentVault from '../components/DocumentVault';
import EligibilityChecker from '../components/EligibilityChecker';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const res = await axios.get('/api/schemes');
        setSchemes(res.data);
      } catch (err) {
        console.error('Error fetching schemes:', err);
      }
    };

    fetchSchemes();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>

      <div className="dashboard-section">
        <h3>Relevant Schemes</h3>
        <ul>
          {schemes.map((scheme, index) => (
            <li key={index}>{scheme.title}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
        <h3>Eligibility Checker</h3>
        <EligibilityChecker />
      </div>

      <div className="dashboard-section">
        <h3>Document Vault</h3>
        <DocumentVault />
      </div>
    </div>
  );
};

export default Dashboard;

