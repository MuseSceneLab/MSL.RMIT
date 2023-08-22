import React, { useState } from 'react';

// Import images
import { studentIcon, professorIcon, MSLLogo } from '../assets/Icons';

// Import components
import SignupForm from '../components/SignupForm';

function UserSelection() {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
    <div className='bg'>
      <div className="center-box">
        <div className="icon">
          <img src={MSLLogo} alt="My Icon" className="icon-img" />
          <p className="center-text">Choose your User:</p>
          <div className="user-options">
            <div className="user-options-container">
              <a className="user-option" href="/student-signup">
                <img src={studentIcon} alt="Student Icon" />
              </a>
              <div className="user-option">
                <img src={professorIcon} alt="Professor Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default UserSelection;
