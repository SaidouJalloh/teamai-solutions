// import React, { useEffect, useState } from "react";
// import { Calendar, User, Clock, ExternalLink, TrendingUp, Newspaper, Filter } from "lucide-react";
// import './NewsPage.css';

// export default function NewsPage() {
//     const [news, setNews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [filter, setFilter] = useState('all');

//     useEffect(() => {
//         fetch("http://localhost:8000/api/news")
//             .then(res => {
//                 if (!res.ok) throw new Error("Erreur lors du chargement des actualités");
//                 return res.json();
//             })
//             .then(data => {
//                 setNews(Array.isArray(data) ? data : data.news || []);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);

//     // Fonction pour obtenir une image appropriée selon le type d'actualité
//     const getNewsImage = (title, category) => {
//         if (title.toLowerCase().includes('ia') || title.toLowerCase().includes('intelligence')) {
//             return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop';
//         }
//         if (title.toLowerCase().includes('formation') || title.toLowerCase().includes('cours')) {
//             return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop';
//         }
//         if (title.toLowerCase().includes('recherche') || title.toLowerCase().includes('innovation')) {
//             return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop';
//         }
//         // Image par défaut tech
//         return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop';
//     };

//     const getCategoryColor = (category) => {
//         switch(category?.toLowerCase()) {
//             case 'recherche': return '#10b981';
//             case 'formation': return '#3b82f6';
//             case 'innovation': return '#8b5cf6';
//             case 'événement': return '#f59e0b';
//             default: return '#6366f1';
//         }
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('fr-FR', {
//             day: 'numeric',
//             month: 'long',
//             year: 'numeric'
//         });
//     };

//     const filteredNews = filter === 'all' ? news : news.filter(n => n.category === filter);

//     if (loading) {
//         return (
//             <div className="news-container">
//                 <div className="loading-state">
//                     <div className="spinner"></div>
//                     <p>Chargement des actualités…</p>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="news-container">
//                 <div className="error-state">
//                     <Newspaper size={48} />
//                     <h3>Erreur de chargement</h3>
//                     <p>{error}</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="news-container">
//             {/* Hero Section */}
//             <div className="news-hero">
//                 <div className="hero-content">
//                     <div className="hero-icon">
//                         <Newspaper size={64} />
//                     </div>
//                     <h1>Actualités & Événements</h1>
//                     <p>
//                         Restez informé des dernières innovations et événements de TeamAI Solutions.
//                         Découvrez nos projets, formations et actualités du secteur de l'IA.
//                     </p>
//                     <div className="hero-stats">
//                         <div className="stat">
//                             <TrendingUp size={24} />
//                             <span>Toujours à la pointe</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="news-content">
//                 {/* Filters */}
//                 <div className="news-filters">
//                     <div className="filter-header">
//                         <Filter size={20} />
//                         <span>Filtrer par catégorie :</span>
//                     </div>
//                     <div className="filter-buttons">
//                         <button 
//                             className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
//                             onClick={() => setFilter('all')}
//                         >
//                             Toutes
//                         </button>
//                         <button 
//                             className={`filter-btn ${filter === 'recherche' ? 'active' : ''}`}
//                             onClick={() => setFilter('recherche')}
//                         >
//                             Recherche
//                         </button>
//                         <button 
//                             className={`filter-btn ${filter === 'formation' ? 'active' : ''}`}
//                             onClick={() => setFilter('formation')}
//                         >
//                             Formation
//                         </button>
//                         <button 
//                             className={`filter-btn ${filter === 'innovation' ? 'active' : ''}`}
//                             onClick={() => setFilter('innovation')}
//                         >
//                             Innovation
//                         </button>
//                         <button 
//                             className={`filter-btn ${filter === 'événement' ? 'active' : ''}`}
//                             onClick={() => setFilter('événement')}
//                         >
//                             Événements
//                         </button>
//                     </div>
//                 </div>

//                 {/* News Grid */}
//                 {filteredNews.length === 0 ? (
//                     <div className="no-news">
//                         <Newspaper size={48} />
//                         <h3>Aucune actualité disponible</h3>
//                         <p>Nos actualités seront bientôt publiées. Restez connectés !</p>
//                     </div>
//                 ) : (
//                     <div className="news-grid">
//                         {filteredNews.map((article, index) => (
//                             <article 
//                                 className="news-card" 
//                                 key={article.id || index}
//                                 style={{"--delay": `${index * 0.1}s`}}
//                             >
//                                 <div className="card-image-container">
//                                     <img 
//                                         src={getNewsImage(article.title, article.category)}
//                                         alt={article.title}
//                                         className="card-image"
//                                         loading="lazy"
//                                     />
//                                     <div className="image-overlay">
//                                         {article.category && (
//                                             <span 
//                                                 className="category-badge"
//                                                 style={{ backgroundColor: getCategoryColor(article.category) }}
//                                             >
//                                                 {article.category}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div className="card-content">
//                                     <h3 className="article-title">{article.title}</h3>

//                                     <div className="article-meta">
//                                         <div className="meta-item">
//                                             <Calendar size={16} />
//                                             <span>{formatDate(article.date)}</span>
//                                         </div>
//                                         {article.author && (
//                                             <div className="meta-item">
//                                                 <User size={16} />
//                                                 <span>{article.author}</span>
//                                             </div>
//                                         )}
//                                         <div className="meta-item">
//                                             <Clock size={16} />
//                                             <span>5 min de lecture</span>
//                                         </div>
//                                     </div>

//                                     <p className="article-summary">
//                                         {article.summary || article.content?.slice(0, 160) + "…"}
//                                     </p>

//                                     <div className="card-footer">
//                                         {article.link ? (
//                                             <a
//                                                 href={article.link}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="read-more-btn"
//                                             >
//                                                 <span>Lire l'article</span>
//                                                 <ExternalLink size={16} />
//                                             </a>
//                                         ) : (
//                                             <button className="read-more-btn">
//                                                 <span>Lire la suite</span>
//                                                 <ExternalLink size={16} />
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 )}

//                 {/* Newsletter CTA */}
//                 <div className="newsletter-cta">
//                     <div className="cta-content">
//                         <h2>Restez informé</h2>
//                         <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail</p>
//                         <div className="newsletter-form">
//                             <input 
//                                 type="email" 
//                                 placeholder="Votre adresse email"
//                                 className="email-input"
//                             />
//                             <button className="subscribe-btn">
//                                 S'abonner
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




import React, { useEffect, useState } from "react";
import { Calendar, User, Clock, ExternalLink, TrendingUp, Newspaper, Filter } from "lucide-react";
import './NewsPage.css';

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // Données de test d'abord
        const testData = [
            {
                id: 1,
                title: "Lancement de notre nouveau modèle d'IA pour la santé",
                summary: "Nous sommes fiers de présenter notre dernière innovation en intelligence artificielle dédiée au secteur médical.",
                content: "Découvrez comment notre nouveau modèle révolutionne le diagnostic médical...",
                date: "2024-06-01",
                author: "Équipe TeamAI",
                category: "innovation",
                link: "#"
            },
            {
                id: 2,
                title: "Nouvelle formation en Machine Learning disponible",
                summary: "Rejoignez notre programme de formation avancée en apprentissage automatique avec des experts du domaine.",
                content: "Cette formation complète vous permettra de maîtriser les concepts...",
                date: "2024-05-28",
                author: "Dr. Martin Dubois",
                category: "formation",
                link: "#"
            },
            {
                id: 3,
                title: "Participation au salon de l'IA 2024",
                summary: "TeamAI Solutions sera présent au plus grand salon européen de l'intelligence artificielle.",
                content: "Retrouvez-nous sur notre stand pour découvrir nos dernières innovations...",
                date: "2024-05-25",
                author: "Équipe Communication",
                category: "événement",
                link: "#"
            },
            {
                id: 4,
                title: "Nouvelle recherche sur les réseaux de neurones",
                summary: "Publication de nos travaux de recherche sur l'optimisation des architectures neuronales.",
                content: "Notre équipe de recherche a développé une nouvelle approche...",
                date: "2024-05-20",
                author: "Dr. Sarah Johnson",
                category: "recherche",
                link: "#"
            }
        ];

        // Simuler un délai d'API
        setTimeout(() => {
            setNews(testData);
            setLoading(false);
        }, 1000);

        // Code API original commenté pour tests
        /*
        fetch("http://localhost:8000/api/news")
            .then(res => {
                if (!res.ok) throw new Error("Erreur lors du chargement des actualités");
                return res.json();
            })
            .then(data => {
                console.log("Données reçues:", data); // Pour débugger
                setNews(Array.isArray(data) ? data : data.news || []);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
        */
    }, []);

    // Fonction pour obtenir une image appropriée selon le type d'actualité
    const getNewsImage = (title, category) => {
        if (title.toLowerCase().includes('ia') || title.toLowerCase().includes('intelligence')) {
            return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop';
        }
        if (title.toLowerCase().includes('formation') || title.toLowerCase().includes('cours')) {
            return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop';
        }
        if (title.toLowerCase().includes('recherche') || title.toLowerCase().includes('innovation')) {
            return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop';
        }
        // Image par défaut tech
        return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop';
    };

    const getCategoryColor = (category) => {
        switch (category?.toLowerCase()) {
            case 'recherche': return '#10b981';
            case 'formation': return '#3b82f6';
            case 'innovation': return '#8b5cf6';
            case 'événement': return '#f59e0b';
            default: return '#6366f1';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const filteredNews = filter === 'all' ? news : news.filter(n => n.category === filter);

    if (loading) {
        return (
            <div className="news-container">
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Chargement des actualités…</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="news-container">
                <div className="error-state">
                    <Newspaper size={48} />
                    <h3>Erreur de chargement</h3>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="news-container">
            {/* Hero Section */}
            <div className="news-hero">
                <div className="hero-content">
                    <div className="hero-icon">
                        <Newspaper size={64} />
                    </div>
                    <h1>Actualités & Événements</h1>
                    <p>
                        Restez informé des dernières innovations et événements de TeamAI Solutions.
                        Découvrez nos projets, formations et actualités du secteur de l'IA.
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <TrendingUp size={24} />
                            <span>Toujours à la pointe</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="news-content">
                {/* Filters */}
                <div className="news-filters">
                    <div className="filter-header">
                        <Filter size={20} />
                        <span>Filtrer par catégorie :</span>
                    </div>
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            Toutes
                        </button>
                        <button
                            className={`filter-btn ${filter === 'recherche' ? 'active' : ''}`}
                            onClick={() => setFilter('recherche')}
                        >
                            Recherche
                        </button>
                        <button
                            className={`filter-btn ${filter === 'formation' ? 'active' : ''}`}
                            onClick={() => setFilter('formation')}
                        >
                            Formation
                        </button>
                        <button
                            className={`filter-btn ${filter === 'innovation' ? 'active' : ''}`}
                            onClick={() => setFilter('innovation')}
                        >
                            Innovation
                        </button>
                        <button
                            className={`filter-btn ${filter === 'événement' ? 'active' : ''}`}
                            onClick={() => setFilter('événement')}
                        >
                            Événements
                        </button>
                    </div>
                </div>

                {/* News Grid */}
                {filteredNews.length === 0 ? (
                    <div className="no-news">
                        <Newspaper size={48} />
                        <h3>Aucune actualité disponible</h3>
                        <p>Nos actualités seront bientôt publiées. Restez connectés !</p>
                    </div>
                ) : (
                    <div className="news-grid">
                        {filteredNews.map((article, index) => (
                            <article
                                className="news-card"
                                key={article.id || index}
                                style={{ "--delay": `${index * 0.1}s` }}
                            >
                                <div className="card-image-container">
                                    <img
                                        src={getNewsImage(article.title, article.category)}
                                        alt={article.title}
                                        className="card-image"
                                        loading="lazy"
                                    />
                                    <div className="image-overlay">
                                        {article.category && (
                                            <span
                                                className="category-badge"
                                                style={{ backgroundColor: getCategoryColor(article.category) }}
                                            >
                                                {article.category}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="card-content">
                                    <h3 className="article-title">{article.title}</h3>

                                    <div className="article-meta">
                                        <div className="meta-item">
                                            <Calendar size={16} />
                                            <span>{formatDate(article.date)}</span>
                                        </div>
                                        {article.author && (
                                            <div className="meta-item">
                                                <User size={16} />
                                                <span>{article.author}</span>
                                            </div>
                                        )}
                                        <div className="meta-item">
                                            <Clock size={16} />
                                            <span>5 min de lecture</span>
                                        </div>
                                    </div>

                                    <p className="article-summary">
                                        {article.summary || article.content?.slice(0, 160) + "…"}
                                    </p>

                                    <div className="card-footer">
                                        {article.link ? (
                                            <a
                                                href={article.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="read-more-btn"
                                            >
                                                <span>Lire l'article</span>
                                                <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <button className="read-more-btn">
                                                <span>Lire la suite</span>
                                                <ExternalLink size={16} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Newsletter CTA */}
                <div className="newsletter-cta">
                    <div className="cta-content">
                        <h2>Restez informé</h2>
                        <p>Abonnez-vous à notre newsletter pour recevoir les dernières actualités directement dans votre boîte mail</p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="email-input"
                            />
                            <button className="subscribe-btn">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}