// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// function HomePage() {
//     const navigate = useNavigate();
//     const [highlights, setHighlights] = useState([]);
//     const [testimonials, setTestimonials] = useState([]);
//     const [upcomingTrainings, setUpcomingTrainings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     // Charger les données pour la page d'accueil
//     useEffect(() => {
//         const fetchHomeData = async () => {
//             try {
//                 setIsLoading(true);

//                 // Charger les témoignages (à remplacer par un vrai appel API quand disponible)
//                 setTestimonials([
//                     {
//                         id: 1,
//                         name: "Dr. Mohamed Ali",
//                         title: "Médecin Radiologue, Hôpital de Djibouti",
//                         image: "mohamed.jpg",
//                         quote: "L'outil de détection de la tuberculose de TeamAI Solutions a considérablement amélioré notre capacité de diagnostic, notamment dans les zones où l'accès aux radiologues est limité."
//                     },
//                     {
//                         id: 2,
//                         name: "Amina Hassan",
//                         title: "Directrice, École primaire de Balbala",
//                         image: "amina.jpg",
//                         quote: "Les outils éducatifs basés sur l'IA ont transformé notre approche pédagogique. Nos élèves sont plus engagés et nous pouvons personnaliser l'apprentissage en fonction des besoins de chacun."
//                     },
//                     {
//                         id: 3,
//                         name: "Youssouf Ibrahim",
//                         title: "Ingénieur environnemental, Ministère de l'Environnement",
//                         image: "youssouf.jpg",
//                         quote: "Grâce aux prédictions environnementales de TeamAI, nous avons pu mieux planifier nos interventions contre la désertification et optimiser l'utilisation des ressources en eau."
//                     }
//                 ]);

//                 // Charger les éléments à la une (à remplacer par un vrai appel API quand disponible)
//                 setHighlights([
//                     {
//                         id: 1,
//                         title: "Nouveau modèle de détection de la tuberculose",
//                         description: "Notre modèle amélioré atteint une précision de 96.2% dans la détection de la tuberculose sur les radiographies pulmonaires.",
//                         image: "tb_model.jpg",
//                         domain: "health",
//                         link: "/health/tuberculosis"
//                     },
//                     {
//                         id: 2,
//                         title: "Formation en IA médicale",
//                         description: "Inscription ouverte pour notre formation certifiante en intelligence artificielle appliquée à la médecine.",
//                         image: "ai_training.jpg",
//                         domain: "training",
//                         link: "/training/medical-ai"
//                     },
//                     {
//                         id: 3,
//                         title: "Outil d'analyse d'images satellitaires",
//                         description: "Notre nouvelle solution d'analyse d'images satellitaires aide à surveiller la désertification et les changements environnementaux.",
//                         image: "satellite.jpg",
//                         domain: "environment",
//                         link: "/environment/satellite-analysis"
//                     }
//                 ]);

//                 // Charger les formations à venir (à remplacer par un vrai appel API quand disponible)
//                 setUpcomingTrainings([
//                     {
//                         id: 101,
//                         title: "Introduction à l'IA pour la santé",
//                         startDate: "2025-04-15",
//                         duration: "4 semaines",
//                         price: 250,
//                         image: "ai_health_intro.jpg"
//                     },
//                     {
//                         id: 102,
//                         title: "Deep Learning avancé",
//                         startDate: "2025-05-01",
//                         duration: "8 semaines",
//                         price: 450,
//                         image: "deep_learning.jpg"
//                     },
//                     {
//                         id: 103,
//                         title: "IA pour l'environnement",
//                         startDate: "2025-04-20",
//                         duration: "6 semaines",
//                         price: 350,
//                         image: "ai_environment.jpg"
//                     }
//                 ]);

//                 setIsLoading(false);
//             } catch (error) {
//                 console.error("Erreur lors du chargement des données de la page d'accueil:", error);
//                 setIsLoading(false);
//             }
//         };

//         fetchHomeData();
//     }, []);

//     // Fonction pour formater la date en français
//     const formatDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric' };
//         return new Date(dateString).toLocaleDateString('fr-FR', options);
//     };

//     // Naviguer vers une page
//     const navigateTo = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className="home-page animate-in">
//             {/* Hero Section */}
//             <div className="hero-section text-center">
//                 <Container>
//                     <h1 className="display-4 fw-bold text-gradient mb-3">Solutions IA Innovantes</h1>
//                     <p className="lead mb-4">
//                         Notre équipe d'experts en intelligence artificielle développe des solutions
//                         pour relever les défis dans la santé, l'éducation et l'environnement.
//                     </p>
//                     <div className="d-flex justify-content-center gap-3">
//                         <Button
//                             variant="primary"
//                             size="lg"
//                             className="btn-with-icon"
//                             onClick={() => navigateTo('/health')}
//                         >
//                             <i className="bi bi-search me-2"></i> Explorer nos solutions
//                         </Button>
//                         <Button
//                             variant="outline-secondary"
//                             size="lg"
//                             className="btn-with-icon"
//                             onClick={() => navigateTo('/training')}
//                         >
//                             <i className="bi bi-mortarboard me-2"></i> Nos formations
//                         </Button>
//                     </div>
//                 </Container>
//             </div>

//             {/* À la une */}
//             <section className="highlights-section py-5">
//                 <Container>
//                     <h2 className="section-title text-center mb-5">À la une</h2>
//                     <Row className="g-4">
//                         {highlights.map(highlight => (
//                             <Col key={highlight.id} md={4}>
//                                 <Card className={`highlight-card domain-card-${highlight.domain} h-100 border-0 shadow-sm hover-effect`}>
//                                     <div className={`highlight-image domain-bg-${highlight.domain}`}>
//                                         <div className="highlight-icon">
//                                             <i className={`bi ${highlight.domain === 'health' ? 'bi-heart-pulse' :
//                                                     highlight.domain === 'education' ? 'bi-book' :
//                                                         highlight.domain === 'environment' ? 'bi-tree' :
//                                                             highlight.domain === 'training' ? 'bi-mortarboard' : 'bi-stars'
//                                                 }`}></i>
//                                         </div>
//                                     </div>
//                                     <Card.Body>
//                                         <div className={`domain-badge domain-${highlight.domain}`}>
//                                             {highlight.domain === 'health' ? 'Santé' :
//                                                 highlight.domain === 'education' ? 'Éducation' :
//                                                     highlight.domain === 'environment' ? 'Environnement' :
//                                                         highlight.domain === 'training' ? 'Formation' : 'Général'}
//                                         </div>
//                                         <Card.Title>{highlight.title}</Card.Title>
//                                         <Card.Text>{highlight.description}</Card.Text>
//                                         <Button
//                                             variant={`outline-${highlight.domain === 'health' ? 'primary' :
//                                                     highlight.domain === 'education' ? 'info' :
//                                                         highlight.domain === 'environment' ? 'success' : 'warning'
//                                                 }`}
//                                             onClick={() => navigateTo(highlight.link)}
//                                             className="mt-auto"
//                                         >
//                                             En savoir plus <i className="bi bi-arrow-right ms-1"></i>
//                                         </Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Container>
//             </section>

//             {/* Domaines */}
//             <section className="domains-section py-5 bg-light">
//                 <Container>
//                     <h2 className="section-title text-center mb-5">Nos domaines d'expertise</h2>
//                     <Row className="g-4">
//                         {/* Carte Santé */}
//                         <Col md={4}>
//                             <Card className="domain-card h-100 border-0 shadow-sm hover-effect">
//                                 <div className="domain-icon-wrapper health-bg">
//                                     <i className="bi bi-heart-pulse"></i>
//                                 </div>
//                                 <Card.Body className="text-center">
//                                     <Card.Title>Santé</Card.Title>
//                                     <Card.Text>
//                                         Diagnostic assisté par IA pour la tuberculose et la pneumonie.
//                                         Analyse avancée d'images médicales pour faciliter les diagnostics.
//                                     </Card.Text>
//                                     <ul className="domain-features">
//                                         <li><i className="bi bi-check-circle-fill"></i> Détection de la tuberculose</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Détection de la pneumonie</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Analyse de radiographies</li>
//                                     </ul>
//                                     <Button
//                                         variant="outline-primary"
//                                         className="mt-3"
//                                         onClick={() => navigateTo('/health')}
//                                     >
//                                         Découvrir <i className="bi bi-arrow-right ms-1"></i>
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         {/* Carte Éducation */}
//                         <Col md={4}>
//                             <Card className="domain-card h-100 border-0 shadow-sm hover-effect">
//                                 <div className="domain-icon-wrapper education-bg">
//                                     <i className="bi bi-book"></i>
//                                 </div>
//                                 <Card.Body className="text-center">
//                                     <Card.Title>Éducation</Card.Title>
//                                     <Card.Text>
//                                         Apprentissage personnalisé et outils d'évaluation automatisée
//                                         grâce à l'intelligence artificielle.
//                                     </Card.Text>
//                                     <ul className="domain-features">
//                                         <li><i className="bi bi-check-circle-fill"></i> Apprentissage adaptatif</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Évaluation automatique</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Suivi de progression</li>
//                                     </ul>
//                                     <Button
//                                         variant="outline-info"
//                                         className="mt-3"
//                                         onClick={() => navigateTo('/education')}
//                                     >
//                                         Découvrir <i className="bi bi-arrow-right ms-1"></i>
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>

//                         {/* Carte Environnement */}
//                         <Col md={4}>
//                             <Card className="domain-card h-100 border-0 shadow-sm hover-effect">
//                                 <div className="domain-icon-wrapper environment-bg">
//                                     <i className="bi bi-tree"></i>
//                                 </div>
//                                 <Card.Body className="text-center">
//                                     <Card.Title>Environnement</Card.Title>
//                                     <Card.Text>
//                                         Analyse d'images satellites et prédictions pour lutter contre
//                                         le changement climatique et la désertification.
//                                     </Card.Text>
//                                     <ul className="domain-features">
//                                         <li><i className="bi bi-check-circle-fill"></i> Analyse satellitaire</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Prédictions climatiques</li>
//                                         <li><i className="bi bi-check-circle-fill"></i> Suivi des ressources</li>
//                                     </ul>
//                                     <Button
//                                         variant="outline-success"
//                                         className="mt-3"
//                                         onClick={() => navigateTo('/environment')}
//                                     >
//                                         Découvrir <i className="bi bi-arrow-right ms-1"></i>
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/* Formations */}
//             <section className="training-preview-section py-5">
//                 <Container>
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                         <h2 className="section-title">Formations à venir</h2>
//                         <Button
//                             variant="outline-primary"
//                             onClick={() => navigateTo('/training')}
//                         >
//                             Toutes les formations <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                     </div>

//                     <Row className="g-4">
//                         {upcomingTrainings.map(training => (
//                             <Col key={training.id} md={4}>
//                                 <Card className="training-card h-100 border-0 shadow-sm hover-effect">
//                                     <div className="training-card-header">
//                                         <div className="training-icon">
//                                             <i className="bi bi-mortarboard"></i>
//                                         </div>
//                                         <div className="training-date">
//                                             Début: {formatDate(training.startDate)}
//                                         </div>
//                                     </div>
//                                     <Card.Body>
//                                         <Card.Title>{training.title}</Card.Title>
//                                         <div className="training-meta">
//                                             <span className="training-duration">
//                                                 <i className="bi bi-clock"></i> {training.duration}
//                                             </span>
//                                             <span className="training-price">
//                                                 <i className="bi bi-tag"></i> {training.price} €
//                                             </span>
//                                         </div>
//                                         <Button
//                                             variant="primary"
//                                             className="w-100 mt-3"
//                                             onClick={() => navigateTo(`/training/${training.id}`)}
//                                         >
//                                             S'inscrire
//                                         </Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Container>
//             </section>

//             {/* Témoignages */}
//             <section className="testimonials-section py-5 bg-light">
//                 <Container>
//                     <h2 className="section-title text-center mb-5">Ce que disent nos clients</h2>

//                     <Carousel
//                         className="testimonial-carousel"
//                         indicators={true}
//                         interval={5000}
//                     >
//                         {testimonials.map(testimonial => (
//                             <Carousel.Item key={testimonial.id}>
//                                 <div className="testimonial-content">
//                                     <div className="testimonial-icon">
//                                         <i className="bi bi-quote"></i>
//                                     </div>
//                                     <blockquote className="testimonial-quote">
//                                         {testimonial.quote}
//                                     </blockquote>
//                                     <div className="testimonial-author">
//                                         <div className="testimonial-avatar">
//                                             <div className="avatar-placeholder">
//                                                 {testimonial.name.charAt(0)}
//                                             </div>
//                                         </div>
//                                         <div className="testimonial-info">
//                                             <div className="testimonial-name">{testimonial.name}</div>
//                                             <div className="testimonial-title">{testimonial.title}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Carousel.Item>
//                         ))}
//                     </Carousel>
//                 </Container>
//             </section>

//             {/* Appel à l'action */}
//             <section className="cta-section py-5">
//                 <Container>
//                     <Row className="align-items-center">
//                         <Col lg={8}>
//                             <h2 className="cta-title">Prêt à révolutionner votre domaine avec l'IA ?</h2>
//                             <p className="cta-text">
//                                 Rejoignez nos partenaires et bénéficiez de solutions d'IA innovantes adaptées à vos besoins spécifiques.
//                             </p>
//                         </Col>
//                         <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
//                             <Button
//                                 variant="primary"
//                                 size="lg"
//                                 onClick={() => navigateTo('/contact')}
//                             >
//                                 Contactez-nous <i className="bi bi-arrow-right ms-1"></i>
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// }

// export default HomePage;











// new code organiser
// import React from "react";
// import "./HomePage.css";
// import aiHero from "../assets/images/team/ia.jpg";
// import SolutionsGrid from "../components/SolutionsIA/SolutionsGrid";

// export default function HomePage() {
//     return (
//         <div className="home-root">
//             {/* HERO */}
//             <section className="home-hero">
//                 <div className="hero-left">
//                     <h1>Transformez vos données en <span className="ai-gradient">solutions IA</span></h1>
//                     <p>Plateforme d’experts en IA pour la santé, l’éducation, l’environnement et plus.</p>
//                     <button className="cta-btn">Découvrir nos solutions</button>
//                 </div>
//                 <div className="hero-right">
//                     <img src={aiHero} alt="AI Hero" className="hero-img" />
//                 </div>
//             </section>

//             {/* DOMAINES */}
//             <SolutionsGrid />

//             {/* Ici tu peux prévoir une section équipe, actualités, etc. */}
//         </div>
//     );
// }



import React from "react";
import "./HomePage.css";
import aiHero from "../assets/images/team/ia.jpg";
import SolutionsGrid from "../components/SolutionsIA/SolutionsGrid";

export default function HomePage() {
    return (
        <div className="home-root">
            {/* HERO */}
            <section className="home-hero">
                <div className="hero-content">
                    <h1>
                        Libérez le pouvoir de <span className="ai-gradient">l’IA</span>
                    </h1>
                    <p>
                        Plateforme d’experts pour développer, déployer et démocratiser l’Intelligence Artificielle en Afrique.<br />
                        <b>Formations • Solutions IA • Conseil & Accompagnement</b>
                    </p>
                    <button className="cta-btn">Découvrir nos solutions</button>
                </div>
                <div className="hero-image">
                    <img src={aiHero} alt="Intelligence Artificielle" />
                </div>
            </section>

            {/* Grille des domaines */}
            <SolutionsGrid />
        </div>
    );
}
