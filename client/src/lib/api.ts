import axios from 'axios';
import { getAccessToken, getRefreshToken } from './auth';

const api = axios.create({
    baseURL: 'https://api.example.com', // Change to your API URL
});

api.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {  // if unauthorized
        const refreshToken = getRefreshToken();
        if (refreshToken) {
            // Attempt to get a new access token using the refresh token
            try {
                const response = await axios.post('https://api.example.com/refresh-token', { refreshToken });
                const { accessToken } = response.data;
                // Save new access token and set it to the original request
                // function to save access token (not shown in this code)
                setAccessToken(accessToken);
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                // Handle refresh token failure (redirect to login, for instance)
                return Promise.reject(refreshError);
            }
        }
    }
    return Promise.reject(error);
});

export default api;