import axios from 'axios';

const API_URL = 'https://q0p70qjhod.execute-api.ap-southeast-2.amazonaws.com/';

export async function testData()  {
    const response = await axios.get(API_URL + 'Test');
    const data = response.data;
    return data;
}