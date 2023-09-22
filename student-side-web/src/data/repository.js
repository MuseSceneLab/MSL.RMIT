import axios from 'axios';

const CREATE_NEW_ACCOUNT_API_URL = 'https://9u3740ygj0.execute-api.ap-southeast-2.amazonaws.com/default/'
const STUDENT_LOG_IN_API_URL = "https://n344d790f2.execute-api.ap-southeast-2.amazonaws.com/default/students/login"
const PROFESSOR_SIGN_UP_API_URL = "https://dfwcgm8zwi.execute-api.ap-southeast-2.amazonaws.com/PROFTEST2/professors"
const PROFESSOR_LOG_IN_API_URL = "https://dfwcgm8zwi.execute-api.ap-southeast-2.amazonaws.com/PROFTEST2/professors/login"

async function createStudentAccount(user) {
    const response = await axios.post(CREATE_NEW_ACCOUNT_API_URL + 'create_new_student', user);
    return response.data;
}

async function createProfessorAccount(user) {
    const response = await axios.put(PROFESSOR_SIGN_UP_API_URL, user);
    return true;
}

async function studentLogIn(credentials) {
    const response = await axios.post(STUDENT_LOG_IN_API_URL, credentials);
    return response.data;
}

async function professorLogIn(credentials) {
    const response = await axios.post(PROFESSOR_LOG_IN_API_URL, credentials);
    console.log("response:" + response)
    return response.data;
}

export {
    createStudentAccount, createProfessorAccount, studentLogIn, professorLogIn
};