import axios from 'axios';

const api = axios.create({
    baseURL: '/api/', // Proxy handles prefix
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

export const fetchCourses = async () => {
    const response = await api.get('courses/');
    return response.data;
};
