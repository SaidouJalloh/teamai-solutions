// import React, { useEffect, useState } from "react";
// import { Stethoscope, ShieldHeartbeat, ScanEye } from "lucide-react";
// import "./ModelsPage.css";

// export default function ModelsPage() {
//     const [models, setModels] = useState([]);

//     useEffect(() => {
//         // Fetch depuis ton backend /api/models-info
//         fetch("http://localhost:8000/api/models-info")
//             .then(res => res.json())
//             .then(data => setModels(data.models || []))
//             .catch(() => {
//                 // fallback en local si backend off
//                 setModels([
//                     {
//                         name: "Tuberculosis_model.h5",
//                         description: "Détection Tuberculose",
//                         tech: "CNN",
//                         accuracy: 93.5,
//                         domaine: "Santé"
//                     },
//                     {
//                         name: "Image_TB_classifier.h5",
//                         description: "Classificateur Tuberculose",
//                         tech: "CNN",
//                         accuracy: 95.2,
//                         domaine: "Santé"
//                     },
//                     {
//                         name: "Pneumonia_model.h5",
//                         description: "Détection Pneumonie",
//                         tech: "CNN",
//                         accuracy: 91.8,
//                         domaine: "Santé"
//                     }
//                 ]);
//             });
//     }, []);

//     // mapping des icônes
//     const getModelIcon = (modelName) => {
//         if (modelName.toLowerCase().includes("tuberculosis_model")) {
//             return <Stethoscope size={38} color="#1e40af" />;
//         }
//         if (modelName.toLowerCase().includes("image_tb_classifier")) {
//             return <ShieldHeartbeat size={38} color="#22c55e" />;
//         }
//         if (modelName.toLowerCase().includes("pneumonia")) {
//             return <ScanEye size={38} color="#ef4444" />;
//         }
//         // icône par défaut
//         return <Stethoscope size={38} color="#64748b" />;
//     };

//     return (
//         <div className="models-root">
//             <h1 className="models-title">Nos modèles IA disponibles</h1>
//             <div className="models-list">
//                 {models.map((model, idx) => (
//                     <div className="model-card" key={idx}>
//                         <div className="model-icon">{getModelIcon(model.name)}</div>
//                         <div className="model-info">
//                             <div className="model-name">{model.description || model.name}</div>
//                             <div className="model-tech">
//                                 <b>Technologie :</b> {model.tech}
//                             </div>
//                             <div className="model-acc">
//                                 <b>Précision :</b> <span>{model.accuracy}%</span>
//                             </div>
//                             <div className="model-domain">
//                                 <b>Domaine :</b> {model.domaine}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }












// import React, { useEffect, useState } from "react";
// // ✅ Remplacer par des icônes qui existent vraiment
// import { Stethoscope, Shield, Activity, Eye, Search, Heart } from "lucide-react";
// import "./ModelsPage.css";

// export default function ModelsPage() {
//     const [models, setModels] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch depuis ton backend - utiliser la vraie route
//         fetch("http://localhost:8000/api/v1/models")
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setModels(data.models || []);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error('Erreur fetch models:', err);
//                 setError(err.message);
//                 // fallback en local si backend off
//                 setModels([
//                     {
//                         name: "TuberculosisDetect v1.0",
//                         model_type: "tuberculosis_v1",
//                         description: "Modèle de détection de tuberculose utilisant des réseaux de neurones convolutifs",
//                         technology: "CNN",
//                         accuracy: 93.5,
//                         category: "Détection de maladie pulmonaire",
//                         input_size: "64x64x3",
//                         total_analyses: 1250,
//                         success_rate: 94.2
//                     },
//                     {
//                         name: "TuberculosisDetect v2.0 HD",
//                         model_type: "tuberculosis_v2",
//                         description: "Version haute résolution du modèle de détection de tuberculose",
//                         technology: "Deep CNN avec Transfer Learning",
//                         accuracy: 96.2,
//                         category: "Détection de maladie pulmonaire",
//                         input_size: "256x256x3",
//                         total_analyses: 890,
//                         success_rate: 97.1
//                     },
//                     {
//                         name: "PneumoniaDetect v1.0",
//                         model_type: "pneumonia",
//                         description: "Modèle spécialisé dans la détection de pneumonie sur radiographies thoraciques",
//                         technology: "CNN avec Data Augmentation",
//                         accuracy: 91.8,
//                         category: "Détection de maladie pulmonaire",
//                         input_size: "64x64x3",
//                         total_analyses: 675,
//                         success_rate: 92.5
//                     }
//                 ]);
//                 setLoading(false);
//             });
//     }, []);

//     // ✅ Mapping des icônes avec des icônes qui existent
//     const getModelIcon = (modelType) => {
//         switch (modelType) {
//             case "tuberculosis_v1":
//                 return <Stethoscope size={38} color="#1e40af" />;
//             case "tuberculosis_v2":
//                 return <Shield size={38} color="#22c55e" />;
//             case "pneumonia":
//                 return <Activity size={38} color="#ef4444" />;
//             default:
//                 return <Heart size={38} color="#64748b" />;
//         }
//     };

//     // ✅ Fonction pour obtenir le badge de statut
//     const getStatusBadge = (successRate) => {
//         if (successRate >= 95) return { label: "Excellent", color: "bg-green-500" };
//         if (successRate >= 90) return { label: "Très bon", color: "bg-blue-500" };
//         if (successRate >= 85) return { label: "Bon", color: "bg-yellow-500" };
//         return { label: "En amélioration", color: "bg-gray-500" };
//     };

//     if (loading) {
//         return (
//             <div className="models-root">
//                 <div className="flex justify-center items-center min-h-64">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//                     <span className="ml-3 text-lg">Chargement des modèles...</span>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="models-root">
//                 <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//                     <div className="flex items-center">
//                         <Activity className="h-5 w-5 text-yellow-600 mr-2" />
//                         <span className="text-yellow-800">
//                             Connexion au serveur impossible. Affichage des données de démonstration.
//                         </span>
//                     </div>
//                 </div>
//                 <h1 className="models-title">Nos modèles IA disponibles</h1>
//                 <div className="models-list">
//                     {models.map((model, idx) => (
//                         <ModelCard key={idx} model={model} getModelIcon={getModelIcon} getStatusBadge={getStatusBadge} />
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="models-root">
//             <div className="mb-8">
//                 <h1 className="models-title">Nos modèles IA disponibles</h1>
//                 <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
//                     Découvrez notre suite de modèles d'intelligence artificielle spécialisés
//                     dans le diagnostic médical automatisé
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//                 {models.map((model, idx) => (
//                     <ModelCard
//                         key={model.model_type || idx}
//                         model={model}
//                         getModelIcon={getModelIcon}
//                         getStatusBadge={getStatusBadge}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

// // ✅ Composant séparé pour la carte de modèle
// const ModelCard = ({ model, getModelIcon, getStatusBadge }) => {
//     const status = getStatusBadge(model.success_rate || model.accuracy);

//     return (
//         <div className="model-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
//             <div className="p-6">
//                 {/* Header avec icône et statut */}
//                 <div className="flex items-center justify-between mb-4">
//                     <div className="model-icon bg-gray-50 p-3 rounded-lg">
//                         {getModelIcon(model.model_type || model.name)}
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${status.color}`}>
//                         {status.label}
//                     </span>
//                 </div>

//                 {/* Titre et description */}
//                 <div className="mb-4">
//                     <h3 className="model-name text-xl font-bold text-gray-900 mb-2">
//                         {model.name}
//                     </h3>
//                     <p className="text-gray-600 text-sm line-clamp-3">
//                         {model.description}
//                     </p>
//                 </div>

//                 {/* Métriques */}
//                 <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium text-gray-700">Précision</span>
//                         <span className="text-sm font-bold text-green-600">{model.accuracy}%</span>
//                     </div>

//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                             className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
//                             style={{ width: `${model.accuracy}%` }}
//                         ></div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4 pt-2">
//                         <div>
//                             <div className="text-xs text-gray-500">Technologie</div>
//                             <div className="text-sm font-semibold text-gray-700">{model.technology}</div>
//                         </div>
//                         <div>
//                             <div className="text-xs text-gray-500">Analyses</div>
//                             <div className="text-sm font-semibold text-gray-700">
//                                 {model.total_analyses?.toLocaleString() || 'N/A'}
//                             </div>
//                         </div>
//                     </div>

//                     {model.input_size && (
//                         <div className="pt-2 border-t border-gray-100">
//                             <div className="text-xs text-gray-500">Format d'entrée</div>
//                             <div className="text-sm font-semibold text-gray-700">{model.input_size}</div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Bouton d'action */}
//                 <div className="mt-6">
//                     <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
//                         <Search size={16} />
//                         <span>Tester le modèle</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };













// import React, { useEffect, useState } from "react";
// import { Stethoscope, Shield, Activity, Search, Heart, X } from "lucide-react";
// import "./ModelsPage.css";

// const API_URL = "http://localhost:8000"; // adapte selon ton .env si besoin

// export default function ModelsPage() {
//     const [models, setModels] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Modale
//     const [showModal, setShowModal] = useState(false);
//     const [selectedModel, setSelectedModel] = useState(null);

//     // Upload/prédiction
//     const [image, setImage] = useState(null);
//     const [predictLoading, setPredictLoading] = useState(false);
//     const [prediction, setPrediction] = useState(null);
//     const [predictError, setPredictError] = useState(null);

//     useEffect(() => {
//         fetch(`${API_URL}/api/v1/models`)
//             .then(res => {
//                 if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//                 return res.json();
//             })
//             .then(data => {
//                 setModels(data.models || []);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setModels([
//                     // fallback...
//                     {
//                         name: "TuberculosisDetect v1.0",
//                         model_type: "tuberculosis_v1",
//                         description: "Détection tuberculose",
//                         technology: "CNN",
//                         accuracy: 93.5,
//                         input_size: "64x64x3",
//                         total_analyses: 1250,
//                         success_rate: 94.2
//                     },
//                     {
//                         name: "PneumoniaDetect v1.0",
//                         model_type: "pneumonia",
//                         description: "Détection pneumonie",
//                         technology: "CNN + Augmentation",
//                         accuracy: 91.8,
//                         input_size: "64x64x3",
//                         total_analyses: 675,
//                         success_rate: 92.5
//                     }
//                 ]);
//                 setLoading(false);
//             });
//     }, []);

//     // Icones existantes
//     const getModelIcon = (modelType) => {
//         switch (modelType) {
//             case "tuberculosis_v1": return <Stethoscope size={38} color="#1e40af" />;
//             case "tuberculosis_v2": return <Shield size={38} color="#22c55e" />;
//             case "pneumonia": return <Activity size={38} color="#ef4444" />;
//             default: return <Heart size={38} color="#64748b" />;
//         }
//     };

//     // Ouvrir la modale
//     const handleOpenModal = (model) => {
//         setSelectedModel(model);
//         setShowModal(true);
//         setImage(null);
//         setPrediction(null);
//         setPredictError(null);
//     };

//     // Prédiction
//     const handlePredict = async () => {
//         if (!image || !selectedModel) return;
//         setPredictLoading(true);
//         setPredictError(null);
//         setPrediction(null);

//         const formData = new FormData();
//         formData.append("file", image);

//         try {
//             const res = await fetch(
//                 `${API_URL}/api/v1/predict/${selectedModel.model_type}`,
//                 {
//                     method: "POST",
//                     body: formData,
//                 }
//             );
//             if (!res.ok) throw new Error("Erreur backend");
//             const data = await res.json();
//             setPrediction(data); // adapte selon ta réponse API
//         } catch (err) {
//             setPredictError("Erreur lors de la prédiction, vérifie le backend.");
//         }
//         setPredictLoading(false);
//     };

//     // Le rendu
//     return (
//         <div className="models-root">
//             <div className="mb-8">
//                 <h1 className="models-title">Nos modèles IA disponibles</h1>
//                 <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
//                     Découvrez nos modèles spécialisés pour le diagnostic médical automatisé.
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//                 {models.map((model, idx) => (
//                     <ModelCard
//                         key={model.model_type || idx}
//                         model={model}
//                         getModelIcon={getModelIcon}
//                         onTest={() => handleOpenModal(model)}
//                     />
//                 ))}
//             </div>

//             {/* MODAL */}
//             {showModal && selectedModel && (
//                 <div className="modal-overlay" onClick={() => setShowModal(false)}>
//                     <div className="modal-content" onClick={e => e.stopPropagation()}>
//                         <button className="modal-close-btn" onClick={() => setShowModal(false)}>
//                             <X size={22} />
//                         </button>
//                         <h2 className="font-bold text-lg mb-2">{selectedModel.name}</h2>
//                         <p className="mb-2 text-sm text-gray-500">{selectedModel.description}</p>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={e => setImage(e.target.files[0])}
//                         />
//                         {image && (
//                             <div className="img-preview mt-4">
//                                 <img
//                                     src={URL.createObjectURL(image)}
//                                     alt="Aperçu"
//                                     style={{ maxWidth: 180, margin: "0 auto" }}
//                                 />
//                             </div>
//                         )}
//                         <button
//                             className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
//                             onClick={handlePredict}
//                             disabled={!image || predictLoading}
//                         >
//                             {predictLoading ? "Analyse en cours..." : "Analyser"}
//                         </button>
//                         {predictError && (
//                             <div className="text-red-600 mt-3">{predictError}</div>
//                         )}
//                         {prediction && (
//                             <div className="prediction-result mt-4 bg-gray-100 p-4 rounded-lg">
//                                 <b>Résultat :</b>
//                                 <pre className="text-sm">{JSON.stringify(prediction, null, 2)}</pre>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // Carte de modèle
// const ModelCard = ({ model, getModelIcon, onTest }) => (
//     <div className="model-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
//         <div className="p-6">
//             <div className="flex items-center justify-between mb-4">
//                 <div className="model-icon bg-gray-50 p-3 rounded-lg">
//                     {getModelIcon(model.model_type || model.name)}
//                 </div>
//                 <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-blue-600">
//                     {model.technology}
//                 </span>
//             </div>
//             <div className="mb-4">
//                 <h3 className="model-name text-xl font-bold text-gray-900 mb-2">
//                     {model.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm line-clamp-3">
//                     {model.description}
//                 </p>
//             </div>
//             <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                     <span className="text-sm font-medium text-gray-700">Précision</span>
//                     <span className="text-sm font-bold text-green-600">{model.accuracy}%</span>
//                 </div>
//             </div>
//             <div className="mt-6">
//                 <button
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
//                     onClick={onTest}
//                 >
//                     <Search size={16} />
//                     <span>Tester le modèle</span>
//                 </button>
//             </div>
//         </div>
//     </div>
// );











import React, { useEffect, useState } from "react";
import { Stethoscope, Shield, Activity, Search, Heart, X, Upload, Brain, BarChart3, Users, Zap, CheckCircle, AlertCircle } from "lucide-react";
import "./ModelsPage.css";

const API_URL = "http://localhost:8000";

export default function ModelsPage() {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);
    const [image, setImage] = useState(null);
    const [predictLoading, setPredictLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);
    const [predictError, setPredictError] = useState(null);

    useEffect(() => {
        // Données de test avec plus de détails
        const testModels = [
            {
                name: "TuberculosisDetect v2.0",
                model_type: "tuberculosis_v2",
                description: "Modèle avancé de détection de la tuberculose utilisant des réseaux de neurones convolutionnels optimisés pour l'analyse d'images radiographiques pulmonaires.",
                technology: "CNN + Transfer Learning",
                accuracy: 95.8,
                input_size: "224x224x3",
                total_analyses: 2450,
                success_rate: 96.2,
                version: "2.0",
                release_date: "2024-03-15",
                training_data: "15,000+ images",
                status: "production"
            },
            {
                name: "PneumoniaDetect Pro",
                model_type: "pneumonia",
                description: "Système intelligent de détection de pneumonie avec capacité d'analyse multi-classes pour différents types de pneumonie et complications associées.",
                technology: "ResNet50 + Augmentation",
                accuracy: 93.4,
                input_size: "224x224x3",
                total_analyses: 1875,
                success_rate: 94.1,
                version: "1.5",
                release_date: "2024-02-28",
                training_data: "12,000+ images",
                status: "production"
            },
            {
                name: "ChestXRay Analyzer",
                model_type: "chest_xray",
                description: "Analyseur complet d'images radiographiques thoraciques capable de détecter multiples pathologies simultanément avec haute précision.",
                technology: "EfficientNet-B4",
                accuracy: 91.7,
                input_size: "320x320x3",
                total_analyses: 950,
                success_rate: 92.8,
                version: "1.0",
                release_date: "2024-01-20",
                training_data: "8,500+ images",
                status: "beta"
            },
            {
                name: "COVID-19 Detector",
                model_type: "covid19",
                description: "Modèle spécialisé dans la détection des signes radiologiques caractéristiques du COVID-19 sur les images thoraciques.",
                technology: "DenseNet + Attention",
                accuracy: 89.3,
                input_size: "224x224x3",
                total_analyses: 720,
                success_rate: 90.5,
                version: "1.2",
                release_date: "2023-12-10",
                training_data: "6,000+ images",
                status: "production"
            }
        ];

        setTimeout(() => {
            setModels(testModels);
            setLoading(false);
        }, 1000);

        // Code API original commenté
        /*
        fetch(`${API_URL}/api/v1/models`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setModels(data.models || []);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setModels(testModels);
                setLoading(false);
            });
        */
    }, []);

    const getModelIcon = (modelType) => {
        switch (modelType) {
            case "tuberculosis_v1":
            case "tuberculosis_v2":
                return <Stethoscope size={40} />;
            case "pneumonia":
                return <Activity size={40} />;
            case "chest_xray":
                return <Shield size={40} />;
            case "covid19":
                return <Heart size={40} />;
            default:
                return <Brain size={40} />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'production': return '#10b981';
            case 'beta': return '#f59e0b';
            case 'development': return '#6366f1';
            default: return '#64748b';
        }
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'production': return 'Production';
            case 'beta': return 'Bêta';
            case 'development': return 'Développement';
            default: return 'Inconnu';
        }
    };

    const handleOpenModal = (model) => {
        setSelectedModel(model);
        setShowModal(true);
        setImage(null);
        setPrediction(null);
        setPredictError(null);
    };

    const handlePredict = async () => {
        if (!image || !selectedModel) return;
        setPredictLoading(true);
        setPredictError(null);
        setPrediction(null);

        // Simulation de prédiction
        setTimeout(() => {
            const mockPredictions = [
                {
                    confidence: 0.95,
                    prediction: "Tuberculose détectée",
                    details: "Signes radiologiques compatibles avec une tuberculose pulmonaire",
                    risk_level: "Élevé"
                },
                {
                    confidence: 0.23,
                    prediction: "Aucune anomalie détectée",
                    details: "Image radiographique normale",
                    risk_level: "Faible"
                }
            ];

            const randomResult = mockPredictions[Math.floor(Math.random() * mockPredictions.length)];
            setPrediction(randomResult);
            setPredictLoading(false);
        }, 2000);

        // Code API original commenté
        /*
        const formData = new FormData();
        formData.append("file", image);

        try {
            const res = await fetch(
                `${API_URL}/api/v1/predict/${selectedModel.model_type}`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("Erreur backend");
            const data = await res.json();
            setPrediction(data);
        } catch (err) {
            setPredictError("Erreur lors de la prédiction, vérifie le backend.");
        }
        setPredictLoading(false);
        */
    };

    if (loading) {
        return (
            <div className="models-container">
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Chargement des modèles IA...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="models-container">
            {/* Hero Section */}
            <div className="models-hero">
                <div className="hero-content">
                    <div className="hero-icon">
                        <Brain size={64} />
                    </div>
                    <h1>Nos Modèles d'Intelligence Artificielle</h1>
                    <p>
                        Découvrez notre suite de modèles IA spécialisés dans le diagnostic médical automatisé.
                        Technologies de pointe pour une médecine plus précise et accessible.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <BarChart3 size={24} />
                            <span>95%+ de précision moyenne</span>
                        </div>
                        <div className="stat">
                            <Users size={24} />
                            <span>6000+ analyses effectuées</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="models-content">
                {/* Models Grid */}
                <div className="models-grid">
                    {models.map((model, idx) => (
                        <ModelCard
                            key={model.model_type || idx}
                            model={model}
                            getModelIcon={getModelIcon}
                            getStatusColor={getStatusColor}
                            getStatusLabel={getStatusLabel}
                            onTest={() => handleOpenModal(model)}
                        />
                    ))}
                </div>

                {/* Info Section */}
                <div className="info-section">
                    <h2>Comment ça fonctionne ?</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h3>Sélection du modèle</h3>
                            <p>Choisissez le modèle adapté à votre type d'analyse médicale</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h3>Upload de l'image</h3>
                            <p>Téléchargez votre image radiographique au format JPEG ou PNG</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h3>Analyse IA</h3>
                            <p>Notre intelligence artificielle analyse l'image en quelques secondes</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h3>Résultats détaillés</h3>
                            <p>Obtenez un diagnostic avec le niveau de confiance et les détails</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedModel && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon">
                                {getModelIcon(selectedModel.model_type)}
                            </div>
                            <div>
                                <h2>{selectedModel.name}</h2>
                                <p>{selectedModel.description}</p>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="upload-section">
                                <h3>Télécharger une image</h3>
                                <div className="upload-area">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={e => setImage(e.target.files[0])}
                                        id="file-upload"
                                        className="file-input"
                                    />
                                    <label htmlFor="file-upload" className="upload-label">
                                        <Upload size={32} />
                                        <span>Cliquez pour sélectionner une image</span>
                                        <small>JPEG, PNG jusqu'à 10MB</small>
                                    </label>
                                </div>

                                {image && (
                                    <div className="image-preview">
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Aperçu"
                                        />
                                        <div className="image-info">
                                            <p><strong>Fichier:</strong> {image.name}</p>
                                            <p><strong>Taille:</strong> {(image.size / 1024 / 1024).toFixed(2)} MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <button
                                className="analyze-btn"
                                onClick={handlePredict}
                                disabled={!image || predictLoading}
                            >
                                {predictLoading ? (
                                    <>
                                        <div className="spinner-small"></div>
                                        Analyse en cours...
                                    </>
                                ) : (
                                    <>
                                        <Zap size={20} />
                                        Analyser l'image
                                    </>
                                )}
                            </button>

                            {predictError && (
                                <div className="error-result">
                                    <AlertCircle size={20} />
                                    <span>{predictError}</span>
                                </div>
                            )}

                            {prediction && (
                                <div className="prediction-result">
                                    <div className="result-header">
                                        <CheckCircle size={24} />
                                        <h3>Résultat de l'analyse</h3>
                                    </div>
                                    <div className="result-content">
                                        <div className="result-item">
                                            <span className="label">Diagnostic:</span>
                                            <span className="value">{prediction.prediction}</span>
                                        </div>
                                        <div className="result-item">
                                            <span className="label">Confiance:</span>
                                            <span className="value confidence">
                                                {(prediction.confidence * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="result-item">
                                            <span className="label">Niveau de risque:</span>
                                            <span className={`value risk-${prediction.risk_level?.toLowerCase()}`}>
                                                {prediction.risk_level}
                                            </span>
                                        </div>
                                        <div className="result-details">
                                            <p><strong>Détails:</strong> {prediction.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Composant ModelCard amélioré
const ModelCard = ({ model, getModelIcon, getStatusColor, getStatusLabel, onTest }) => (
    <div className="model-card">
        <div className="card-header">
            <div className="model-icon-container">
                {getModelIcon(model.model_type)}
            </div>
            <div className="model-status">
                <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(model.status) }}
                >
                    {getStatusLabel(model.status)}
                </span>
            </div>
        </div>

        <div className="card-content">
            <h3 className="model-name">{model.name}</h3>
            <p className="model-description">{model.description}</p>

            <div className="model-specs">
                <div className="spec-item">
                    <span className="spec-label">Technologie:</span>
                    <span className="spec-value">{model.technology}</span>
                </div>
                <div className="spec-item">
                    <span className="spec-label">Précision:</span>
                    <span className="spec-value accuracy">{model.accuracy}%</span>
                </div>
                <div className="spec-item">
                    <span className="spec-label">Analyses:</span>
                    <span className="spec-value">{model.total_analyses?.toLocaleString()}</span>
                </div>
            </div>

            <div className="model-meta">
                <div className="meta-item">
                    <span>Version {model.version}</span>
                </div>
                <div className="meta-item">
                    <span>{model.training_data}</span>
                </div>
            </div>
        </div>

        <div className="card-footer">
            <button className="test-btn" onClick={onTest}>
                <Search size={18} />
                Tester le modèle
            </button>
        </div>
    </div>
);