import MSLLogo from '../assets/Logo.png';
import '../index.css';

function StudentSignupForm() {
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
              <input type="text" id="firstName" placeholder="Dayana" />
          </div>

            <div className="input-box">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Torres" />
            </div>
        </div>

        {/* Email input box*/}
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" />
            </div>

          {/* Select boxes wrapped in column container for 1x2 display */}
          <div className="column">
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
            </div>

                <div className="input-box">
                  <label htmlFor="instrument">Instrument</label>
                  <div className="form-select-box">
                    <select>
                      <option>Piano</option>
                      <option>Trombone</option>
                      <option>Cello</option>
                      <option>Violin</option>
                      <option>Tuba</option>
                      <option>Brass</option>
                    </select>
                  </div>
                </div>
            </div>

          {/* Course input box*/}
          <div className="input-box">
              <label htmlFor="Course">Course</label>
              <input type="text" id="Course" placeholder="Piano Techniques" />
            </div>

          {/* Password input box*/}
            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="text" id="Password" placeholder="Music123" />
            </div>

          {/* Logout button */}
            <div className="form-login">
              <a href="/login" className="login-link right-align">Already have an account? Log in</a>
            </div>

            {/* Signup button */}
            <button className="signup-button">SIGN UP</button>

            {/* For demo only */}
            <a className="signup-button" href='/home'>Demo signup</a>
        </form>

      </section>
    </div>
  </div>
  );
}

export default StudentSignupForm;