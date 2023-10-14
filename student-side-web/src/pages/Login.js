import StudentLoginForm from '../components/StudentLoginForm';
import ProfessorLoginForm from '../components/ProfessorLoginForm';

/**
 * Login page component
 * @returns {JSX.Element} Login page JSX element
 */
function Login() {

  // State for login form
  const userRole = localStorage.getItem('userRole');

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
