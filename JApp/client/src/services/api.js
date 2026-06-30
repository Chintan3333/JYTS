import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://jyts-app-backend.onrender.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const celebritiesApi = {
  list: () => apiClient.get('/api/celebrities'),
  getById: (id) => apiClient.get(`/api/celebrities/${id}`),
  create: (payload) => apiClient.post('/api/celebrities', payload),
  update: (id, payload) => apiClient.put(`/api/celebrities/${id}`, payload),
  delete: (id) => apiClient.delete(`/api/celebrities/${id}`),
  analysis: (category = 'all') =>
    apiClient.get(`/api/celebrities/analysis/planetary-positions?category=${encodeURIComponent(category)}`),
};

export const searchApi = {
  planetPosition: (body) => apiClient.post('/api/search/planet-position', body),
  conjunction: (body) => apiClient.post('/api/search/conjunction', body),
  aspect: (body) => apiClient.post('/api/search/aspect', body),
  houseLord: (body) => apiClient.post('/api/search/house-lord', body),
  planetInHouse: (body) => apiClient.post('/api/search/planet-in-house', body),
  ascendant: (body) => apiClient.post('/api/search/ascendant', body),
};

export { API_BASE_URL };
