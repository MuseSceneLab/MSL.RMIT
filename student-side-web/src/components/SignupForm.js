import MSLLogo from '../assets/Logo.png';
import '../index.css';

function SignupForm() {
  return (
    /* Start of Container */
  <div className="signup-form">
    <div className="form-box">
      <img /* Image */
        className="form-logo"
        src={MSLLogo} alt="Logo"
      />

      {/* Form Container */}
      <section class="form-container">
        <form action="#" class="form">
        {/* First/surname input boxes wrapped in column container for 1x2 display */}
        <div class="column"> 
          <div class="input-box">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Dayana" />
          </div>

            <div class="input-box">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Torres" />
            </div>
        </div>

        {/* Email input box*/}
            <div class="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" />
            </div>

          {/* Select boxes wrapped in column container for 1x2 display */}
          <div class="column">
            <div class="input-box">
              <label htmlFor="school">School</label>
                  <div class="form-select-box">
                    <select>
                      <option>Berklee College of Music</option>
                      <option>The Royal Academy of Music</option>
                      <option>The Julliard School</option>
                      <option>Yale School of Music</option>
                    </select>
                </div>
            </div>

                <div class="input-box">
                  <label htmlFor="instrument">Instrument</label>
                  <div class="form-select-box">
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
          <div class="input-box">
              <label htmlFor="Course">Course</label>
              <input type="text" id="Course" placeholder="Piano Techniques" />
            </div>

          {/* Password input box*/}
            <div class="input-box">
              <label htmlFor="Password">Password</label>
              <input type="text" id="Password" placeholder="Music123" />
            </div>

          {/* Logout button */}
            <div class="form-login">
              <p>Already have an account? </p> <a href="/student-login" class="login-link">Log in</a>
            </div>

            {/* Signup button */}
            <button class="signup-button">SIGN UP</button>

            {/* For demo only */}
            <a class="signup-button" href='/student-home'>Demo signup</a>
        </form>

      </section>
    </div>
  </div>
  );
}

export default SignupForm;