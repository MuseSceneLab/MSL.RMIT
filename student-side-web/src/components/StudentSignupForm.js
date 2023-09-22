import MSLLogo from '../assets/Logo.png';
import '../index.css';
import { useState } from 'react';
import { createStudentAccount } from '../data/repository';

function StudentSignupForm() {

  
  // student details
  const [studentDetails, setStudentDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    instrument: '',
    course: '',
    password: ''
  });

  // error messages
  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    instrument: '',
    course: '',
    password: ''
  })

  // handle input change
  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudentDetails({ ...studentDetails, [name]: value });

    // all fields are required, if any is empty, display error message
    if (value === '') {
      setErrorMessages({ ...errorMessages, [name]: '*This field is required*' })
    }
    else {
      setErrorMessages({ ...errorMessages, [name]: '' })
    }
  };

  // sign up logic
  const handleSignUp = event => {
    event.preventDefault();
    
    if (studentDetails.firstName !== '' && studentDetails.lastName !== '' && studentDetails.email !== '' && studentDetails.school !== '' && studentDetails.instrument !== '' && studentDetails.course !== '' && studentDetails.password !== '') {
      createStudentAccount(studentDetails)

      // remove password field before storing in local storage
      delete studentDetails.password

      // store user details in local storage
      localStorage.setItem('user', JSON.stringify(studentDetails))

      // clear input fields
      setStudentDetails({
        firstName: '',
        lastName: '',
        email: '',
        school: '',
        instrument: '',
        course: '',
        password: ''
      })

      // redirect to dashboard
      window.location.href = '/home';
    }

  }


  return (
    /* Start of Container */
  <div className="signup-form">
    <div className="form-box">
      <img /* Image */
        className="form-logo"
        src={MSLLogo} alt="Logo"
      />

      {/* Form Container */}
      <section className="form-container">
        <form action="#" className="form">
        {/* First/surname input boxes wrapped in column container for 1x2 display */}
        <div className="column"> 
          <div className="input-box">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Dayana" name="firstName" onChange={handleInputChange} />
              <div className="text-danger">{errorMessages.firstName}</div>
          </div>

            <div className="input-box">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Torres" name="lastName" onChange={handleInputChange} />
              <div className="text-danger">{errorMessages.lastName}</div>
            </div>
        </div>

        {/* Email input box*/}
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" name="email" onChange={handleInputChange} />
              <div className="text-danger">{errorMessages.email}</div>
            </div>

          {/* Select boxes wrapped in column container for 1x2 display */}
          <div className="column">
            <div className="input-box">
              <label htmlFor="school">School</label>
                  <div className="form-select-box">
                    <select name="school" onChange={handleInputChange}>
                      <option>Berklee College of Music</option>
                      <option>The Royal Academy of Music</option>
                      <option>The Julliard School</option>
                      <option>Yale School of Music</option>
                    </select>
                    <div className="text-danger">{errorMessages.school}</div>
                </div>
            </div>

                <div className="input-box">
                  <label htmlFor="instrument">Instrument</label>
                  <div className="form-select-box">
                    <select name="instrument" onChange={handleInputChange}>
                      <option>Piano</option>
                      <option>Trombone</option>
                      <option>Cello</option>
                      <option>Violin</option>
                      <option>Tuba</option>
                      <option>Brass</option>
                    </select>
                    <div className="text-danger">{errorMessages.instrument}</div>
                  </div>
                </div>
            </div>

          {/* Course input box*/}
          <div className="input-box">
              <label htmlFor="Course">Course</label>
              <input type="text" id="Course" name="course" placeholder="Piano Techniques" onChange={handleInputChange} />
              <div className="text-danger">{errorMessages.course}</div>
            </div>

          {/* Password input box*/}
            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="password" id="Password" name="password" placeholder="Music123" onChange={handleInputChange} />
              <div className="text-danger">{errorMessages.password}</div>
            </div>

          {/* Login button */}
            <div className="form-login">
              <a href="/MSL.RMIT/#/login" className="login-link right-align">Already have an account? Log in</a>
            </div>

            {/* Signup button */}
            <button className="signup-button" onClick={handleSignUp}>SIGN UP</button>

            {/* For demo only */}
            <a className="signup-button" href='/MSL.RMIT/#/home'>Demo signup</a>
        </form>

      </section>
    </div>
  </div>
  );
}

export default StudentSignupForm;