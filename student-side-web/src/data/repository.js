import axios from 'axios';

const CREATE_NEW_ACCOUNT_API_URL = 'https://9u3740ygj0.execute-api.ap-southeast-2.amazonaws.com/default/'
const STUDENT_LOG_IN_API_URL = "https://n344d790f2.execute-api.ap-southeast-2.amazonaws.com/default/students/login"
const PROFESSOR_SIGN_UP_API_URL = "https://dfwcgm8zwi.execute-api.ap-southeast-2.amazonaws.com/PROFTEST2/professors"
const PROFESSOR_LOG_IN_API_URL = "https://dfwcgm8zwi.execute-api.ap-southeast-2.amazonaws.com/PROFTEST2/professors/login"

const TEST_PROF_SIGNUP_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/"
const TEST_PROF_LOGIN_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/login"
const GET_PROFESSOR_BY_EMAIL_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/professor"

// Student sign up post request
async function createStudentAccount(user) {
    const response = await axios.post(CREATE_NEW_ACCOUNT_API_URL + 'create_new_student', user);
    return response.data;
}

// Professor sign up put request
async function createProfessorAccount(user) {
    const response = await axios.post(TEST_PROF_SIGNUP_API_URL, user);
    return response.data;
}

// Student log in post request
async function studentLogIn(credentials) {
    const response = await axios.post(STUDENT_LOG_IN_API_URL, credentials);
    return response.data;
}

// Professor log in post request
async function professorLogIn(credentials) {
    const response = await axios.post(TEST_PROF_LOGIN_API_URL, credentials);
    return response.data;
}

// Get professor by email
async function getProfessorByEmail(email) {
    const response = await axios.get(GET_PROFESSOR_BY_EMAIL_API_URL, { params: { email: email } });
    return response.data;
}

export {
    createStudentAccount, createProfessorAccount, studentLogIn, professorLogIn, getProfessorByEmail
};