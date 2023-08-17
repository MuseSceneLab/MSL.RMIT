import React, { useState } from 'react';
import './LandingPage.css';

// Import images
import studentIcon from './assets/Student.png';
import professorIcon from './assets/Prof.png';

function LandingPage() {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="bg">
      <div className="center-box">
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="My Icon" className="icon-img" />
          <p className="center-text">Choose your User:</p>
          <div className="user-options">
            <div className="user-options-container">
              <div className="user-option" onClick={() => handleUserSelection('student')}>
                <img src={studentIcon} alt="Student Icon" />
              </div>
              <div className="user-option" onClick={() => handleUserSelection('professor')}>
                <img src={professorIcon} alt="Professor Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
