import React from 'react';
import MSLLogo from '../assets/Logo.png';
import '../index.css';

function StudentLoginForm() {
  return (
    <div className="signup-form">
      <div className="form-box">
        <img
          className="form-logo"
          src={MSLLogo}
          alt="Logo"
        />

        <section className="form-container">
          <form action="#" className="form">
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter your email" />
            </div>

            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="password" id="Password" placeholder="Enter your password" />
            </div>

            <div className="form-login">
              <p><a href="/student-signup" className="login-link">Sign up</a></p>
              <p><a href="/student-signup" className="login-link">Forgot your password?</a></p>
            </div>

            <button className="signup-button">LOG IN</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default StudentLoginForm;
