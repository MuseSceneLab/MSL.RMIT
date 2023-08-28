import React, { useState } from 'react';
import StudentLoginForm from '../components/StudentLoginForm';
import ProfessorLoginForm from '../components/ProfessorLoginForm';

function Login() {

  // State for login form
  const userRole = localStorage.getItem('userRole');

  // State for email input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Handle login button click
  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button clicked');
  };

  if (userRole === 'Student') {
    return (
      <StudentLoginForm />
    );
  } else if (userRole === 'Professor') {
    return (
      <ProfessorLoginForm />
    )
  }
}

export default Login;
