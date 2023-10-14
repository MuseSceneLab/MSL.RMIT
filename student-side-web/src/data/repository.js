import axios from 'axios';

const CREATE_NEW_ACCOUNT_API_URL = 'https://9u3740ygj0.execute-api.ap-southeast-2.amazonaws.com/default/'
const STUDENT_LOG_IN_API_URL = "https://n344d790f2.execute-api.ap-southeast-2.amazonaws.com/default/students/login"

const TEST_PROF_SIGNUP_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/"
const TEST_PROF_LOGIN_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/login"
const GET_PROFESSOR_BY_EMAIL_API_URL = "https://klxezq51s2.execute-api.ap-southeast-2.amazonaws.com/testdeploy/professor"

/**
 * Sends a POST request to create a new student account.
 * @param {Object} user - The user object containing the student's information.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
async function createStudentAccount(user) {
    const response = await axios.post(CREATE_NEW_ACCOUNT_API_URL + 'create_new_student', user);
    return response.data;
}

/**
 * Sends a POST request to create a new professor account.
 * @param {Object} user - The user object containing the professor's information.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
async function createProfessorAccount(user) {
    const response = await axios.post(TEST_PROF_SIGNUP_API_URL, user);
    return response.data;
}

/**
 * Sends a POST request to log in a student.
 * @param {Object} credentials - The credentials object containing the student's email and password.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
async function studentLogIn(credentials) {
    const response = await axios.post(STUDENT_LOG_IN_API_URL, credentials);
    return response.data;
}

/**
 * Sends a POST request to log in a professor.
 * @param {Object} credentials - The credentials object containing the professor's email and password.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
async function professorLogIn(credentials) {
    const response = await axios.post(TEST_PROF_LOGIN_API_URL, credentials);
    return response.data;
}

/**
 * Sends a GET request to retrieve a professor by email.
 * @param {string} email - The email of the professor to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the response data.
 */
async function getProfessorByEmail(email) {
    const response = await axios.get(GET_PROFESSOR_BY_EMAIL_API_URL, { params: { email: email } });
    return response.data;
}

export {
    createStudentAccount, createProfessorAccount, studentLogIn, professorLogIn, getProfessorByEmail
};