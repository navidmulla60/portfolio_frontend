import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const getProjects = () => api.get('projects/');
export const getProject = (id) => api.get(`projects/${id}/`);
export const getExperiences = () => api.get('experience/');
export const getSkills = () => api.get('skills/');
export const getPublications = () => api.get('publications/');
export const getProfiles = () => api.get('profile/'); 

export default api;