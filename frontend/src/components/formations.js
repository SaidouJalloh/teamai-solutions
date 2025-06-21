import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './formations.css'; // Nous créerons ce fichier CSS

const Formations = () => {
    // Données fictives pour les formations
    const formations = [
        {
            id: 1,
            title: "Introduction à l'Intelligence Artificielle",
            description: "Découvrez les fondamentaux de l'IA, son histoire, ses applications actuelles et son potentiel futur.",
            duration: "2 jours",
            level: "Débutant",
            price: "600€",
            category: "IA Générale",
            icon: "bi-robot"
        },
        {
            id: 2,
            title: "Machine Learning avec Python",
            description: "Maîtrisez les algorithmes de machine learning et leur implémentation avec Python et scikit-learn.",
            duration: "5 jours",
            level: "Intermédiaire",
            price: "1200€",
            category: "Programmation",
            icon: "bi-code-square"
        },
        {
            id: 3,
            title: "Deep Learning pour la vision par ordinateur",
            description: "Apprenez à construire des modèles de deep learning pour l'analyse d'images médicales et la reconnaissance d'objets.",
            duration: "4 jours",
            level: "Avancé",
            price: "1500€",
            category: "Santé",
            icon: "bi-eye"
        },
        {
            id: 4,
            title: "IA pour la Finance",
            description: "Explorez les applications de l'IA dans le domaine financier : prédiction des marchés, détection de fraudes et automatisation.",
            duration: "3 jours",
            level: "Intermédiaire",
            price: "900€",
            category: "Finance",
            icon: "bi-cash-coin"
        },
        {
            id: 5,
            title: "IA et Agriculture de Précision",
            description: "Découvrez comment l'IA révolutionne l'agriculture : analyse des sols, surveillance des cultures et optimisation des rendements.",
            duration: "2 jours",
            level: "Intermédiaire",
            price: "800€",
            category: "Agriculture",
            icon: "bi-flower1"
        },
        {
            id: 6,
            title: "Traitement du Langage Naturel",
            description: "Apprenez à construire des modèles pour l'analyse de texte, la classification de documents et la génération de contenu.",
            duration: "4 jours",
            level: "Avancé",
            price: "1300€",
            category: "Éducation",
            icon: "bi-chat-left-text"
        }
    ];

    const getBadgeColor = (level) => {
        switch (level) {
            case 'Débutant': return 'success';
            case 'Intermédiaire': return 'warning';
            case 'Avancé': return 'danger';
            default: return 'primary';
        }
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Santé': return 'bi-heart-pulse';
            case 'Finance': return 'bi-cash-coin';
            case 'Agriculture': return 'bi-flower1';
            case 'Éducation': return 'bi-book';
            case 'Programmation': return 'bi-code-square';
            default: return 'bi-robot';
        }
    };

    return (
        <div className="formations-page py-5">
            <Container>
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-gradient">Nos Formations</h1>
                    <p className="lead">
                        Développez vos compétences en intelligence artificielle avec nos formations
                        spécialisées dispensées par des experts du domaine.
                    </p>
                </div>

                <div className="filters-section mb-5">
                    <h3 className="mb-3">Formations par domaine</h3>
                    <div className="category-filters d-flex flex-wrap">
                        <Button variant="outline-primary" className="m-1 category-filter active">
                            Toutes les formations
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-robot me-2"></i>IA Générale
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-heart-pulse me-2"></i>Santé
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-cash-coin me-2"></i>Finance
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-flower1 me-2"></i>Agriculture
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-book me-2"></i>Éducation
                        </Button>
                        <Button variant="outline-primary" className="m-1 category-filter">
                            <i className="bi bi-code-square me-2"></i>Programmation
                        </Button>
                    </div>
                </div>

                <Row className="g-4">
                    {formations.map(formation => (
                        <Col key={formation.id} lg={4} md={6} className="mb-4">
                            <Card className="formation-card h-100 border-0 shadow-sm hover-effect">
                                <div className="formation-icon-wrapper">
                                    <i className={`bi ${formation.icon}`}></i>
                                </div>
                                <Card.Body>
                                    <div className="d-flex justify-content-between mb-2">
                                        <Badge bg={getBadgeColor(formation.level)} className="level-badge">
                                            {formation.level}
                                        </Badge>
                                        <Badge bg="info" className="duration-badge">
                                            <i className="bi bi-clock me-1"></i> {formation.duration}
                                        </Badge>
                                    </div>
                                    <Card.Title className="mb-3">{formation.title}</Card.Title>
                                    <Card.Text>{formation.description}</Card.Text>
                                    <div className="category-tag">
                                        <i className={`bi ${getCategoryIcon(formation.category)} me-1`}></i> {formation.category}
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                                    <div className="price fw-bold">{formation.price}</div>
                                    <Button variant="primary">
                                        S'inscrire <i className="bi bi-arrow-right ms-1"></i>
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="custom-training mt-5 p-4 bg-light rounded text-center">
                    <h3>Vous recherchez une formation sur mesure ?</h3>
                    <p className="mb-4">
                        Nous proposons des formations personnalisées adaptées aux besoins spécifiques
                        de votre organisation ou de votre équipe.
                    </p>
                    <Button variant="primary" size="lg">
                        Demander un devis <i className="bi bi-envelope ms-1"></i>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Formations;