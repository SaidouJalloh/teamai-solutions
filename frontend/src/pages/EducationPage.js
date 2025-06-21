import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab, Spinner, Alert } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Composant principal pour le domaine de l'éducation
function EducationPage() {
    return (
        <Routes>
            <Route path="/" element={<EducationOverview />} />
            <Route path="/adaptive-learning" element={<ComingSoon title="Apprentissage adaptatif" />} />
            <Route path="/auto-assessment" element={<ComingSoon title="Évaluation automatisée" />} />
        </Routes>
    );
}

// Vue d'ensemble du domaine éducation
function EducationOverview() {
    const navigate = useNavigate();
    const [educationSolutions, setEducationSolutions] = useState([]);
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEducationData = async () => {
            try {
                setLoading(true);

                // En production, remplacer par un vrai appel API
                // const response = await axios.get(`${API_URL}/api/education/solutions`);
                // setEducationSolutions(response.data.solutions);

                // Données de test
                setEducationSolutions([
                    {
                        id: 'adaptive-learning',
                        title: 'Apprentissage adaptatif',
                        description: 'Système d\'IA qui personnalise le parcours d\'apprentissage en fonction des performances, des préférences et du rythme d\'apprentissage de chaque élève.',
                        image: 'adaptive_learning.jpg',
                        status: 'coming-soon',
                        features: [
                            'Évaluation continue des connaissances',
                            'Adaptation du contenu en temps réel',
                            'Recommandations personnalisées',
                            'Identification des lacunes d\'apprentissage'
                        ],
                        launchDate: '2025-06-15'
                    },
                    {
                        id: 'auto-assessment',
                        title: 'Évaluation automatisée',
                        description: 'Solution d\'IA pour évaluer automatiquement les réponses des élèves, fournir des retours instantanés et générer des rapports détaillés sur les progrès.',
                        image: 'auto_assessment.jpg',
                        status: 'coming-soon',
                        features: [
                            'Correction automatique des tests',
                            'Analyse des erreurs courantes',
                            'Génération de rapports personnalisés',
                            'Suggestions d\'amélioration ciblées'
                        ],
                        launchDate: '2025-07-30'
                    },
                    {
                        id: 'content-generation',
                        title: 'Génération de contenu pédagogique',
                        description: 'Outil d\'IA pour créer du contenu éducatif adapté à différents niveaux, styles d\'apprentissage et objectifs pédagogiques.',
                        image: 'content_generation.jpg',
                        status: 'in-development',
                        features: [
                            'Création d\'exercices personnalisés',
                            'Adaptation du niveau de difficulté',
                            'Diversification des formats d\'apprentissage',
                            'Génération de scénarios pédagogiques'
                        ]
                    }
                ]);

                // Études de cas
                setCaseStudies([
                    {
                        id: 1,
                        title: 'École primaire de Balbala',
                        description: 'Mise en place d\'un système d\'apprentissage adaptatif pour les élèves du primaire, avec un accent sur les mathématiques et la lecture.',
                        results: {
                            engagement: '+40%',
                            performance: '+25%',
                            satisfaction: '+35%'
                        },
                        testimonial: {
                            quote: "Les élèves sont plus engagés et progressent à leur propre rythme. Nous avons constaté une amélioration significative des résultats, notamment chez les élèves en difficulté.",
                            author: "Amina Hassan",
                            title: "Directrice, École primaire de Balbala"
                        }
                    }
                ]);

                setLoading(false);
            } catch (error) {
                console.error("Erreur lors du chargement des données d'éducation:", error);
                setLoading(false);
            }
        };

        fetchEducationData();
    }, []);

    return (
        <div className="education-page animate-in">
            {/* Hero section */}
            <div className="education-hero-section text-center py-5">
                <Container>
                    <div className="education-icon-large mb-3">
                        <i className="bi bi-book"></i>
                    </div>
                    <h1 className="display-4 fw-bold mb-3">IA pour l'éducation</h1>
                    <p className="lead mb-4">
                        Nos solutions d'intelligence artificielle transforment l'expérience d'apprentissage
                        en la rendant plus personnalisée, engageante et efficace.
                    </p>
                    <div className="coming-soon-badge">
                        <span>Bientôt disponible</span>
                    </div>
                </Container>
            </div>

            {/* Solutions éducatives */}
            <Container className="py-5">
                <h2 className="section-title mb-4">Nos solutions éducatives</h2>

                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Chargement des solutions éducatives...</p>
                    </div>
                ) : (
                    <Row className="g-4">
                        {educationSolutions.map(solution => (
                            <Col key={solution.id} lg={4} md={6} className="mb-4">
                                <Card className="education-solution-card h-100 border-0 shadow-sm hover-effect">
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
                                            variant={solution.status === 'coming-soon' ? "outline-primary" : "outline-secondary"}
                                            className="w-100"
                                            onClick={() => navigate(`/education/${solution.id}`)}
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
                )}
            </Container>

            {/* Section sur les avantages */}
            <section className="benefits-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5">Les avantages de l'IA dans l'éducation</h2>

                    <Row className="g-4">
                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-person-check"></i>
                                </div>
                                <h3 className="benefit-title">Personnalisation</h3>
                                <p className="benefit-description">
                                    L'IA adapte l'apprentissage aux besoins, au rythme et au style d'apprentissage
                                    de chaque élève, optimisant ainsi l'expérience éducative.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-graph-up"></i>
                                </div>
                                <h3 className="benefit-title">Analyse des données</h3>
                                <p className="benefit-description">
                                    Nos systèmes analysent en continu les performances des élèves pour identifier
                                    les forces, les faiblesses et les opportunités d'amélioration.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="benefit-card">
                                <div className="benefit-icon">
                                    <i className="bi bi-clock-history"></i>
                                </div>
                                <h3 className="benefit-title">Gain de temps</h3>
                                <p className="benefit-description">
                                    L'automatisation des tâches répétitives comme la correction permet aux enseignants
                                    de se concentrer sur l'accompagnement et l'interaction avec les élèves.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Études de cas */}
            <section className="case-studies-section py-5">
                <Container>
                    <h2 className="section-title mb-5">Études de cas</h2>

                    {caseStudies.length > 0 ? (
                        <Row className="g-4">
                            {caseStudies.map(study => (
                                <Col key={study.id} lg={12} className="mb-4">
                                    <Card className="case-study-card border-0 shadow-sm">
                                        <Card.Body>
                                            <Row>
                                                <Col md={8}>
                                                    <h3 className="case-study-title">{study.title}</h3>
                                                    <p className="case-study-description mb-4">{study.description}</p>

                                                    <div className="case-study-results">
                                                        <h5>Résultats obtenus:</h5>
                                                        <div className="results-grid">
                                                            <div className="result-item">
                                                                <div className="result-value">{study.results.engagement}</div>
                                                                <div className="result-label">Engagement des élèves</div>
                                                            </div>
                                                            <div className="result-item">
                                                                <div className="result-value">{study.results.performance}</div>
                                                                <div className="result-label">Performance académique</div>
                                                            </div>
                                                            <div className="result-item">
                                                                <div className="result-value">{study.results.satisfaction}</div>
                                                                <div className="result-label">Satisfaction enseignants</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="testimonial-card">
                                                        <div className="testimonial-quote">
                                                            <i className="bi bi-quote"></i>
                                                            <p>{study.testimonial.quote}</p>
                                                        </div>
                                                        <div className="testimonial-author">
                                                            <div className="author-name">{study.testimonial.author}</div>
                                                            <div className="author-title">{study.testimonial.title}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div className="text-center py-4">
                            <i className="bi bi-journal-text" style={{ fontSize: '3rem', color: 'var(--gray-300)' }}></i>
                            <p className="mt-3 text-muted">
                                Des études de cas seront disponibles prochainement après le lancement de nos solutions éducatives.
                            </p>
                        </div>
                    )}
                </Container>
            </section>

            {/* Partenaires éducatifs */}
            <section className="partners-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5">Nos partenaires éducatifs</h2>

                    <div className="partners-grid">
                        <div className="partner-item">
                            <div className="partner-logo">UD</div>
                            <div className="partner-name">Université de Djibouti</div>
                        </div>
                        <div className="partner-item">
                            <div className="partner-logo">DIT</div>
                            <div className="partner-name">Djibouti Institute of Technology</div>
                        </div>
                        <div className="partner-item">
                            <div className="partner-logo">MEN</div>
                            <div className="partner-name">Ministère de l'Éducation Nationale</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Appel à l'action */}
            <section className="cta-section py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <h2 className="cta-title">Intéressé par nos solutions éducatives ?</h2>
                            <p className="cta-text">
                                Contactez-nous pour être parmi les premiers à tester nos outils avant leur lancement.
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
                    onClick={() => navigate('/education')}
                >
                    <i className="bi bi-arrow-left me-2"></i> Retour aux solutions éducatives
                </Button>

                <div className="coming-soon-content">
                    <div className="coming-soon-icon">
                        <i className="bi bi-hourglass-split"></i>
                    </div>
                    <h1 className="mb-4">{title}</h1>
                    <p className="lead mb-4">
                        Cette solution est en cours de développement et sera bientôt disponible.
                        Nous travaillons activement pour vous offrir une expérience éducative innovante et efficace.
                    </p>

                    <div className="launch-countdown">
                        <div className="countdown-label">Lancement prévu</div>
                        <div className="countdown-value">Juin 2025</div>
                    </div>

                    <Alert variant="info" className="mt-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <Alert.Heading>
                            <i className="bi bi-bell me-2"></i>
                            Soyez informé(e) du lancement
                        </Alert.Heading>
                        <p>
                            Laissez-nous vos coordonnées pour être parmi les premiers à tester cette solution
                            et bénéficier d'offres exclusives lors du lancement.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <Button
                                variant="primary"
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

export default EducationPage;