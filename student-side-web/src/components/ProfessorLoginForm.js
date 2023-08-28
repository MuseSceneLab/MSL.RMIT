import MSLLogo from '../assets/Logo.png';
import '../index.css';

const ProfessorLoginForm = () => {
    let userRole = "";

    if (localStorage.getItem('userRole') !== null) {
        userRole = localStorage.getItem('userRole');
    }
    else {
        userRole = "";
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
                    <div className="input-box">
                      <label htmlFor="email">Email</label>
                      <input type="text" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="input-box">
                      <label htmlFor="Password">Password</label>
                      <input type="password" id="Password" placeholder="Enter your password" />
                    </div>

                    <div className="professor-signup">
                    <p><a href="/signup" className="login-link">Don't have an account? Sign up</a></p>
                    </div>

                    <div className="form-login">
                      <label className="remember-me">
                        <input type="checkbox" />
                        <span className="checkbox-label-text">Remember Me</span>
                      </label>
                      <p><a href="/signup" className="login-link">Forgot your password?</a></p>
                    </div>

                    <button className="signup-button">LOG IN</button>
                  </form>
                </section>
              </div>
            </div>
    )

}

export default ProfessorLoginForm;