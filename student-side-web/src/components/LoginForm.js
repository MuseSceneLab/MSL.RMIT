import React, { useState } from 'react';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
  };

  return (
    <div className="bg">
      <div className="center-box">
        <div className="icon">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="My Icon" className="icon-img" />
        </div>
        <p className="email-text">Email</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
        <p className="password-text">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
        />
        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            id="rememberMe"
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p className="sign-up-text">Don't have an account? <a href="#">Sign Up</a></p>
        <div className="forgot-password">
          <button className="forgot-password-button">Forgot Password</button>
        </div>
        <div className="login-button">
          <button onClick={handleLogin} className="login-button">LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
