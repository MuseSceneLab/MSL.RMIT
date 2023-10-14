/**
 * Renders the appropriate signup form based on the user's role.
 * @returns {JSX.Element} The appropriate signup form component.
 */
import React from 'react';
import StudentSignupForm from '../components/StudentSignupForm';
import ProfessorSignupForm from '../components/ProfessorSignupForm';

const Signup = () => {
    let userRole = "";

    if (localStorage.getItem('userRole') !== null) {
        userRole = localStorage.getItem('userRole');
    } else {
        userRole = "";
    }
    
    if (userRole === 'Student') {
        return (
            <StudentSignupForm />
        );
    }
    else if (userRole === 'Professor') {
        return (
            <ProfessorSignupForm />
        )
    }
}   

export default Signup;
