import axios from 'axios';

const BASE_URL = 'http://localhost:8080/MCB-API';
const requestHeaders = {
    'Content-Type': 'application/json'
};

// functions http get requesting to retrieve all users from the database
function findAllUsers() {
  const url = `${BASE_URL}/users`;
  return axios.get(url, {headers: requestHeaders}).then(response => response.data);
}

function findUserById(userId) {
    const url = `${BASE_URL}/users/${userId}`;
    return axios.get(url, {headers: requestHeaders}).then(response => response.data);
}

function addUser(username, email, password) {
    const url = `${BASE_URL}/users/new`;
    return axios.post(url, {
        username: username,
        email: email,
        password: password
    },  {headers: requestHeaders})
    .then(response => response.data);
}

function updateUser(userId, username, email, password) {
    const url = `${BASE_URL}/users/${userId}`;
    return axios.put(url, {
        username: username,
        email: email,
        password: password
    },  {headers: requestHeaders})
    .then(response => response.data);
}

function deleteUser(userId) {
  const url = `${BASE_URL}/users/${userId}`;
  return axios.delete(url, {headers: requestHeaders}).then(response => response.status);
}

export{findAllUsers, findUserById, addUser, updateUser, deleteUser};