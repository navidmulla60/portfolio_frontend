import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8000/api/',
// });

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? 'portfoliobackend-production-a8a7.up.railway.app'  // Get this from Railway dashboard
    : 'http://localhost:8000',
});

export const getProjects = () => api.get('projects/');
export const getProject = (id) => api.get(`projects/${id}/`);
export const getExperiences = () => api.get('experience/');
export const getSkills = () => api.get('skills/');
export const getPublications = () => api.get('publications/');
export const getProfiles = () => api.get('profile/'); 

export default api;