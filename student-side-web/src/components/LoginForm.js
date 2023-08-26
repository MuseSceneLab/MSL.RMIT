import React, { useState } from 'react';
import MSLLogo from '../assets/Logo.png';
import '../index.css';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
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
              <input type="text" id="email" placeholder="Enter your email" />
            </div>

            <div className="input-box">
              <label htmlFor="Password">Password</label>
              <input type="password" id="Password" placeholder="Enter your password" />
            </div>

           <div className="row-container">
             <div className="remember-me">
               <div className="checkbox-container">
                 <input type="checkbox" id="rememberMe" className="remember-me-checkbox" />
               </div>
               <div className="text-container">
                 <label htmlFor="rememberMe" className="remember-me-label">
                   Remember Me
                 </label>
               </div>
             </div>
             <div className="form-login">
               <p>Don't have an account? <a href="/student-signup" className="login-link">Sign up</a></p>
             </div>
           </div>

            <div className="form-login">
                <p> </p> <a href="/student-signup" className="login-link">Forgot Password?</a>
            </div>

            <button className="signup-button">LOG IN</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default LoginForm;
