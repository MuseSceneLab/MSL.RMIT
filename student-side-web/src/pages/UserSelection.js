import React, { useState } from 'react';

// Import images
import { studentIcon, professorIcon, MSLLogo } from '../assets/Icons';

// For local storage
const USER_ROLE_KEY = 'userRole';

function UserSelection() {

  // Function for setting user role in local storage
  const setRole = (role) => {
    localStorage.setItem(USER_ROLE_KEY, role);
  }

  return (
    <>
    <div className='bg'>
      <div className="center-box">
        <div className="icon">
          <img src={MSLLogo} alt="My Icon" className="icon-img" />
          <p className="center-text">Choose your User:</p>
          <div className="user-options">
            <div className="user-options-container">
              <a className="user-option" href="/MSL.RMIT/#/signup" onClick={() => setRole("Student")}>
                <img src={studentIcon} alt="Student Icon" />
              </a>
              <a className="user-option" href="/MSL.RMIT/#/signup" onClick={() => setRole("Professor")}>
                <img src={professorIcon} alt="Professor Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default UserSelection;
