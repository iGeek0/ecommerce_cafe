import axios from 'axios';
const URL_ROOT = import.meta.env.VITE_API_URL;
const loginService = async (data) => {
    return axios.post(`${URL_ROOT}/login`, data);
};

const registerService = async (data) => {
    return axios.post(`${URL_ROOT}/users`, data);
};

const getProfile = async () => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_API_TOKEN_KEY)}` }
    };
    return axios.get(`${URL_ROOT}/users/profile`, config);
};

const verifyingTokenService = async () => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_API_TOKEN_KEY)}` }
    };
    return axios.get(`${URL_ROOT}/verify`, config);
};




export { loginService, registerService, getProfile, verifyingTokenService };

