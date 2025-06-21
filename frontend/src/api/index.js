// src/api/index.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

export const getTeamMembers = async () => {
    const response = await api.get('/api/team');
    return response.data.team;
};

export const getModelsInfo = async () => {
    const response = await api.get('/api/models-info');
    return response.data.models;
};

export default { getTeamMembers, getModelsInfo };
