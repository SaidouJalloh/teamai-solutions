// import React, { useState, useEffect } from 'react';
// import {
//     LayoutDashboard,
//     Users,
//     BookOpen,
//     Newspaper,
//     Brain,
//     Mail,
//     BarChart3,
//     Settings,
//     Plus,
//     Edit,
//     Trash2,
//     Save,
//     X,
//     Eye,
//     Download
// } from 'lucide-react';
// import './AdminDashboard.css';
// const API_BASE_URL = "http://localhost:8000";

// const AdminDashboard = () => {
//     const [activeTab, setActiveTab] = useState('dashboard');
//     const [showModal, setShowModal] = useState(false);
//     const [modalType, setModalType] = useState('');
//     const [editingItem, setEditingItem] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // États pour chaque section
//     const [formations, setFormations] = useState([]);
//     const [news, setNews] = useState([]);
//     const [models, setModels] = useState([]);
//     const [contacts, setContacts] = useState([]);
//     const [teamMembers, setTeamMembers] = useState([]);

//     // Statistiques du dashboard
//     const [stats, setStats] = useState({
//         totalFormations: 0,
//         totalNews: 0,
//         totalModels: 0,
//         totalContacts: 0,
//         totalUsers: 0,
//         totalAnalyses: 0
//     });

//     useEffect(() => {
//         loadData();
//     }, []);

//     // Fonction pour calculer les stats
//     const updateStats = (formationsData, newsData, modelsData, contactsData) => {
//         setStats({
//             totalFormations: formationsData.length,
//             totalNews: newsData.length,
//             totalModels: modelsData.length,
//             totalContacts: contactsData.length,
//             totalUsers: 1250,
//             totalAnalyses: 5670
//         });
//     };

//     const loadData = async () => {
//         setLoading(true);
//         try {
//             await Promise.all([
//                 loadFormations(),
//                 loadNews(),
//                 loadModels(),
//                 loadTeam(),
//                 loadContacts()
//             ]);
//         } catch (error) {
//             console.error('Erreur lors du chargement des données:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const loadFormations = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/api/formations`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const formationsData = Array.isArray(data) ? data : data.formations || [];
//                 setFormations(formationsData);
//                 return formationsData;
//             } else {
//                 const fallbackData = [
//                     { id: 1, titre: "Introduction à l'IA", niveau: "Débutant", date: "2024-07-20", status: "active" },
//                     { id: 2, titre: "IA avancée pour la santé", niveau: "Avancé", date: "2024-09-15", status: "active" }
//                 ];
//                 setFormations(fallbackData);
//                 return fallbackData;
//             }
//         } catch (error) {
//             console.error('Erreur formations:', error);
//             const fallbackData = [
//                 { id: 1, titre: "Introduction à l'IA", niveau: "Débutant", date: "2024-07-20", status: "active" },
//                 { id: 2, titre: "IA avancée pour la santé", niveau: "Avancé", date: "2024-09-15", status: "active" }
//             ];
//             setFormations(fallbackData);
//             return fallbackData;
//         }
//     };

//     const loadNews = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/api/news`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const newsData = Array.isArray(data) ? data : data.news || [];
//                 setNews(newsData);
//                 return newsData;
//             } else {
//                 const fallbackData = [
//                     { id: 1, title: "Nouveau modèle IA", category: "innovation", date: "2024-06-01", status: "published" },
//                     { id: 2, title: "Formation ML", category: "formation", date: "2024-05-28", status: "draft" }
//                 ];
//                 setNews(fallbackData);
//                 return fallbackData;
//             }
//         } catch (error) {
//             console.error('Erreur news:', error);
//             const fallbackData = [
//                 { id: 1, title: "Nouveau modèle IA", category: "innovation", date: "2024-06-01", status: "published" }
//             ];
//             setNews(fallbackData);
//             return fallbackData;
//         }
//     };

//     const loadModels = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/api/v1/models`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const modelsData = data.models || [];
//                 setModels(modelsData);
//                 return modelsData;
//             } else {
//                 const fallbackData = [
//                     { id: 1, name: "TuberculosisDetect v2.0", model_type: "tuberculosis_v2", accuracy: 95.8, status: "production" },
//                     { id: 2, name: "PneumoniaDetect Pro", model_type: "pneumonia", accuracy: 93.4, status: "production" }
//                 ];
//                 setModels(fallbackData);
//                 return fallbackData;
//             }
//         } catch (error) {
//             console.error('Erreur models:', error);
//             const fallbackData = [
//                 { id: 1, name: "TuberculosisDetect v2.0", model_type: "tuberculosis_v2", accuracy: 95.8, status: "production" }
//             ];
//             setModels(fallbackData);
//             return fallbackData;
//         }
//     };

//     const loadTeam = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/api/team`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const teamData = Array.isArray(data) ? data : data.members || [];
//                 setTeamMembers(teamData);
//                 return teamData;
//             } else {
//                 const fallbackData = [
//                     { id: 1, name: "Dr. Sarah Johnson", role: "CEO & Co-fondatrice", department: "Direction", status: "active" },
//                     { id: 2, name: "Alex Chen", role: "Lead AI Engineer", department: "Technique", status: "active" }
//                 ];
//                 setTeamMembers(fallbackData);
//                 return fallbackData;
//             }
//         } catch (error) {
//             console.error('Erreur team:', error);
//             const fallbackData = [
//                 { id: 1, name: "Dr. Sarah Johnson", role: "CEO & Co-fondatrice", department: "Direction", status: "active" }
//             ];
//             setTeamMembers(fallbackData);
//             return fallbackData;
//         }
//     };

//     const loadContacts = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/api/contact/messages`);
//             if (response.ok) {
//                 const data = await response.json();
//                 const contactsData = Array.isArray(data) ? data : data.messages || [];
//                 setContacts(contactsData);
//                 return contactsData;
//             } else {
//                 const fallbackData = [
//                     { id: 1, name: "Jean Dupont", email: "jean@example.com", subject: "Formation", date: "2024-06-04", status: "new" },
//                     { id: 2, name: "Marie Martin", email: "marie@example.com", subject: "Consulting", date: "2024-06-03", status: "replied" }
//                 ];
//                 setContacts(fallbackData);
//                 return fallbackData;
//             }
//         } catch (error) {
//             console.error('Erreur contacts:', error);
//             const fallbackData = [
//                 { id: 1, name: "Jean Dupont", email: "jean@example.com", subject: "Formation", date: "2024-06-04", status: "new" }
//             ];
//             setContacts(fallbackData);
//             return fallbackData;
//         }
//     };

//     // Fonctions CRUD
//     const saveFormation = async (formationData) => {
//         try {
//             const url = editingItem
//                 ? `${API_BASE_URL}/api/formations/${editingItem.id}`
//                 : `${API_BASE_URL}/api/formations`;

//             const method = editingItem ? 'PUT' : 'POST';

//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formationData)
//             });

//             if (response.ok) {
//                 await loadFormations();
//                 return true;
//             } else {
//                 throw new Error('Erreur lors de la sauvegarde');
//             }
//         } catch (error) {
//             console.error('Erreur sauvegarde formation:', error);
//             alert('Erreur lors de la sauvegarde');
//             return false;
//         }
//     };

//     const saveNews = async (newsData) => {
//         try {
//             const url = editingItem
//                 ? `${API_BASE_URL}/api/news/${editingItem.id}`
//                 : `${API_BASE_URL}/api/news`;

//             const method = editingItem ? 'PUT' : 'POST';

//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newsData)
//             });

//             if (response.ok) {
//                 await loadNews();
//                 return true;
//             } else {
//                 throw new Error('Erreur lors de la sauvegarde');
//             }
//         } catch (error) {
//             console.error('Erreur sauvegarde news:', error);
//             alert('Erreur lors de la sauvegarde');
//             return false;
//         }
//     };

//     const saveModel = async (modelData) => {
//         try {
//             const url = editingItem
//                 ? `${API_BASE_URL}/api/v1/models/${editingItem.id}`
//                 : `${API_BASE_URL}/api/v1/models`;

//             const method = editingItem ? 'PUT' : 'POST';

//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(modelData)
//             });

//             if (response.ok) {
//                 await loadModels();
//                 return true;
//             } else {
//                 throw new Error('Erreur lors de la sauvegarde');
//             }
//         } catch (error) {
//             console.error('Erreur sauvegarde model:', error);
//             alert('Erreur lors de la sauvegarde');
//             return false;
//         }
//     };

//     const saveTeamMember = async (memberData) => {
//         try {
//             const url = editingItem
//                 ? `${API_BASE_URL}/api/team/${editingItem.id}`
//                 : `${API_BASE_URL}/api/team`;

//             const method = editingItem ? 'PUT' : 'POST';

//             const response = await fetch(url, {
//                 method: method,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(memberData)
//             });

//             if (response.ok) {
//                 await loadTeam();
//                 return true;
//             } else {
//                 throw new Error('Erreur lors de la sauvegarde');
//             }
//         } catch (error) {
//             console.error('Erreur sauvegarde team:', error);
//             alert('Erreur lors de la sauvegarde');
//             return false;
//         }
//     };

//     const openModal = (type, item = null) => {
//         setModalType(type);
//         setEditingItem(item);
//         setShowModal(true);
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setModalType('');
//         setEditingItem(null);
//     };

//     const handleSave = async (data) => {
//         let success = false;

//         switch (modalType) {
//             case 'formation':
//                 success = await saveFormation(data);
//                 break;
//             case 'news':
//                 success = await saveNews(data);
//                 break;
//             case 'model':
//                 success = await saveModel(data);
//                 break;
//             case 'team':
//                 success = await saveTeamMember(data);
//                 break;
//             default:
//                 console.log('Saving:', modalType, data);
//                 success = true;
//         }

//         if (success) {
//             closeModal();
//         }
//     };

//     const handleDelete = async (type, id) => {
//         if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
//             return;
//         }

//         try {
//             let url = '';
//             switch (type) {
//                 case 'formation':
//                     url = `${API_BASE_URL}/api/formations/${id}`;
//                     break;
//                 case 'news':
//                     url = `${API_BASE_URL}/api/news/${id}`;
//                     break;
//                 case 'model':
//                     url = `${API_BASE_URL}/api/v1/models/${id}`;
//                     break;
//                 case 'team':
//                     url = `${API_BASE_URL}/api/team/${id}`;
//                     break;
//                 case 'contact':
//                     url = `${API_BASE_URL}/api/contact/messages/${id}`;
//                     break;
//             }

//             const response = await fetch(url, {
//                 method: 'DELETE'
//             });

//             if (response.ok) {
//                 await loadData();
//                 alert('Élément supprimé avec succès');
//             } else {
//                 throw new Error('Erreur lors de la suppression');
//             }
//         } catch (error) {
//             console.error('Erreur suppression:', error);
//             alert('Erreur lors de la suppression');
//         }
//     };

//     const renderDashboard = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
//                 <p className="text-gray-600">Vue d'ensemble de votre plateforme TeamAI Solutions</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-blue-100 rounded-lg">
//                             <BookOpen size={24} className="text-blue-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{formations.length}</h3>
//                             <p className="text-gray-600">Formations actives</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-green-100 rounded-lg">
//                             <Newspaper size={24} className="text-green-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{news.length}</h3>
//                             <p className="text-gray-600">Articles publiés</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-purple-100 rounded-lg">
//                             <Brain size={24} className="text-purple-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{models.length}</h3>
//                             <p className="text-gray-600">Modèles IA</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-orange-100 rounded-lg">
//                             <Users size={24} className="text-orange-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{teamMembers.length}</h3>
//                             <p className="text-gray-600">Membres équipe</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-indigo-100 rounded-lg">
//                             <BarChart3 size={24} className="text-indigo-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{stats.totalAnalyses}</h3>
//                             <p className="text-gray-600">Analyses effectuées</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="bg-white p-6 rounded-lg shadow-sm border">
//                     <div className="flex items-center">
//                         <div className="p-3 bg-red-100 rounded-lg">
//                             <Mail size={24} className="text-red-600" />
//                         </div>
//                         <div className="ml-4">
//                             <h3 className="text-2xl font-bold text-gray-900">{contacts.length}</h3>
//                             <p className="text-gray-600">Messages reçus</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow-sm border">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-4">Activité récente</h2>
//                 <div className="space-y-4">
//                     <div className="flex items-center">
//                         <div className="p-2 bg-green-100 rounded-lg">
//                             <Plus size={16} className="text-green-600" />
//                         </div>
//                         <div className="ml-4">
//                             <p className="text-gray-900"><strong>Backend connecté</strong> - API fonctionnelle</p>
//                             <small className="text-gray-500">Temps réel</small>
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <div className="p-2 bg-purple-100 rounded-lg">
//                             <Brain size={16} className="text-purple-600" />
//                         </div>
//                         <div className="ml-4">
//                             <p className="text-gray-900"><strong>{models.length} modèles</strong> disponibles</p>
//                             <small className="text-gray-500">Synchronisé</small>
//                         </div>
//                     </div>
//                     <div className="flex items-center">
//                         <div className="p-2 bg-blue-100 rounded-lg">
//                             <BookOpen size={16} className="text-blue-600" />
//                         </div>
//                         <div className="ml-4">
//                             <p className="text-gray-900"><strong>{formations.length} formations</strong> actives</p>
//                             <small className="text-gray-500">Mis à jour</small>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderFormations = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Gestion des Formations</h1>
//                 <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//                     onClick={() => openModal('formation')}
//                 >
//                     <Plus size={18} />
//                     Nouvelle formation
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="text-gray-500">Chargement...</div>
//                 </div>
//             ) : (
//                 <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Titre</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Niveau</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {formations.map(formation => (
//                                 <tr key={formation.id} className="border-t">
//                                     <td className="py-3 px-4">{formation.titre || formation.title}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                                             {formation.niveau || formation.level || 'Débutant'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">{formation.date}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                                             {formation.status || 'active'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => openModal('formation', formation)}
//                                                 className="p-2 text-blue-600 hover:bg-blue-100 rounded"
//                                             >
//                                                 <Edit size={16} />
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete('formation', formation.id)}
//                                                 className="p-2 text-red-600 hover:bg-red-100 rounded"
//                                             >
//                                                 <Trash2 size={16} />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );

//     const renderNews = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Gestion des Actualités</h1>
//                 <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//                     onClick={() => openModal('news')}
//                 >
//                     <Plus size={18} />
//                     Nouvel article
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="text-gray-500">Chargement...</div>
//                 </div>
//             ) : (
//                 <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Titre</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Catégorie</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {news.map(article => (
//                                 <tr key={article.id} className="border-t">
//                                     <td className="py-3 px-4">{article.title || article.titre}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                                             {article.category || 'Général'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">{article.date}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                                             {article.status || 'published'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => openModal('news', article)}
//                                                 className="p-2 text-blue-600 hover:bg-blue-100 rounded"
//                                             >
//                                                 <Edit size={16} />
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete('news', article.id)}
//                                                 className="p-2 text-red-600 hover:bg-red-100 rounded"
//                                             >
//                                                 <Trash2 size={16} />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );

//     const renderModels = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Gestion des Modèles IA</h1>
//                 <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//                     onClick={() => openModal('model')}
//                 >
//                     <Plus size={18} />
//                     Nouveau modèle
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="text-gray-500">Chargement...</div>
//                 </div>
//             ) : (
//                 <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Nom</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Précision</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {models.map(model => (
//                                 <tr key={model.id} className="border-t">
//                                     <td className="py-3 px-4">{model.name}</td>
//                                     <td className="py-3 px-4">{model.model_type || model.type}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="font-semibold text-green-600">
//                                             {model.accuracy}%
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                                             {model.status || 'production'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => openModal('model', model)}
//                                                 className="p-2 text-blue-600 hover:bg-blue-100 rounded"
//                                             >
//                                                 <Edit size={16} />
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete('model', model.id)}
//                                                 className="p-2 text-red-600 hover:bg-red-100 rounded"
//                                             >
//                                                 <Trash2 size={16} />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );

//     const renderContacts = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Messages de Contact</h1>
//                 <button className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
//                     <Download size={18} />
//                     Exporter
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="text-gray-500">Chargement...</div>
//                 </div>
//             ) : (
//                 <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Nom</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Sujet</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {contacts.map(contact => (
//                                 <tr key={contact.id} className="border-t">
//                                     <td className="py-3 px-4">{contact.name}</td>
//                                     <td className="py-3 px-4">{contact.email}</td>
//                                     <td className="py-3 px-4">{contact.subject}</td>
//                                     <td className="py-3 px-4">{contact.date}</td>
//                                     <td className="py-3 px-4">
//                                         <span className={`px-2 py-1 rounded-full text-sm ${contact.status === 'new'
//                                             ? 'bg-yellow-100 text-yellow-800'
//                                             : 'bg-green-100 text-green-800'
//                                             }`}>
//                                             {contact.status === 'new' ? 'Nouveau' : 'Répondu'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => openModal('contact', contact)}
//                                                 className="p-2 text-blue-600 hover:bg-blue-100 rounded"
//                                             >
//                                                 <Eye size={16} />
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete('contact', contact.id)}
//                                                 className="p-2 text-red-600 hover:bg-red-100 rounded"
//                                             >
//                                                 <Trash2 size={16} />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );

//     const renderTeam = () => (
//         <div className="p-8 bg-gray-50 min-h-screen">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Gestion de l'Équipe</h1>
//                 <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
//                     onClick={() => openModal('team')}
//                 >
//                     <Plus size={18} />
//                     Nouveau membre
//                 </button>
//             </div>

//             {loading ? (
//                 <div className="flex justify-center items-center h-64">
//                     <div className="text-gray-500">Chargement...</div>
//                 </div>
//             ) : (
//                 <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Nom</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Rôle</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Département</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
//                                 <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {teamMembers.map(member => (
//                                 <tr key={member.id} className="border-t">
//                                     <td className="py-3 px-4">{member.name || member.nom}</td>
//                                     <td className="py-3 px-4">{member.role || member.poste}</td>
//                                     <td className="py-3 px-4">{member.department || member.departement || 'N/A'}</td>
//                                     <td className="py-3 px-4">
//                                         <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                                             {member.status || 'active'}
//                                         </span>
//                                     </td>
//                                     <td className="py-3 px-4">
//                                         <div className="flex gap-2">
//                                             <button
//                                                 onClick={() => openModal('team', member)}
//                                                 className="p-2 text-blue-600 hover:bg-blue-100 rounded"
//                                             >
//                                                 <Edit size={16} />
//                                             </button>
//                                             <button
//                                                 onClick={() => handleDelete('team', member.id)}
//                                                 className="p-2 text-red-600 hover:bg-red-100 rounded"
//                                             >
//                                                 <Trash2 size={16} />
//                                             </button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );

//     const renderContent = () => {
//         switch (activeTab) {
//             case 'dashboard': return renderDashboard();
//             case 'formations': return renderFormations();
//             case 'news': return renderNews();
//             case 'models': return renderModels();
//             case 'contacts': return renderContacts();
//             case 'team': return renderTeam();
//             default: return renderDashboard();
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="w-64 bg-white shadow-lg">
//                 <div className="p-6 border-b">
//                     <h2 className="text-xl font-bold text-gray-900">TeamAI Admin</h2>
//                     <small className="text-green-600">Connecté au backend</small>
//                 </div>
//                 <nav className="p-4">
//                     <div className="space-y-2">
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'dashboard'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('dashboard')}
//                         >
//                             <LayoutDashboard size={20} />
//                             Tableau de bord
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'formations'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('formations')}
//                         >
//                             <BookOpen size={20} />
//                             Formations ({formations.length})
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'news'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('news')}
//                         >
//                             <Newspaper size={20} />
//                             Actualités ({news.length})
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'models'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('models')}
//                         >
//                             <Brain size={20} />
//                             Modèles IA ({models.length})
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'team'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('team')}
//                         >
//                             <Users size={20} />
//                             Équipe ({teamMembers.length})
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'contacts'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('contacts')}
//                         >
//                             <Mail size={20} />
//                             Messages ({contacts.length})
//                         </button>
//                         <button
//                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'settings'
//                                 ? 'bg-blue-100 text-blue-700 font-medium'
//                                 : 'text-gray-700 hover:bg-gray-100'
//                                 }`}
//                             onClick={() => setActiveTab('settings')}
//                         >
//                             <Settings size={20} />
//                             Paramètres
//                         </button>
//                     </div>
//                 </nav>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 overflow-auto">
//                 {renderContent()}
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <Modal
//                     type={modalType}
//                     item={editingItem}
//                     onSave={handleSave}
//                     onClose={closeModal}
//                 />
//             )}
//         </div>
//     );
// };

// // Composant Modal
// const Modal = ({ type, item, onSave, onClose }) => {
//     const [formData, setFormData] = useState(item || {});
//     const [saving, setSaving] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSaving(true);

//         try {
//             await onSave(formData);
//         } catch (error) {
//             console.error('Erreur lors de la sauvegarde:', error);
//         } finally {
//             setSaving(false);
//         }
//     };

//     const renderFormFields = () => {
//         switch (type) {
//             case 'formation':
//                 return (
//                     <>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={formData.titre || formData.title || ''}
//                                 onChange={(e) => setFormData({ ...formData, titre: e.target.value, title: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                             <textarea
//                                 rows="4"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={formData.description || ''}
//                                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Niveau *</label>
//                                 <select
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.niveau || formData.level || ''}
//                                     onChange={(e) => setFormData({ ...formData, niveau: e.target.value, level: e.target.value })}
//                                     required
//                                 >
//                                     <option value="">Sélectionner</option>
//                                     <option value="Débutant">Débutant</option>
//                                     <option value="Intermédiaire">Intermédiaire</option>
//                                     <option value="Avancé">Avancé</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                                 <input
//                                     type="date"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.date || ''}
//                                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                     </>
//                 );

//             case 'news':
//                 return (
//                     <>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Titre *</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={formData.title || formData.titre || ''}
//                                 onChange={(e) => setFormData({ ...formData, title: e.target.value, titre: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie *</label>
//                                 <select
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.category || ''}
//                                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                                     required
//                                 >
//                                     <option value="">Sélectionner</option>
//                                     <option value="innovation">Innovation</option>
//                                     <option value="formation">Formation</option>
//                                     <option value="recherche">Recherche</option>
//                                     <option value="événement">Événement</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//                                 <input
//                                     type="date"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.date || ''}
//                                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Contenu *</label>
//                             <textarea
//                                 rows="8"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Contenu complet de l'article..."
//                                 value={formData.content || formData.contenu || ''}
//                                 onChange={(e) => setFormData({ ...formData, content: e.target.value, contenu: e.target.value })}
//                                 required
//                             />
//                         </div>
//                     </>
//                 );

//             case 'model':
//                 return (
//                     <>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Nom du modèle *</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="ex: TuberculosisDetect v2.0"
//                                 value={formData.name || ''}
//                                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Type de modèle *</label>
//                                 <select
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.model_type || formData.type || ''}
//                                     onChange={(e) => setFormData({ ...formData, model_type: e.target.value, type: e.target.value })}
//                                     required
//                                 >
//                                     <option value="">Sélectionner</option>
//                                     <option value="tuberculosis_v1">Tuberculose v1</option>
//                                     <option value="tuberculosis_v2">Tuberculose v2</option>
//                                     <option value="pneumonia">Pneumonie</option>
//                                     <option value="chest_xray">Radiographie thoracique</option>
//                                     <option value="covid19">COVID-19</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Précision (%)</label>
//                                 <input
//                                     type="number"
//                                     min="0"
//                                     max="100"
//                                     step="0.1"
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     placeholder="95.8"
//                                     value={formData.accuracy || ''}
//                                     onChange={(e) => setFormData({ ...formData, accuracy: parseFloat(e.target.value) })}
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
//                             <textarea
//                                 rows="4"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="Description du modèle et de ses capacités..."
//                                 value={formData.description || ''}
//                                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                             />
//                         </div>
//                     </>
//                 );

//             case 'team':
//                 return (
//                     <>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={formData.name || formData.nom || ''}
//                                 onChange={(e) => setFormData({ ...formData, name: e.target.value, nom: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Poste/Rôle *</label>
//                             <input
//                                 type="text"
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 placeholder="ex: Lead AI Engineer"
//                                 value={formData.role || formData.poste || ''}
//                                 onChange={(e) => setFormData({ ...formData, role: e.target.value, poste: e.target.value })}
//                                 required
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4 mb-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Département</label>
//                                 <select
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.department || formData.departement || ''}
//                                     onChange={(e) => setFormData({ ...formData, department: e.target.value, departement: e.target.value })}
//                                 >
//                                     <option value="">Sélectionner</option>
//                                     <option value="Direction">Direction</option>
//                                     <option value="Technique">Technique</option>
//                                     <option value="Recherche">Recherche</option>
//                                     <option value="Marketing">Marketing</option>
//                                     <option value="Commercial">Commercial</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
//                                 <select
//                                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={formData.status || 'active'}
//                                     onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                                 >
//                                     <option value="active">Actif</option>
//                                     <option value="inactive">Inactif</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </>
//                 );

//             case 'contact':
//                 return (
//                     <div className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
//                             <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">{formData.name}</p>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                             <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">{formData.email}</p>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
//                             <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">{formData.subject}</p>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                             <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg min-h-[100px]">
//                                 {formData.message || 'Aucun message disponible'}
//                             </div>
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
//                             <select
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={formData.status || 'new'}
//                                 onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                             >
//                                 <option value="new">Nouveau</option>
//                                 <option value="replied">Répondu</option>
//                                 <option value="closed">Fermé</option>
//                             </select>
//                         </div>
//                     </div>
//                 );

//             default:
//                 return <p>Formulaire pour {type}</p>;
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//                 <div className="flex justify-between items-center p-6 border-b">
//                     <h2 className="text-xl font-semibold text-gray-900">
//                         {item ? 'Modifier' : 'Ajouter'} {' '}
//                         {type === 'formation' ? 'Formation' :
//                             type === 'news' ? 'Article' :
//                                 type === 'model' ? 'Modèle IA' :
//                                     type === 'team' ? 'Membre équipe' :
//                                         type === 'contact' ? 'Message' : type}
//                     </h2>
//                     <button
//                         className="text-gray-400 hover:text-gray-600"
//                         onClick={onClose}
//                     >
//                         <X size={24} />
//                     </button>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="p-6">
//                         {renderFormFields()}
//                     </div>
//                     <div className="flex justify-end gap-3 p-6 border-t bg-gray-50">
//                         <button
//                             type="button"
//                             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                             onClick={onClose}
//                         >
//                             Annuler
//                         </button>
//                         <button
//                             type="submit"
//                             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//                             disabled={saving}
//                         >
//                             {saving ? (
//                                 <>
//                                     <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
//                                     Sauvegarde...
//                                 </>
//                             ) : (
//                                 <>
//                                     <Save size={18} />
//                                     Sauvegarder
//                                 </>
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;










import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    Newspaper,
    Brain,
    Mail,
    BarChart3,
    Settings,
    Plus,
    Edit,
    Trash2,
    Save,
    X,
    Eye,
    Download,
    LogOut,
    TrendingUp,
    Activity,
    Calendar,
    Globe,
    Zap,
    Award,
    CheckCircle,
    Clock,
    AlertCircle
} from 'lucide-react';
import ModalForms from './ModalForms';
import './AdminDashboard.css';
const AdminDashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(false);

    // États pour chaque section
    const [formations, setFormations] = useState([]);
    const [news, setNews] = useState([]);
    const [models, setModels] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);

    const API_BASE_URL = "http://localhost:8000";

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        try {
            await Promise.all([
                loadFormations(),
                loadNews(),
                loadModels(),
                loadTeam(),
                loadContacts()
            ]);
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        } finally {
            setLoading(false);
        }
    };

    // VRAIES FONCTIONS API - PAS DE SIMULATION
    const loadFormations = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/formations`);
            if (response.ok) {
                const data = await response.json();
                setFormations(Array.isArray(data) ? data : data.formations || []);
            } else {
                console.error('Erreur API formations:', response.status);
                setFormations([]);
            }
        } catch (error) {
            console.error('Erreur formations:', error);
            setFormations([]);
        }
    };

    const loadNews = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/news`);
            if (response.ok) {
                const data = await response.json();
                setNews(Array.isArray(data) ? data : data.news || []);
            } else {
                console.error('Erreur API news:', response.status);
                setNews([]);
            }
        } catch (error) {
            console.error('Erreur news:', error);
            setNews([]);
        }
    };

    const loadModels = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/models`);
            if (response.ok) {
                const data = await response.json();
                setModels(Array.isArray(data) ? data : data.models || []);
            } else {
                console.error('Erreur API models:', response.status);
                setModels([]);
            }
        } catch (error) {
            console.error('Erreur models:', error);
            setModels([]);
        }
    };

    const loadTeam = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/team`);
            if (response.ok) {
                const data = await response.json();
                setTeamMembers(Array.isArray(data) ? data : data.members || []);
            } else {
                console.error('Erreur API team:', response.status);
                setTeamMembers([]);
            }
        } catch (error) {
            console.error('Erreur team:', error);
            setTeamMembers([]);
        }
    };

    const loadContacts = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/contacts`);
            if (response.ok) {
                const data = await response.json();
                setContacts(Array.isArray(data) ? data : data.messages || []);
            } else {
                console.error('Erreur API contacts:', response.status);
                setContacts([]);
            }
        } catch (error) {
            console.error('Erreur contacts:', error);
            setContacts([]);
        }
    };

    // FONCTIONS CRUD RÉELLES
    const openModal = (type, item = null) => {
        setModalType(type);
        setEditingItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
        setEditingItem(null);
    };

    const handleSave = async (data) => {
        try {
            let url = '';
            let method = editingItem ? 'PUT' : 'POST';

            switch (modalType) {
                case 'formation':
                    url = editingItem
                        ? `${API_BASE_URL}/api/admin/formations/${editingItem.id}`
                        : `${API_BASE_URL}/api/admin/formations`;
                    break;
                case 'news':
                    url = editingItem
                        ? `${API_BASE_URL}/api/admin/news/${editingItem.id}`
                        : `${API_BASE_URL}/api/admin/news`;
                    break;
                case 'model':
                    url = editingItem
                        ? `${API_BASE_URL}/api/admin/models/${editingItem.id}`
                        : `${API_BASE_URL}/api/admin/models`;
                    break;
                case 'team':
                    url = editingItem
                        ? `${API_BASE_URL}/api/admin/team/${editingItem.id}`
                        : `${API_BASE_URL}/api/admin/team`;
                    break;
            }

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                closeModal();
                loadData(); // Recharger les données
                alert('Sauvegarde réussie !');
            } else {
                alert('Erreur lors de la sauvegarde');
            }
        } catch (error) {
            console.error('Erreur sauvegarde:', error);
            alert('Erreur de connexion');
        }
    };

    const handleDelete = async (type, id) => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
            return;
        }

        try {
            let url = '';
            switch (type) {
                case 'formation':
                    url = `${API_BASE_URL}/api/admin/formations/${id}`;
                    break;
                case 'news':
                    url = `${API_BASE_URL}/api/admin/news/${id}`;
                    break;
                case 'model':
                    url = `${API_BASE_URL}/api/admin/models/${id}`;
                    break;
                case 'team':
                    url = `${API_BASE_URL}/api/admin/team/${id}`;
                    break;
                case 'contact':
                    url = `${API_BASE_URL}/api/admin/contacts/${id}`;
                    break;
            }

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                }
            });

            if (response.ok) {
                loadData(); // Recharger les données
                alert('Suppression réussie !');
            } else {
                alert('Erreur lors de la suppression');
            }
        } catch (error) {
            console.error('Erreur suppression:', error);
            alert('Erreur de connexion');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('admin_user');
        onLogout();
    };

    const StatCard = ({ icon: Icon, title, value, change }) => (
        <div className="stat-card">
            <div className="stat-card-content">
                <div className="stat-info">
                    <p className="stat-title">{title}</p>
                    <p className="stat-value">{value}</p>
                    {change && (
                        <div className="stat-change">
                            <TrendingUp size={16} />
                            <span>{change}</span>
                        </div>
                    )}
                </div>
                <div className="stat-icon">
                    <Icon size={28} />
                </div>
            </div>
        </div>
    );

    const ActivityItem = ({ icon: Icon, title, description, time, type }) => (
        <div className="activity-item">
            <div className={`activity-icon activity-${type}`}>
                <Icon size={16} />
            </div>
            <div className="activity-content">
                <p className="activity-title">{title}</p>
                <p className="activity-description">{description}</p>
            </div>
            <div className="activity-time">
                <Clock size={12} />
                {time}
            </div>
        </div>
    );

    const renderFormations = () => (
        <div className="section-content">
            <div className="section-header">
                <h1>Gestion des Formations</h1>
                <button className="btn-primary" onClick={() => openModal('formation')}>
                    <Plus size={18} />
                    Nouvelle formation
                </button>
            </div>

            {loading ? (
                <div className="loading-state">Chargement...</div>
            ) : (
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Niveau</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formations.map(formation => (
                                <tr key={formation.id}>
                                    <td>{formation.titre || formation.title}</td>
                                    <td>
                                        <span className="badge">
                                            {formation.niveau || formation.level || 'Débutant'}
                                        </span>
                                    </td>
                                    <td>{formation.date}</td>
                                    <td>
                                        <span className="status">
                                            {formation.status || 'active'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => openModal('formation', formation)}>
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => handleDelete('formation', formation.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

    const renderNews = () => (
        <div className="section-content">
            <div className="section-header">
                <h1>Gestion des Actualités</h1>
                <button className="btn-primary" onClick={() => openModal('news')}>
                    <Plus size={18} />
                    Nouvel article
                </button>
            </div>

            {loading ? (
                <div className="loading-state">Chargement...</div>
            ) : (
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Catégorie</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map(article => (
                                <tr key={article.id}>
                                    <td>{article.title || article.titre}</td>
                                    <td>
                                        <span className="badge">
                                            {article.category || 'Général'}
                                        </span>
                                    </td>
                                    <td>{article.date}</td>
                                    <td>
                                        <span className="status">
                                            {article.status || 'published'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => openModal('news', article)}>
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => handleDelete('news', article.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

    const renderModels = () => (
        <div className="section-content">
            <div className="section-header">
                <h1>Gestion des Modèles IA</h1>
                <button className="btn-primary" onClick={() => openModal('model')}>
                    <Plus size={18} />
                    Nouveau modèle
                </button>
            </div>

            {loading ? (
                <div className="loading-state">Chargement...</div>
            ) : (
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Type</th>
                                <th>Précision</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {models.map(model => (
                                <tr key={model.id}>
                                    <td>{model.name}</td>
                                    <td>{model.model_type || model.type}</td>
                                    <td>
                                        <span className="accuracy">
                                            {model.accuracy}%
                                        </span>
                                    </td>
                                    <td>
                                        <span className="status">
                                            {model.status || 'production'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => openModal('model', model)}>
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => handleDelete('model', model.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

    const renderTeam = () => (
        <div className="section-content">
            <div className="section-header">
                <h1>Gestion de l'Équipe</h1>
                <button className="btn-primary" onClick={() => openModal('team')}>
                    <Plus size={18} />
                    Nouveau membre
                </button>
            </div>

            {loading ? (
                <div className="loading-state">Chargement...</div>
            ) : (
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Rôle</th>
                                <th>Département</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamMembers.map(member => (
                                <tr key={member.id}>
                                    <td>{member.name || member.nom}</td>
                                    <td>{member.role || member.poste}</td>
                                    <td>{member.department || member.departement || 'N/A'}</td>
                                    <td>
                                        <span className="status">
                                            {member.status || 'active'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => openModal('team', member)}>
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => handleDelete('team', member.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

    const renderContacts = () => (
        <div className="section-content">
            <div className="section-header">
                <h1>Messages de Contact</h1>
                <div className="header-actions">
                    <button className="btn-secondary">
                        <Download size={18} />
                        Exporter
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="loading-state">Chargement...</div>
            ) : (
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Sujet</th>
                                <th>Date</th>
                                <th>Statut</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.subject}</td>
                                    <td>{contact.date}</td>
                                    <td>
                                        <span className="status">
                                            {contact.status === 'new' ? 'Nouveau' : 'Répondu'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button onClick={() => openModal('contact', contact)}>
                                                <Eye size={16} />
                                            </button>
                                            <button onClick={() => handleDelete('contact', contact.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

    const renderDashboard = () => (
        <div className="dashboard-content">
            {/* Header */}
            <div className="dashboard-header">
                <div className="header-content">
                    <div className="header-text">
                        <h1>Tableau de bord</h1>
                        <p>Vue d'ensemble de votre plateforme TeamAI Solutions</p>
                    </div>
                    <div className="header-date">
                        <div className="date-card">
                            <div className="date-info">
                                <div className="date-number">{new Date().getDate()}</div>
                                <div className="date-month">
                                    {new Date().toLocaleDateString('fr-FR', { month: 'short' })}
                                </div>
                            </div>
                            <div className="date-divider"></div>
                            <div className="date-details">
                                <div className="date-label">Aujourd'hui</div>
                                <div className="date-weekday">
                                    {new Date().toLocaleDateString('fr-FR', { weekday: 'long' })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <StatCard
                    icon={BookOpen}
                    title="Formations actives"
                    value={formations.length}
                    change="+12% ce mois"
                />
                <StatCard
                    icon={Newspaper}
                    title="Articles publiés"
                    value={news.length}
                    change="+8% ce mois"
                />
                <StatCard
                    icon={Brain}
                    title="Modèles IA"
                    value={models.length}
                    change="+15% ce mois"
                />
                <StatCard
                    icon={Users}
                    title="Membres équipe"
                    value={teamMembers.length}
                    change="+5% ce mois"
                />
                <StatCard
                    icon={BarChart3}
                    title="Analyses effectuées"
                    value="5,670"
                    change="+23% ce mois"
                />
                <StatCard
                    icon={Mail}
                    title="Messages reçus"
                    value={contacts.length}
                    change="+18% ce mois"
                />
            </div>

            {/* Charts and Activity */}
            <div className="content-grid">
                <div className="performance-section">
                    <div className="section-header">
                        <h3>Performance des modèles</h3>
                        <button className="view-all-btn">Voir tout</button>
                    </div>
                    <div className="models-list">
                        {models.map((model) => (
                            <div key={model.id} className="model-item">
                                <div className="model-info">
                                    <div className="model-indicator"></div>
                                    <div className="model-details">
                                        <div className="model-name">{model.name}</div>
                                        <div className="model-type">{model.model_type}</div>
                                    </div>
                                </div>
                                <div className="model-accuracy">
                                    <div className="accuracy-value">{model.accuracy}%</div>
                                    <div className="accuracy-label">Précision</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="activity-section">
                    <h3>Activité récente</h3>
                    <div className="activity-list">
                        <ActivityItem
                            icon={CheckCircle}
                            title="Backend connecté"
                            description="API fonctionnelle"
                            time="Temps réel"
                            type="success"
                        />
                        <ActivityItem
                            icon={Brain}
                            title={`${models.length} modèles disponibles`}
                            description="Synchronisé"
                            time="Il y a 5 min"
                            type="info"
                        />
                        <ActivityItem
                            icon={BookOpen}
                            title={`${formations.length} formations actives`}
                            description="Mis à jour"
                            time="Il y a 10 min"
                            type="info"
                        />
                        <ActivityItem
                            icon={Mail}
                            title="Nouveaux messages"
                            description={`${contacts.filter(c => c.status === 'new').length} non lus`}
                            time="Il y a 1h"
                            type="warning"
                        />
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
                <h3>Actions rapides</h3>
                <div className="actions-grid">
                    <button
                        onClick={() => setActiveTab('formations')}
                        className="action-btn"
                    >
                        <div className="action-icon">
                            <Plus size={20} />
                        </div>
                        <span>Nouvelle formation</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('news')}
                        className="action-btn"
                    >
                        <div className="action-icon">
                            <Plus size={20} />
                        </div>
                        <span>Nouvel article</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('models')}
                        className="action-btn"
                    >
                        <div className="action-icon">
                            <Plus size={20} />
                        </div>
                        <span>Nouveau modèle</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className="action-btn"
                    >
                        <div className="action-icon">
                            <Plus size={20} />
                        </div>
                        <span>Nouveau membre</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return renderDashboard();
            case 'formations': return renderFormations();
            case 'news': return renderNews();
            case 'models': return renderModels();
            case 'contacts': return renderContacts();
            case 'team': return renderTeam();
            default: return renderDashboard();
        }
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <div className="logo-icon">AI</div>
                        <div className="logo-text">
                            <div className="logo-title">TeamAI</div>
                            <div className="logo-subtitle">Administration</div>
                        </div>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {[
                        { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord', count: null },
                        { id: 'formations', icon: BookOpen, label: 'Formations', count: formations.length },
                        { id: 'news', icon: Newspaper, label: 'Actualités', count: news.length },
                        { id: 'models', icon: Brain, label: 'Modèles IA', count: models.length },
                        { id: 'team', icon: Users, label: 'Équipe', count: teamMembers.length },
                        { id: 'contacts', icon: Mail, label: 'Messages', count: contacts.length },
                        { id: 'settings', icon: Settings, label: 'Paramètres', count: null },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        >
                            <div className="nav-content">
                                <item.icon size={20} />
                                <span>{item.label}</span>
                            </div>
                            {item.count !== null && (
                                <span className="nav-count">{item.count}</span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-info">
                        <div className="user-avatar">A</div>
                        <div className="user-details">
                            <div className="user-name">Admin</div>
                            <div className="user-role">Administrateur</div>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="logout-btn">
                        <LogOut size={20} />
                        <span>Se déconnecter</span>
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="main-content">
                {renderContent()}
            </div>

            {/* Modal - FONCTIONNEL */}
            {showModal && (
                <ModalForms
                    type={modalType}
                    item={editingItem}
                    onSave={handleSave}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default AdminDashboard;