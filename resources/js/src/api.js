const axios = window.axios;

const BASE_API_URL = 'http://localhost:8000/api'

export default {
    getAllUsers: () =>
        axios.get(`${BASE_API_URL}/artuser`),
    getOneUser: (id) =>
        axios.get(`${BASE_API_URL}/artuser/${id}/edit`),
    addUser: (post) =>
        axios.post(`${BASE_API_URL}/artuser`, post),
    updateUser: (post,  id) =>
        axios.put(`${BASE_API_URL}/artuser/${id}`, post),
    deleteUser: (id) =>
        axios.delete(`${BASE_API_URL}/artuser/${id}`),
    
}