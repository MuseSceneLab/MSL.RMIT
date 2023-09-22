import React from 'react';
import MSLLogo from '../assets/Logo.png';
import '../index.css';
import { useState } from 'react';
import { studentLogIn } from '../data/repository';

function StudentLoginForm() {

  // state to hold error messages
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  // state to hold credentials
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // handle input change
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });

    // all fields are required, if any is empty, display error message
    if (value === '') {
      setErrorMessages({ ...errorMessages, [name]: '*This field is required*' });
    } else {
      setErrorMessages({ ...errorMessages, [name]: '' });
    }
  };

  const handleLogin = event => {
    event.preventDefault();
    
    // login logic
    if (credentials.email !== '' && credentials.password !== '') {
      studentLogIn(credentials)
        .then(response => {
          console.log(response.body)
          // if the user exists, store user details in local storage and redirect to dashboard
          if (response !== null && response.body.password === credentials.password) {
            // remove password field before storing in local storage
            delete response.password;
            localStorage.setItem('user', JSON.stringify(response));
            window.location.href = '/MSL.RMIT/#/home';
          }
          // if the user does not exist, display error message
          else {
            setErrorMessages({ ...errorMessages, email: '*Incorrect email or password*' });
          }
        });
    }
  };

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
              <input type="text" id="email" placeholder="Enter your email" name="email" onChange={handleInputChange} />
              <div className='text-danger'>{errorMessages.email}</div>
            </div>

            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="password" id="Password" placeholder="Enter your password" name="password" onChange={handleInputChange} />
              <div className='text-danger'>{errorMessages.password}</div>
            </div>

            <div className="form-login">
              <p><a href="/MSL.RMIT/#/signup" className="login-link">Sign up</a></p>
              <p><a href="/MSL.RMIT/#/signup" className="login-link">Forgot your password?</a></p>
            </div>

            <button className="signup-button" onClick={handleLogin}>LOG IN</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default StudentLoginForm;
