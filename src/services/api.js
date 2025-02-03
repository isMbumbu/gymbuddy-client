import axios from 'axios';

const API_URL = 'https://simple-gymbuddy.onrender.com'; // Replace with your backend URL

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = (data) => apiClient.post('/sign-up', data);
export const logIn = (data) => apiClient.post('/login', data);
export const createWorkout = (data, token) =>
  apiClient.post('/workout-plan', data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getClasses = (token) =>
  apiClient.get('/members', {
    headers: { Authorization: `Bearer ${token}` },
  });

export default apiClient;
