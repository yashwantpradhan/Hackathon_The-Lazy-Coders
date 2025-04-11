import React, { useState } from 'react';
import './EligibilityChecker.css';

const EligibilityChecker = () => {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState('');
  const [eligible, setEligible] = useState(null);

  const checkEligibility = () => {
    if (
      age >= 18 &&
      income <= 500000 &&
      occupation &&
      location
    ) {
      setEligible(true);
    } else {
      setEligible(false);
    }
  };

  return (
    <div className="eligibility-checker">
      <h2>Eligibility Checker</h2>

      <div className="input-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>

      <div className="input-group">
        <label htmlFor="income">Annual Income (₹):</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income"
        />
      </div>

      <div className="input-group">
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          placeholder="Enter your occupation"
        />
      </div>

      <div className="input-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
        />
      </div>

      <button className="check-btn" onClick={checkEligibility}>
        Check Eligibility
      </button>

      {eligible !== null && (
        <div className={`result ${eligible ? 'eligible' : 'not-eligible'}`}>
          {eligible ? '✅ You are eligible for the scheme!' : '❌ Sorry, you are not eligible.'}
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;

