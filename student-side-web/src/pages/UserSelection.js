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
    <div className={selectedUser === '' ? 'bg' : 'collapse'}>
      <div className="center-box">
        <div className="icon">
          <img src={MSLLogo} alt="My Icon" className="icon-img" />
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

    <div className={selectedUser === 'student' ? '' : 'collapse'}>
      <SignupForm />
    </div>
    </>
  );
}

export default UserSelection;
