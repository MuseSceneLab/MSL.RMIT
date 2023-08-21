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
      <section class="form-container">
        <form action="#" class="form">
        <div class="column"> {/* First two input boxes wrapped in column container for 1x2 display */}
          <div class="input-box">
              <label htmlFor="firstName">Dayana</label>
              <input type="text" id="firstName" placeholder="First Name" />
          </div>

            <div class="input-box">
              <label htmlFor="lastName">Torres</label>
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
        </div>

            <div class="input-box">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="dayana@example.com" />
            </div>

          {/* Same occurence as above with column box but with select types*/}
          <div class="column">
            <div class="input-box">
              <label htmlFor="school">School</label>
                  <div class="form-select-box">
                    <select>
                      <option>Berklee College of Music</option>
                    </select>
                </div>
            </div>

                <div class="input-box">
                  <label htmlFor="instrument">Instrument</label>
                  <div class="form-select-box">
                    <select>
                      <option>Piano</option>
                    </select>
                  </div>
                </div>
            </div>

          <div class="input-box">
              <label htmlFor="Course">Piano Techniques</label>
              <input type="text" id="Course" placeholder="Course" />
            </div>

            <div class="input-box">
              <label htmlFor="Password">Music123</label>
              <input type="text" id="Password" placeholder="Password" />
            </div>

            <div class="form-login">
              <p>Already have an account? </p> <a href="login.js" class="login-link">Log in</a>
            </div>

            <button class="signup">SIGN UP</button>
        </form>

      </section>
    </div>
  </div>
  );
}

export default SignupForm;