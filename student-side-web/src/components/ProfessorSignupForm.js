import React from 'react';
import MSLLogo from '../assets/Logo.png';
import '../index.css';
import { createProfessorAccount } from '../data/repository';
import { useState } from 'react';

const ProfessorSignupForm = () => {


  // state to hold error messages
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    password: ''
  })


  // state to hold professor details
  const [professorDetails, setProfessorDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    password: ''
  });


  // logic to handle input change
  const handleInputChange = event => {
    const { name, value } = event.target;

    setProfessorDetails({ ...professorDetails, [name]: value });

    // all fields are required, if any is empty, display error message
    if (value === "") {
      setErrorMessages({ ...errorMessages, [name]: "*This field is required*" })
    } else {
      setErrorMessages({ ...errorMessages, [name]: "" })
    }
  };

  const handleSignUp = event => {
    event.preventDefault();

    // sing up logic
    if (professorDetails.firstName !== "" && professorDetails.lastName !== "" && professorDetails.email !== "" && professorDetails.school !== "" && professorDetails.password !== "" ) {
      console.log(professorDetails)
      createProfessorAccount(professorDetails)

      // remove password field before storing in local storage
      delete professorDetails.password

      // store user details in local storage
      localStorage.setItem('user', JSON.stringify(professorDetails))

      // clear input fields
      setProfessorDetails({
        firstName: '',
        lastName: '',
        email: '',
        school: '',
      })
    }
  }

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
                <input type="text" id="firstName" placeholder="Dayana" name="firstName" onChange={handleInputChange} />
                <div className='text-danger'>{errorMessages.firstName}</div>
              </div>

              <div className="input-box">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Torres" name="lastName" onChange={handleInputChange} />
                <div className='text-danger'>{errorMessages.lastName}</div>
              </div>
            </div>

            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" name="email" onChange={handleInputChange} />
              <div className='text-danger'>{errorMessages.email}</div>
            </div>

              <div className="input-box">
                <label htmlFor="school">School</label>
                <div className="form-select-box">
                  <select name="school" onChange={handleInputChange}>
                    <option>Berklee College of Music</option>
                    <option>The Royal Academy of Music</option>
                    <option>The Julliard School</option>
                    <option>Yale School of Music</option>
                  </select>
                  <div className='text-danger'>{errorMessages.school}</div>
                </div>


              <div className="input-box">
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" placeholder="Music123" name="password" onChange={handleInputChange} />
                <div className='text-danger'>{errorMessages.password}</div>
              </div>
            </div>

            <div className="professor-login">
              <a href="/login" className="login-link">Already have an account? Log in</a>
            </div>

            <button className="signup-button" onClick={handleSignUp}>SIGN UP</button>

            <a className="signup-button" href='/home'>Demo signup</a>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProfessorSignupForm;
