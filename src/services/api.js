import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log('Backend URL:', backendUrl);

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const auth = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  logout: () => api.get('/auth/logout'),
  getMe: () => api.get('/auth/me'),
};

export const profile = {
  getProfile: () => api.get('/profile'),
  updateProfile: (data) => api.put('/profile', data),
};

export const quiz = {
  getAnswers: () => api.get('/quiz/answers'),
};

export default api; 