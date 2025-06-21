
// // src/api.js - Fonctions pour communiquer avec l'API
// import axios from 'axios';

// // URL de base de l'API
// // const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7860';
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';


// // Créer l'instance axios
// const api = axios.create({
//     baseURL: API_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// // Fonction pour analyser une image de tuberculose (modèle v1)
// export const analyzeTuberculosisV1 = async (imageFile) => {
//     try {
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         const response = await api.post('/api/analyze/tuberculosis/v1', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de l\'analyse (TB v1):', error);
//         throw error;
//     }
// };

// // Fonction pour analyser une image de tuberculose (modèle v2)
// export const analyzeTuberculosisV2 = async (imageFile) => {
//     try {
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         const response = await api.post('/api/analyze/tuberculosis/v2', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de l\'analyse (TB v2):', error);
//         throw error;
//     }
// };

// // Fonction pour analyser une image de pneumonie
// export const analyzePneumonia = async (imageFile) => {
//     try {
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         const response = await api.post('/api/analyze/pneumonia', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });

//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de l\'analyse (pneumonie):', error);
//         throw error;
//     }
// };

// // Fonction pour obtenir des informations sur une maladie
// export const getDiseaseInfo = async (disease, topic) => {
//     try {
//         const response = await api.get(`/api/disease-info/${disease}/${topic}`);
//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de la récupération des informations:', error);
//         throw error;
//     }
// };

// // Fonction pour obtenir les membres de l'équipe
// export const getTeamMembers = async () => {
//     try {
//         const response = await api.get('/api/team');
//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de la récupération de l\'équipe:', error);
//         throw error;
//     }
// };

// // Fonction pour obtenir les informations sur les modèles
// export const getModelsInfo = async () => {
//     try {
//         const response = await api.get('/api/models-info');
//         return response.data;
//     } catch (error) {
//         console.error('Erreur lors de la récupération des modèles:', error);
//         throw error;
//     }
// };

// export default {
//     analyzeTuberculosisV1,
//     analyzeTuberculosisV2,
//     analyzePneumonia,
//     getDiseaseInfo,
//     getTeamMembers,
//     getModelsInfo
// };

