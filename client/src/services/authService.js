import api from './api';

const authService = {
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },
    register: async (name, email, password) => {
        const response = await api.post('/auth/register', { name, email, password });
        return response.data;
    },
    getProfile: async () => {
        const response = await api.get('/users/me');
        return response.data;
    },
    getAllUsers: async () => {
        const response = await api.get('/users');
        return response.data;
    }
};

export default authService;
