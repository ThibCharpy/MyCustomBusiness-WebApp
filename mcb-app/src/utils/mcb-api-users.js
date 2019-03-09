import axios from 'axios';

const BASE_URL = 'http://localhost:8080/MCB-API';
const requestHeaders = {
    'Content-Type': 'application/json'
};

// functions http get requesting to retrieve all users from the database
async function findAllUsers() {
    const url = `${BASE_URL}/users`;
    const response = await axios.get(url, { headers: requestHeaders });
    return response.data;
}

async function findUserById(userId) {
    const url = `${BASE_URL}/users/${userId}`;
    const response = await axios.get(url, { headers: requestHeaders });
    return response.data;
}

async function addUser(username, email, password) {
    const url = `${BASE_URL}/users/new`;
    const response = await axios.post(url, {
        username: username,
        email: email,
        password: password
    }, { headers: requestHeaders });
    return response.data;
}

async function updateUser(userId, username, email, password) {
    const url = `${BASE_URL}/users/${userId}`;
    const response = await axios.put(url, {
        username: username,
        email: email,
        password: password
    }, { headers: requestHeaders });
    return response.data;
}

async function deleteUser(userId) {
    const url = `${BASE_URL}/users/${userId}`;
    const response = await axios.delete(url, { headers: requestHeaders });
    return response.status;
}

export{findAllUsers, findUserById, addUser, updateUser, deleteUser};