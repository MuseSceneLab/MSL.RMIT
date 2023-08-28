import React from 'react';
import MSLLogo from '../assets/Logo.png';
import '../index.css';

const ProfessorSignupForm = () => {
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
            <div className="column">
              <div className="input-box">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Dayana" />
              </div>

              <div className="input-box">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Torres" />
              </div>
            </div>

            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" />
            </div>

              <div className="input-box">
                <label htmlFor="school">School</label>
                <div className="form-select-box">
                  <select>
                    <option>Berklee College of Music</option>
                    <option>The Royal Academy of Music</option>
                    <option>The Julliard School</option>
                    <option>Yale School of Music</option>
                  </select>
                </div>


              <div className="input-box">
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" placeholder="Music123" />
              </div>
            </div>

            <div className="professor-login">
              <a href="/login" className="login-link">Already have an account? Log in</a>
            </div>

            <button className="signup-button">SIGN UP</button>

            <a className="signup-button" href='/home'>Demo signup</a>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProfessorSignupForm;
