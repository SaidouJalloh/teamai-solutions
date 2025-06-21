// import React, { useEffect, useState } from "react";
// import { GraduationCap, Users, Calendar, Info } from "lucide-react";
// import "./TrainingPage.css";

// export default function TrainingPage() {
//     const [formations, setFormations] = useState([]);

//     useEffect(() => {
//         // À remplacer par un fetch vers ton backend !
//         setFormations([
//             {
//                 id: 1,
//                 title: "Introduction à l’IA et Productivité",
//                 description: "Comprendre les fondamentaux de l’intelligence artificielle et comment l’utiliser pour booster son efficacité au travail.",
//                 trainer: "Mamadou Saidou Diallo",
//                 duration: "2h30",
//                 level: "Débutant",
//                 date: "22 juin 2025",
//                 link: "#"
//             },
//             {
//                 id: 2,
//                 title: "Machine Learning pour la Santé",
//                 description: "Découvrez les principaux algorithmes de ML appliqués à la santé et mettez-les en pratique sur des cas réels.",
//                 trainer: "Paule Marcelle",
//                 duration: "3h",
//                 level: "Intermédiaire",
//                 date: "29 juin 2025",
//                 link: "#"
//             },
//             {
//                 id: 3,
//                 title: "Automatisation des tâches avec Python",
//                 description: "Apprenez à automatiser vos tâches quotidiennes grâce à Python et aux outils d’IA.",
//                 trainer: "Tony Sarré",
//                 duration: "2h",
//                 level: "Débutant",
//                 date: "6 juillet 2025",
//                 link: "#"
//             }
//         ]);
//     }, []);

//     return (
//         <div className="training-root">
//             <h1 className="training-title">Nos Formations IA</h1>
//             <p className="training-subtitle">
//                 Découvrez nos formations pour maîtriser l’intelligence artificielle et ses applications concrètes.
//             </p>

//             <div className="training-grid">
//                 {formations.map((formation) => (
//                     <div className="formation-card" key={formation.id}>
//                         <div className="formation-header">
//                             <GraduationCap size={28} className="icon-accent" />
//                             <h2>{formation.title}</h2>
//                         </div>
//                         <p className="formation-desc">{formation.description}</p>
//                         <div className="formation-infos">
//                             <span><Users size={15} /> {formation.trainer}</span>
//                             <span><Calendar size={15} /> {formation.date}</span>
//                             <span className="formation-level">{formation.level}</span>
//                             <span>{formation.duration}</span>
//                         </div>
//                         <a href={formation.link} className="btn-inscrire" target="_blank" rel="noopener noreferrer">
//                             <Info size={15} /> S’inscrire / Infos
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }








// import React, { useEffect, useState } from "react";
// import "./TrainingPage.css";

// export default function TrainingPage() {
//     const [formations, setFormations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:8000/api/formations")
//             .then(res => {
//                 if (!res.ok) throw new Error("Erreur lors du chargement des formations");
//                 return res.json();
//             })
//             .then(data => {
//                 setFormations(data.formations || []);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="training-root">
//                 <div className="loader">Chargement des formations…</div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="training-root">
//                 <div className="alert alert-danger">{error}</div>
//             </div>
//         );
//     }

//     return (
//         <div className="training-root">
//             <h1 className="training-title">Nos Formations IA</h1>
//             <div className="training-grid">
//                 {formations.map(f => (
//                     <div className="training-card" key={f.id || f.title}>
//                         <h3>{f.title}</h3>
//                         <p className="training-description">{f.description}</p>
//                         <div className="training-details">
//                             <span><b>Durée:</b> {f.duration}</span>
//                             <span><b>Niveau:</b> {f.level}</span>
//                         </div>
//                         {f.link && (
//                             <a
//                                 className="training-link"
//                                 href={f.link}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Plus d'infos
//                             </a>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }






// import React, { useEffect, useState } from "react";
// import { GraduationCap, CalendarDays, Users2 } from "lucide-react";
// import "./TrainingPage.css"; // À créer (exemple plus bas)

// export default function TrainingPage() {
//     const [formations, setFormations] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:8000/api/formations")
//             .then(res => res.json())
//             .then(data => {
//                 setFormations(data.formations || []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//     }, []);

//     if (loading) {
//         return (
//             <div className="training-root flex-center">
//                 <div className="loader"></div>
//                 <div>Chargement des formations…</div>
//             </div>
//         );
//     }

//     return (
//         <div className="training-root">
//             <div className="training-header">
//                 <GraduationCap size={48} className="training-header-icon" />
//                 <h1 className="training-title">Nos Formations IA</h1>
//                 <p className="training-desc">
//                     Découvrez nos programmes de formation pour devenir expert en Intelligence Artificielle et Data Science.
//                 </p>
//             </div>
//             <div className="training-cards-grid">
//                 {formations.length === 0 ? (
//                     <div className="empty-msg">Aucune formation disponible actuellement.</div>
//                 ) : (
//                     formations.map((f, idx) => (
//                         <div className="training-card" key={idx}>
//                             <div className="card-top">
//                                 <GraduationCap className="card-icon" />
//                                 <h2 className="card-title">{f.title}</h2>
//                             </div>
//                             <p className="card-desc">{f.description}</p>
//                             <div className="card-info-row">
//                                 <div>
//                                     <CalendarDays size={18} /> <span>{f.date}</span>
//                                 </div>
//                                 <div>
//                                     <Users2 size={18} /> <span>{f.audience || "Tout public"}</span>
//                                 </div>
//                             </div>
//                             <a href={f.link || "#"} target="_blank" rel="noopener noreferrer" className="card-btn">
//                                 Voir la formation
//                             </a>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }








// import React, { useEffect, useState } from "react";
// import { GraduationCap, Calendar, BarChart3 } from "lucide-react";
// import "./TrainingPage.css";

// export default function TrainingPage() {
//     const [formations, setFormations] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:8000/api/formations")
//             .then(res => res.json())
//             .then(data => {
//                 setFormations(Array.isArray(data) ? data : []);
//                 setLoading(false);
//             })
//             .catch(() => setLoading(false));
//     }, []);

//     return (
//         <div className="training-root">
//             <div className="training-header">
//                 <GraduationCap size={44} />
//                 <h1>Nos Formations IA</h1>
//                 <p>
//                     Découvrez nos programmes pour devenir expert en Intelligence Artificielle et Data Science.
//                 </p>
//             </div>
//             {loading ? (
//                 <div className="loading">Chargement…</div>
//             ) : formations.length === 0 ? (
//                 <div className="no-training">Aucune formation disponible actuellement.</div>
//             ) : (
//                 <div className="training-list">
//                     {formations.map((f, idx) => (
//                         <div className="training-card" key={f.id || idx}>
//                             <div className="training-img-bg">
//                                 <GraduationCap size={60} color="#2563eb" />
//                             </div>
//                             <div className="training-content">
//                                 <h2>{f.titre}</h2>
//                                 <p>{f.description}</p>
//                                 <div className="training-meta">
//                                     <span><Calendar size={16} /> {f.date}</span>
//                                     <span><BarChart3 size={16} /> {f.niveau}</span>
//                                 </div>
//                                 <button className="btn-inscription">S’inscrire</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }





import React, { useEffect, useState } from "react";
import { GraduationCap, Calendar, BarChart3, Clock, Users, Star } from "lucide-react";
import "./TrainingPage.css";

export default function TrainingPage() {
    const [formations, setFormations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/api/formations")
            .then(res => res.json())
            .then(data => {
                setFormations(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Fonction pour obtenir une image appropriée selon le titre
    const getFormationImage = (titre, niveau) => {
        if (titre.toLowerCase().includes('santé') || titre.toLowerCase().includes('médical')) {
            return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center';
        }
        if (titre.toLowerCase().includes('avancé') || niveau === 'Avancé') {
            return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center';
        }
        if (titre.toLowerCase().includes('introduction') || niveau === 'Débutant') {
            return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&crop=center';
        }
        // Image par défaut pour l'IA
        return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&crop=center';
    };

    const getLevelColor = (niveau) => {
        switch (niveau?.toLowerCase()) {
            case 'débutant': return '#10b981';
            case 'intermédiaire': return '#f59e0b';
            case 'avancé': return '#ef4444';
            default: return '#6366f1';
        }
    };

    const getLevelIcon = (niveau) => {
        switch (niveau?.toLowerCase()) {
            case 'débutant': return '🌱';
            case 'intermédiaire': return '📈';
            case 'avancé': return '🚀';
            default: return '🎯';
        }
    };

    return (
        <div className="training-root">
            {/* Hero Section avec background */}
            <div className="training-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-icon">
                        <GraduationCap size={64} />
                    </div>
                    <h1>Formations Intelligence Artificielle</h1>
                    <p>
                        Maîtrisez l'IA avec nos programmes experts conçus par des professionnels.
                        Développez les compétences de demain dès aujourd'hui.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">{formations.length}+</span>
                            <span className="stat-label">Formations</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Étudiants</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">95%</span>
                            <span className="stat-label">Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="training-container">
                {loading ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Chargement des formations…</p>
                    </div>
                ) : formations.length === 0 ? (
                    <div className="no-training">
                        <GraduationCap size={48} />
                        <h3>Aucune formation disponible</h3>
                        <p>Nos formations seront bientôt disponibles. Restez connectés !</p>
                    </div>
                ) : (
                    <>
                        <div className="section-header">
                            <h2>Nos Programmes de Formation</h2>
                            <p>Choisissez le programme qui correspond à votre niveau et vos objectifs</p>
                        </div>

                        <div className="training-grid">
                            {formations.map((formation, idx) => (
                                <div className="training-card" key={formation.id || idx}>
                                    <div className="card-image-container">
                                        <img
                                            src={getFormationImage(formation.titre, formation.niveau)}
                                            alt={formation.titre}
                                            className="card-image"
                                            loading="lazy"
                                        />
                                        <div className="image-overlay">
                                            <span
                                                className="level-badge"
                                                style={{ backgroundColor: getLevelColor(formation.niveau) }}
                                            >
                                                {getLevelIcon(formation.niveau)} {formation.niveau}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <div className="card-header">
                                            <h3>{formation.titre}</h3>
                                            <div className="rating">
                                                <Star size={16} fill="currentColor" />
                                                <span>4.8</span>
                                            </div>
                                        </div>

                                        <p className="card-description">{formation.description}</p>

                                        <div className="card-meta">
                                            <div className="meta-item">
                                                <Calendar size={16} />
                                                <span>{formation.date}</span>
                                            </div>
                                            <div className="meta-item">
                                                <Clock size={16} />
                                                <span>8 semaines</span>
                                            </div>
                                            <div className="meta-item">
                                                <Users size={16} />
                                                <span>Max 20 places</span>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <div className="price">
                                                <span className="price-amount">À partir de 299€</span>
                                                <span className="price-period">/personne</span>
                                            </div>
                                            <button className="btn-inscription">
                                                S'inscrire maintenant
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="cta-section">
                            <div className="cta-content">
                                <h2>Prêt à transformer votre carrière ?</h2>
                                <p>Rejoignez des centaines de professionnels qui ont déjà fait le choix de l'excellence</p>
                                <div className="cta-buttons">
                                    <button className="btn-primary">Voir toutes les formations</button>
                                    <button className="btn-secondary">Demander un devis</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}














// import React, { useState, useEffect } from 'react';
// import {
//     GraduationCap,
//     Calendar,
//     Clock,
//     Users,
//     BookOpen,
//     Star,
//     ArrowRight,
//     Loader,
//     BarChart3,
//     AlertCircle,
//     RefreshCw
// } from 'lucide-react';
// import './TrainingPage.css';

// const TrainingPage = () => {
//     const [formations, setFormations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Configuration de l'API - ajustez selon votre backend
//     const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

//     useEffect(() => {
//         loadFormations();
//     }, []);

//     const loadFormations = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             console.log('🔄 Chargement des formations depuis:', `${API_BASE_URL}/api/formations`);

//             const response = await fetch(`${API_BASE_URL}/api/formations`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Ajoutez vos headers d'authentification si nécessaire
//                     // 'Authorization': `Bearer ${token}`,
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error(`Erreur ${response.status}: ${response.statusText}`);
//             }

//             const data = await response.json();
//             console.log('✅ Formations reçues:', data);

//             // Validation des données
//             const validFormations = Array.isArray(data) ? data : [];
//             setFormations(validFormations);

//         } catch (error) {
//             console.error('❌ Erreur lors du chargement des formations:', error);
//             setError(error.message);

//             // Optionnel: données de fallback pour le développement
//             if (process.env.NODE_ENV === 'development') {
//                 setFormations([
//                     {
//                         id: 'demo-1',
//                         titre: "Formation de démonstration",
//                         description: "Cette formation s'affiche car le backend n'est pas accessible. Vérifiez votre configuration.",
//                         date: "2024-12-01",
//                         niveau: "Débutant",
//                         image_url: null
//                     }
//                 ]);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Fonction pour obtenir l'image selon le contenu de la formation
//     const getFormationImage = (formation) => {
//         // Si l'API fournit une image_url, l'utiliser
//         if (formation.image_url) {
//             return formation.image_url;
//         }

//         // Sinon, déterminer l'image selon le titre/niveau
//         const titre = formation.titre?.toLowerCase() || '';
//         const niveau = formation.niveau?.toLowerCase() || '';

//         if (titre.includes('santé') || titre.includes('médical')) {
//             return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center';
//         }
//         if (titre.includes('avancé') || niveau === 'avancé') {
//             return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&crop=center';
//         }
//         if (titre.includes('introduction') || niveau === 'débutant') {
//             return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&crop=center';
//         }

//         // Image par défaut pour l'IA
//         return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&crop=center';
//     };

//     const getLevelColor = (niveau) => {
//         switch (niveau?.toLowerCase()) {
//             case 'débutant': return '#10b981';
//             case 'intermédiaire': return '#f59e0b';
//             case 'avancé': return '#ef4444';
//             default: return '#6366f1';
//         }
//     };

//     const getLevelIcon = (niveau) => {
//         switch (niveau?.toLowerCase()) {
//             case 'débutant': return '🌱';
//             case 'intermédiaire': return '📈';
//             case 'avancé': return '🚀';
//             default: return '🎯';
//         }
//     };

//     const formatDate = (dateString) => {
//         try {
//             const date = new Date(dateString);
//             return date.toLocaleDateString('fr-FR', {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric'
//             });
//         } catch {
//             return dateString || 'Date à définir';
//         }
//     };

//     // Fonction pour s'inscrire à une formation
//     const handleInscription = async (formationId) => {
//         try {
//             console.log('📝 Inscription à la formation:', formationId);

//             // Exemple d'appel API pour l'inscription
//             const response = await fetch(`${API_BASE_URL}/api/formations/${formationId}/inscription`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     // Ajoutez vos headers d'authentification
//                 },
//                 body: JSON.stringify({
//                     // Données utilisateur à envoyer
//                     // user_id: currentUser.id,
//                     // email: currentUser.email,
//                 }),
//             });

//             if (response.ok) {
//                 alert('Inscription réussie !');
//                 // Rediriger ou actualiser les données
//             } else {
//                 alert('Erreur lors de l\'inscription');
//             }
//         } catch (error) {
//             console.error('Erreur inscription:', error);
//             alert('Erreur lors de l\'inscription');
//         }
//     };

//     return (
//         <div className="training-root">
//             {/* Hero Section */}
//             <div className="training-hero">
//                 <div className="hero-overlay"></div>
//                 <div className="hero-content">
//                     <div className="hero-icon">
//                         <GraduationCap size={64} />
//                     </div>
//                     <h1>Formations Intelligence Artificielle</h1>
//                     <p>
//                         Maîtrisez l'IA avec nos programmes experts conçus par des professionnels.
//                         Développez les compétences de demain dès aujourd'hui.
//                     </p>
//                     <div className="hero-stats">
//                         <div className="stat">
//                             <span className="stat-number">{formations.length}</span>
//                             <span className="stat-label">Formations</span>
//                         </div>
//                         <div className="stat">
//                             <span className="stat-number">500+</span>
//                             <span className="stat-label">Étudiants</span>
//                         </div>
//                         <div className="stat">
//                             <span className="stat-number">95%</span>
//                             <span className="stat-label">Satisfaction</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="training-container">
//                 {/* Section de contrôle */}
//                 <div className="section-controls">
//                     <div className="section-header">
//                         <h2>Nos Programmes de Formation</h2>
//                         <p>Choisissez le programme qui correspond à votre niveau et vos objectifs</p>
//                     </div>

//                     <button
//                         onClick={loadFormations}
//                         className="refresh-btn"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <>
//                                 <Loader size={16} className="spin" />
//                                 Chargement...
//                             </>
//                         ) : (
//                             <>
//                                 <RefreshCw size={16} />
//                                 Actualiser
//                             </>
//                         )}
//                     </button>
//                 </div>

//                 {/* Message d'erreur */}
//                 {error && (
//                     <div className="error-message">
//                         <AlertCircle size={20} />
//                         <div>
//                             <h3>Erreur de connexion</h3>
//                             <p>{error}</p>
//                             <small>Vérifiez que votre backend est démarré sur {API_BASE_URL}</small>
//                         </div>
//                     </div>
//                 )}

//                 {/* Chargement */}
//                 {loading && (
//                     <div className="loading">
//                         <div className="spinner"></div>
//                         <p>Chargement des formations...</p>
//                     </div>
//                 )}

//                 {/* Liste des formations */}
//                 {!loading && formations.length > 0 && (
//                     <div className="training-grid">
//                         {formations.map((formation) => (
//                             <div className="training-card" key={formation.id}>
//                                 <div className="card-image-container">
//                                     <img
//                                         src={getFormationImage(formation)}
//                                         alt={formation.titre}
//                                         className="card-image"
//                                         loading="lazy"
//                                         onError={(e) => {
//                                             e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&crop=center";
//                                         }}
//                                     />
//                                     <div className="image-overlay">
//                                         <span
//                                             className="level-badge"
//                                             style={{ backgroundColor: getLevelColor(formation.niveau) }}
//                                         >
//                                             {getLevelIcon(formation.niveau)} {formation.niveau}
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <div className="card-content">
//                                     <div className="card-header">
//                                         <h3>{formation.titre}</h3>
//                                         <div className="rating">
//                                             <Star size={16} fill="currentColor" />
//                                             <span>{formation.rating || '4.8'}</span>
//                                         </div>
//                                     </div>

//                                     <p className="card-description">{formation.description}</p>

//                                     <div className="card-meta">
//                                         <div className="meta-item">
//                                             <Calendar size={16} />
//                                             <span>{formatDate(formation.date)}</span>
//                                         </div>
//                                         <div className="meta-item">
//                                             <Clock size={16} />
//                                             <span>{formation.duree || '8 semaines'}</span>
//                                         </div>
//                                         <div className="meta-item">
//                                             <Users size={16} />
//                                             <span>Max {formation.places_max || '20'} places</span>
//                                         </div>
//                                     </div>

//                                     <div className="card-footer">
//                                         <div className="price">
//                                             <span className="price-amount">
//                                                 {formation.prix ? `${formation.prix}€` : 'À partir de 299€'}
//                                             </span>
//                                             <span className="price-period">/personne</span>
//                                         </div>
//                                         <button
//                                             className="btn-inscription"
//                                             onClick={() => handleInscription(formation.id)}
//                                         >
//                                             S'inscrire maintenant
//                                             <ArrowRight size={16} />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* Aucune formation */}
//                 {!loading && formations.length === 0 && !error && (
//                     <div className="no-training">
//                         <GraduationCap size={48} />
//                         <h3>Aucune formation disponible</h3>
//                         <p>Nos formations seront bientôt disponibles. Restez connectés !</p>
//                         <button onClick={loadFormations} className="btn-primary">
//                             Vérifier à nouveau
//                         </button>
//                     </div>
//                 )}

//                 {/* Section d'information de développement */}
//                 {process.env.NODE_ENV === 'development' && (
//                     <div className="dev-info">
//                         <h3>🔧 Informations de développement</h3>
//                         <div className="dev-stats">
//                             <p><strong>Backend :</strong> {API_BASE_URL}/api/formations</p>
//                             <p><strong>Formations chargées :</strong> {formations.length} élément(s)</p>
//                             <p><strong>Status :</strong> {error ? 'Erreur' : loading ? 'Chargement...' : 'Connecté'}</p>
//                         </div>
//                     </div>
//                 )}

//                 {/* Call to Action */}
//                 <div className="cta-section">
//                     <div className="cta-content">
//                         <h2>Prêt à transformer votre carrière ?</h2>
//                         <p>Rejoignez des centaines de professionnels qui ont déjà fait le choix de l'excellence</p>
//                         <div className="cta-buttons">
//                             <button className="btn-primary">Voir toutes les formations</button>
//                             <button className="btn-secondary">Demander un devis</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrainingPage;