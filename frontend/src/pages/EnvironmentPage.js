import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner, Tabs, Tab, Alert } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Composant principal pour le domaine de l'environnement
function EnvironmentPage() {
    return (
        <Routes>
            <Route path="/" element={<EnvironmentOverview />} />
            <Route path="/satellite-analysis" element={<ComingSoon title="Analyse d'images satellitaires" />} />
            <Route path="/climate-prediction" element={<ComingSoon title="Prédiction climatique" />} />
            <Route path="/resource-management" element={<ComingSoon title="Gestion des ressources" />} />
        </Routes>
    );
}

// Vue d'ensemble du domaine environnement
function EnvironmentOverview() {
    const navigate = useNavigate();
    const [environmentSolutions, setEnvironmentSolutions] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchEnvironmentData = async () => {
            try {
                // En production, remplacer par un vrai appel API
                // const response = await axios.get(`${API_URL}/api/environment/solutions`);
                // setEnvironmentSolutions(response.data.solutions);

                // Données de test
                setEnvironmentSolutions([
                    {
                        id: 'satellite-analysis',
                        title: 'Analyse d\'images satellitaires',
                        description: 'Utilisation de l\'IA pour analyser des images satellitaires et surveiller les changements environnementaux, la désertification et l\'occupation des sols.',
                        image: 'satellite_analysis.jpg',
                        status: 'coming-soon',
                        features: [
                            'Détection des changements de couverture terrestre',
                            'Surveillance de l\'expansion des zones désertiques',
                            'Cartographie des zones à risque environnemental',
                            'Suivi de la déforestation'
                        ],
                        launchDate: '2025-08-15'
                    },
                    {
                        id: 'climate-prediction',
                        title: 'Prédiction climatique locale',
                        description: 'Modèles d\'IA pour prédire les tendances climatiques locales, les précipitations et les risques de sécheresse afin d\'améliorer la planification des ressources.',
                        image: 'climate_prediction.jpg',
                        status: 'coming-soon',
                        features: [
                            'Prévisions de précipitations à long terme',
                            'Analyse des tendances de température',
                            'Évaluation des risques de sécheresse',
                            'Alertes précoces pour conditions extrêmes'
                        ],
                        launchDate: '2025-09-20'
                    },
                    {
                        id: 'resource-management',
                        title: 'Gestion des ressources en eau',
                        description: 'Solutions d\'IA pour optimiser la gestion des ressources en eau, prédire les besoins et détecter les anomalies dans les réseaux de distribution.',
                        image: 'water_management.jpg',
                        status: 'in-development',
                        features: [
                            'Optimisation de la distribution d\'eau',
                            'Détection de fuites et d\'anomalies',
                            'Prévision des besoins en eau',
                            'Recommandations d\'économie d\'eau'
                        ]
                    }
                ]);

                // Projets environnementaux
                setLoadingProjects(true);

                // En production, remplacer par un vrai appel API
                // const projectsResponse = await axios.get(`${API_URL}/api/environment/projects`);
                // setProjects(projectsResponse.data.projects);

                // Données de test
                setProjects([
                    {
                        id: 1,
                        title: 'Surveillance de la désertification à Djibouti',
                        description: 'Projet de surveillance par satellite de l\'avancée du désert et identification des zones prioritaires pour l\'intervention.',
                        status: 'En cours',
                        partners: ['Ministère de l\'Environnement', 'Programme des Nations Unies pour l\'Environnement'],
                        results: 'Cartographie complète des zones à risque et recommandations pour des interventions ciblées.'
                    },
                    {
                        id: 2,
                        title: 'Optimisation des ressources en eau dans la région d\'Ali Sabieh',
                        description: 'Analyse des données de précipitations et d\'utilisation de l\'eau pour améliorer la gestion des ressources en eau dans une région à forte contrainte hydrique.',
                        status: 'Planifié',
                        partners: ['Direction de l\'Eau', 'Université de Djibouti'],
                        startDate: 'Octobre 2025'
                    }
                ]);

                setLoadingProjects(false);
            } catch (error) {
                console.error("Erreur lors du chargement des données environnement:", error);
                setLoadingProjects(false);
            }
        };

        fetchEnvironmentData();
    }, []);

    return (
        <div className="environment-page animate-in">
            {/* Hero section */}
            <div className="environment-hero-section text-center py-5">
                <Container>
                    <div className="environment-icon-large mb-3">
                        <i className="bi bi-tree"></i>
                    </div>
                    <h1 className="display-4 fw-bold mb-3">IA pour l'environnement</h1>
                    <p className="lead mb-4">
                        Nos solutions d'intelligence artificielle contribuent à la protection de l'environnement
                        à travers l'analyse de données, la prédiction et l'optimisation des ressources.
                    </p>
                    <div className="coming-soon-badge">
                        <span>Bientôt disponible</span>
                    </div>
                </Container>
            </div>

            {/* Solutions environnementales */}
            <Container className="py-5">
                <h2 className="section-title mb-4">Nos solutions environnementales</h2>

                <Row className="g-4">
                    {environmentSolutions.map(solution => (
                        <Col key={solution.id} lg={4} md={6} className="mb-4">
                            <Card className="environment-solution-card h-100 border-0 shadow-sm hover-effect">
                                <div className="solution-card-image">
                                    <div className={`solution-status ${solution.status}`}>
                                        {solution.status === 'coming-soon' ? (
                                            <span>Lancement: {new Date(solution.launchDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}</span>
                                        ) : (
                                            <span>En développement</span>
                                        )}
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{solution.title}</Card.Title>
                                    <Card.Text>{solution.description}</Card.Text>

                                    {solution.features && (
                                        <div className="solution-features">
                                            <h6>Fonctionnalités:</h6>
                                            <ul className="feature-list">
                                                {solution.features.map((feature, index) => (
                                                    <li key={index}><i className="bi bi-check-circle-fill"></i> {feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </Card.Body>
                                <Card.Footer className="bg-white border-0">
                                    <Button
                                        variant={solution.status === 'coming-soon' ? "outline-success" : "outline-secondary"}
                                        className="w-100"
                                        onClick={() => navigate(`/environment/${solution.id}`)}
                                    >
                                        {solution.status === 'coming-soon' ? (
                                            <>En savoir plus <i className="bi bi-arrow-right ms-1"></i></>
                                        ) : (
                                            <>Suivre le développement</>
                                        )}
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Impact environnemental */}
            <section className="impact-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5">Impact environnemental</h2>

                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="impact-content">
                                <h3 className="mb-4">Notre engagement pour un avenir durable</h3>
                                <p className="mb-4">
                                    Chez TeamAI Solutions, nous sommes convaincus que l'intelligence artificielle peut jouer un rôle
                                    crucial dans la résolution des défis environnementaux auxquels notre planète est confrontée.
                                    Nos solutions sont conçues pour aider à:
                                </p>

                                <div className="impact-areas">
                                    <div className="impact-area">
                                        <div className="impact-icon">
                                            <i className="bi bi-moisture"></i>
                                        </div>
                                        <div className="impact-text">
                                            <h4>Lutter contre la désertification</h4>
                                            <p>Surveillance et prévision pour des interventions ciblées et efficaces.</p>
                                        </div>
                                    </div>

                                    <div className="impact-area">
                                        <div className="impact-icon">
                                            <i className="bi bi-droplet"></i>
                                        </div>
                                        <div className="impact-text">
                                            <h4>Optimiser la gestion de l'eau</h4>
                                            <p>Réduction du gaspillage et meilleure allocation des ressources hydriques.</p>
                                        </div>
                                    </div>

                                    <div className="impact-area">
                                        <div className="impact-icon">
                                            <i className="bi bi-wind"></i>
                                        </div>
                                        <div className="impact-text">
                                            <h4>Anticiper les changements climatiques</h4>
                                            <p>Prédictions localisées pour des stratégies d'adaptation appropriées.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="impact-image-container">
                                <div className="impact-image-placeholder">
                                    {/* Image ou graphique illustrant l'impact environnemental */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Projets en cours */}
            <section className="projects-section py-5">
                <Container>
                    <h2 className="section-title mb-4">Projets en cours</h2>

                    {loadingProjects ? (
                        <div className="text-center py-4">
                            <Spinner animation="border" variant="success" />
                            <p className="mt-3">Chargement des projets...</p>
                        </div>
                    ) : projects.length > 0 ? (
                        <Row className="g-4">
                            {projects.map(project => (
                                <Col key={project.id} lg={6} className="mb-4">
                                    <Card className="project-card border-0 shadow-sm h-100">
                                        <Card.Body>
                                            <div className="project-status-badge">
                                                {project.status}
                                            </div>
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>

                                            <div className="project-details">
                                                <div className="detail-item">
                                                    <div className="detail-label">Partenaires:</div>
                                                    <div className="detail-value">
                                                        {project.partners.map((partner, index) => (
                                                            <span key={index} className="partner-badge">{partner}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {project.results && (
                                                    <div className="detail-item">
                                                        <div className="detail-label">Résultats:</div>
                                                        <div className="detail-value">{project.results}</div>
                                                    </div>
                                                )}

                                                {project.startDate && (
                                                    <div className="detail-item">
                                                        <div className="detail-label">Date de début:</div>
                                                        <div className="detail-value">{project.startDate}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div className="text-center py-4">
                            <i className="bi bi-clipboard-data" style={{ fontSize: '3rem', color: 'var(--gray-300)' }}></i>
                            <p className="mt-3 text-muted">
                                Les détails des projets environnementaux seront disponibles prochainement.
                            </p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Objectifs de développement durable */}
            <section className="sdg-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5">Contribution aux Objectifs de Développement Durable</h2>

                    <div className="sdg-grid">
                        <div className="sdg-item">
                            <div className="sdg-icon">6</div>
                            <div className="sdg-title">Eau propre et assainissement</div>
                        </div>
                        <div className="sdg-item">
                            <div className="sdg-icon">13</div>
                            <div className="sdg-title">Mesures relatives à la lutte contre les changements climatiques</div>
                        </div>
                        <div className="sdg-item">
                            <div className="sdg-icon">15</div>
                            <div className="sdg-title">Vie terrestre</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Appel à l'action */}
            <section className="cta-section py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <h2 className="cta-title">Engagés pour un avenir durable ?</h2>
                            <p className="cta-text">
                                Contactez-nous pour discuter de partenariats ou pour être informé du lancement de nos solutions environnementales.
                            </p>
                        </Col>
                        <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                            <Button
                                variant="outline-light"
                                size="lg"
                                onClick={() => navigate('/contact')}
                            >
                                Contactez-nous <i className="bi bi-arrow-right ms-1"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

// Page "Bientôt disponible" générique
function ComingSoon({ title }) {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-page animate-in">
            <Container className="py-5 text-center">
                <Button
                    variant="link"
                    className="back-button d-inline-flex align-items-center mb-4"
                    onClick={() => navigate('/environment')}
                >
                    <i className="bi bi-arrow-left me-2"></i> Retour aux solutions environnementales
                </Button>

                <div className="coming-soon-content">
                    <div className="coming-soon-icon">
                        <i className="bi bi-hourglass-split"></i>
                    </div>
                    <h1 className="mb-4">{title}</h1>
                    <p className="lead mb-4">
                        Cette solution est en cours de développement et sera bientôt disponible.
                        Nous travaillons activement pour proposer des outils innovants pour la protection de l'environnement.
                    </p>

                    <div className="launch-countdown">
                        <div className="countdown-label">Lancement prévu</div>
                        <div className="countdown-value">Août - Septembre 2025</div>
                    </div>

                    <Alert variant="success" className="mt-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <Alert.Heading>
                            <i className="bi bi-bell me-2"></i>
                            Soyez informé(e) du lancement
                        </Alert.Heading>
                        <p>
                            Inscrivez-vous pour recevoir des mises à jour sur le développement de cette solution
                            et être parmi les premiers à la tester lors de son lancement.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <Button
                                variant="success"
                                onClick={() => navigate('/contact')}
                            >
                                Me tenir informé(e)
                            </Button>
                        </div>
                    </Alert>
                </div>
            </Container>
        </div>
    );
}

export default EnvironmentPage;