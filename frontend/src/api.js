import axios from 'axios';

// Helper function to get CSRF token from cookies
const getCSRFToken = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
  return cookieValue;
};

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'https://portfoliobackend-production-a8a7.up.railway.app/api/'  // Added https:// and /api/
    : 'http://localhost:8000/api/',
  withCredentials: true,  // Required for CSRF and session cookies
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': getCSRFToken()  // Will be dynamically set for modifying requests
  }
});

// Add a request interceptor to update CSRF token before mutating requests
api.interceptors.request.use(config => {
  if (['post', 'put', 'patch', 'delete'].includes(config.method.toLowerCase())) {
    config.headers['X-CSRFToken'] = getCSRFToken();
  }
  return config;
});

export const getProjects = () => api.get('projects/');
export const getProject = (id) => api.get(`projects/${id}/`);
export const getExperiences = () => api.get('experience/');
export const getSkills = () => api.get('skills/');
export const getPublications = () => api.get('publications/');
export const getProfiles = () => api.get('profile/');

export default api;