// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import './About.css'; // Nous créerons ce fichier CSS

// const About = () => {
//     // Données pour les valeurs de l'entreprise
//     const values = [
//         {
//             id: 1,
//             title: "Innovation",
//             description: "Nous repoussons constamment les limites de l'intelligence artificielle pour créer des solutions inédites.",
//             icon: "bi-lightbulb"
//         },
//         {
//             id: 2,
//             title: "Excellence",
//             description: "Nous nous engageons à fournir les modèles d'IA les plus performants et les plus fiables du marché.",
//             icon: "bi-trophy"
//         },
//         {
//             id: 3,
//             title: "Éthique",
//             description: "Nous développons une IA responsable qui respecte la vie privée et les valeurs humaines.",
//             icon: "bi-shield-check"
//         },
//         {
//             id: 4,
//             title: "Impact",
//             description: "Nous créons des solutions qui génèrent un impact positif mesurable pour nos clients et la société.",
//             icon: "bi-graph-up-arrow"
//         }
//     ];

//     // Données pour l'historique de l'entreprise
//     const timeline = [
//         {
//             year: 2019,
//             title: "Création de TeamAI Solutions",
//             description: "Fondation de l'entreprise par une équipe de chercheurs en IA avec une vision commune.",
//             icon: "bi-flag"
//         },
//         {
//             year: 2020,
//             title: "Premier modèle de santé",
//             description: "Lancement de notre premier modèle d'IA pour la détection de la tuberculose.",
//             icon: "bi-lungs"
//         },
//         {
//             year: 2021,
//             title: "Expansion internationale",
//             description: "Ouverture de bureaux au Sénégal et collaboration avec des institutions médicales internationales.",
//             icon: "bi-globe"
//         },
//         {
//             year: 2022,
//             title: "Diversification",
//             description: "Développement de nouvelles solutions pour l'agriculture, l'éducation et la finance.",
//             icon: "bi-diagram-3"
//         },
//         {
//             year: 2023,
//             title: "Reconnaissance",
//             description: "Prix de l'innovation technologique africaine et partenariats avec des universités renommées.",
//             icon: "bi-award"
//         },
//         {
//             year: 2024,
//             title: "TeamAI Academy",
//             description: "Lancement de notre programme de formation pour démocratiser l'accès à l'IA en Afrique.",
//             icon: "bi-mortarboard"
//         }
//     ];

//     return (
//         <div className="about-page py-5">
//             <Container>
//                 <div className="text-center mb-5">
//                     <h1 className="display-4 fw-bold text-gradient">À propos de TeamAI Solutions</h1>
//                     <p className="lead">
//                         Découvrez notre histoire, notre mission et notre engagement à transformer
//                         divers secteurs grâce à l'intelligence artificielle.
//                     </p>
//                 </div>

//                 <div className="mission-section mb-5">
//                     <Row className="align-items-center">
//                         <Col lg={6}>
//                             <div className="mission-content p-4">
//                                 <h2 className="mb-4">Notre Mission</h2>
//                                 <p className="fs-5">
//                                     TeamAI Solutions a été fondée avec une vision claire : rendre l'intelligence
//                                     artificielle accessible et utile pour tous, en commençant par l'Afrique.
//                                 </p>
//                                 <p>
//                                     Notre mission est de développer des solutions d'IA adaptées aux défis
//                                     spécifiques rencontrés dans divers secteurs, en mettant l'accent sur la santé,
//                                     l'agriculture, l'éducation et la finance.
//                                 </p>
//                                 <p>
//                                     Nous croyons fermement que l'IA peut être un puissant levier de développement
//                                     pour le continent africain, en améliorant l'efficacité des systèmes de santé,
//                                     en optimisant les rendements agricoles, en personnalisant l'apprentissage
//                                     et en democratisant l'accès aux services financiers.
//                                 </p>
//                             </div>
//                         </Col>
//                         <Col lg={6}>
//                             <div className="mission-image rounded shadow-lg">
//                                 {/* Placeholder for an actual image */}
//                                 <div className="image-placeholder about-image-1"></div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>

//                 <div className="values-section mb-5">
//                     <h2 className="text-center mb-4">Nos Valeurs</h2>
//                     <Row className="g-4">
//                         {values.map(value => (
//                             <Col key={value.id} md={6} lg={3}>
//                                 <Card className="value-card h-100 border-0 shadow-sm text-center">
//                                     <Card.Body>
//                                         <div className="value-icon mb-3">
//                                             <i className={`bi ${value.icon}`}></i>
//                                         </div>
//                                         <Card.Title className="mb-3">{value.title}</Card.Title>
//                                         <Card.Text>{value.description}</Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </div>

//                 <div className="timeline-section mb-5">
//                     <h2 className="text-center mb-5">Notre Histoire</h2>
//                     <div className="timeline">
//                         {timeline.map((event, index) => (
//                             <div key={event.year} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
//                                 <div className="timeline-badge">
//                                     <i className={`bi ${event.icon}`}></i>
//                                 </div>
//                                 <div className="timeline-panel">
//                                     <div className="timeline-heading">
//                                         <h4 className="timeline-title">{event.title}</h4>
//                                         <p className="timeline-year">{event.year}</p>
//                                     </div>
//                                     <div className="timeline-body">
//                                         <p>{event.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="vision-section">
//                     <Row className="align-items-center">
//                         <Col lg={6} className="order-lg-2">
//                             <div className="vision-content p-4">
//                                 <h2 className="mb-4">Notre Vision</h2>
//                                 <p className="fs-5">
//                                     Nous aspirons à devenir le leader africain des solutions d'IA innovantes
//                                     et à impact positif.
//                                 </p>
//                                 <p>
//                                     Notre vision est de construire un avenir où l'intelligence artificielle
//                                     est un outil accessible et bénéfique pour tous les secteurs d'activité en Afrique,
//                                     contribuant ainsi au développement durable du continent.
//                                 </p>
//                                 <p>
//                                     Nous croyons en un monde où la technologie est au service de l'humain,
//                                     renforçant ses capacités plutôt que de les remplacer, et où l'IA est
//                                     développée de manière éthique et responsable.
//                                 </p>
//                             </div>
//                         </Col>
//                         <Col lg={6} className="order-lg-1">
//                             <div className="vision-image rounded shadow-lg">
//                                 {/* Placeholder for an actual image */}
//                                 <div className="image-placeholder about-image-2"></div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default About;







// About page with real dataimport React, { useState } from 'react';

// Composant pour chaque section de mission
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('vision');

    // Données pour les missions
    const missions = [
        {
            title: "Développement de solutions IA",
            points: [
                "Conception d'algorithmes pour des secteurs clés (santé, climat, finance, éducation)",
                "Développement de plateformes intelligentes pour l'aide à la décision",
                "Solutions adaptées aux contextes africains"
            ]
        },
        {
            title: "Formation & Renforcement des capacités",
            points: [
                "Organisation de formations et workshops IA",
                "Accompagnement des professionnels et étudiants",
                "Programmes éducatifs et certifications en IA"
            ]
        },
        {
            title: "Suivi-évaluation & Conseil stratégique",
            points: [
                "Analyse d'impact de projets IA",
                "Stratégies d'optimisation IA pour entreprises/institutions",
                "Assistance technique pour intégrer l'IA"
            ]
        }
    ];

    // Données pour les valeurs
    const values = [
        {
            icon: "🧠",
            title: "Excellence",
            description: "Nous maintenons les plus hauts standards de qualité scientifique et technique dans toutes nos solutions."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Nous repoussons constamment les limites de ce qui est possible grâce à la recherche appliquée."
        },
        {
            icon: "🌍",
            title: "Impact",
            description: "Chaque solution vise à créer un changement positif mesurable pour les communautés et organisations."
        },
        {
            icon: "⚖️",
            title: "Éthique",
            description: "Nous garantissons que nos technologies respectent la confidentialité, l'équité et les droits humains fondamentaux."
        }
    ];

    // Données pour la timeline
    const timelineItems = [
        {
            position: "left",
            year: "2020",
            title: "Fondation d'AfriAI Solutions",
            description: "Création de l'équipe initiale et définition de la vision"
        },
        {
            position: "right",
            year: "2021",
            title: "Premier projet majeur",
            description: "Développement d'une solution IA pour le secteur de la santé en Afrique de l'Ouest"
        },
        {
            position: "left",
            year: "2022",
            title: "Expansion régionale",
            description: "Ouverture de bureaux dans 3 nouveaux pays africains"
        },
        {
            position: "right",
            year: "2023",
            title: "Programme de formation lancé",
            description: "Plus de 1000 professionnels formés aux technologies IA"
        },
        {
            position: "left",
            year: "2024",
            title: "Reconnaissance internationale",
            description: "Partenariats avec des institutions mondiales et prix d'innovation"
        }
    ];

    // Contenu des onglets
    const tabContent = {
        vision: (
            <div className="mb-5">
                <Row className="align-items-center">
                    <Col lg={6} className="order-lg-2">
                        <div className="rounded overflow-hidden shadow-lg mb-4 mb-lg-0">
                            <div className="image-placeholder about-image-1" style={{ height: "400px" }}></div>
                        </div>
                    </Col>
                    <Col lg={6} className="order-lg-1">
                        <div className="vision-content">
                            <h3 className="mb-4">Notre Vision</h3>
                            <p className="mb-4">
                                Notre vision est de positionner l'Afrique comme un leader mondial dans l'innovation
                                en intelligence artificielle, en développant des solutions qui répondent spécifiquement
                                aux défis du continent tout en contribuant à l'écosystème mondial de l'IA.
                            </p>
                            <p>
                                Nous croyons en une IA inclusive, éthique et centrée sur l'humain qui amplifie
                                les capacités locales et crée des opportunités pour les talents africains.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        ),
        values: (
            <div className="mb-5">
                <h3 className="mb-4 text-center">Nos Valeurs</h3>
                <Row className="g-4">
                    {values.map((value, index) => (
                        <Col md={6} lg={3} key={index}>
                            <Card className="value-card h-100 shadow-sm border-0">
                                <Card.Body className="text-center">
                                    <div className="value-icon">
                                        <span>{value.icon}</span>
                                    </div>
                                    <Card.Title className="mb-3">{value.title}</Card.Title>
                                    <Card.Text>{value.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        ),
        history: (
            <div className="mb-5">
                <h3 className="mb-4 text-center">Notre Histoire</h3>
                <div className="timeline">
                    {timelineItems.map((item, index) => (
                        <div className={`timeline-item ${item.position}`} key={index}>
                            <div className="timeline-badge">{index + 1}</div>
                            <div className="timeline-panel">
                                <h4 className="timeline-title">{item.title}</h4>
                                <p className="timeline-year">{item.year}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    // Stats pour section des statistiques
    const stats = [
        { number: "30+", label: "Chercheurs" },
        { number: "50+", label: "Projets réalisés" },
        { number: "12", label: "Pays africains" },
        { number: "5000+", label: "Personnes formées" }
    ];

    return (
        <div className="about-page py-5">
            <Container>
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold">À propos de <span className="text-primary">AfriAI Solutions</span></h1>
                    <p className="lead">
                        Découvrez qui nous sommes, notre objectif, nos missions et pourquoi collaborer avec nous.
                    </p>
                </div>

                {/* Qui sommes-nous */}
                <div className="mb-5">
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="p-4">
                                <h2 className="mb-4">Qui sommes-nous ?</h2>
                                <p className="mb-3">
                                    <strong>AfriAI Solutions</strong> est une équipe de chercheurs africains spécialisés en Intelligence Artificielle (IA) et suivi-évaluation.
                                    Nous développons des solutions innovantes basées sur l'IA pour répondre aux défis majeurs de secteurs comme la santé, les transports,
                                    le climat, la logistique, et bien plus.
                                </p>
                                <p>
                                    Notre approche allie recherche avancée, formation de pointe et accompagnement stratégique pour maximiser l'impact de l'IA en Afrique et au-delà.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="rounded shadow-lg">
                                <div className="image-placeholder about-image-1"></div>
                            </div>
                        </Col>
                    </Row>
                </div>

                {/* Statistiques */}
                <div className="mb-5">
                    <Row className="text-center g-4">
                        {stats.map((stat, index) => (
                            <Col md={3} sm={6} key={index}>
                                <Card className="h-100 border-0 shadow-sm">
                                    <Card.Body>
                                        <h2 className="display-4 fw-bold text-primary">{stat.number}</h2>
                                        <p className="lead">{stat.label}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Objectif général */}
                <div className="mb-5 bg-primary text-white p-5 rounded-3 shadow">
                    <h2 className="mb-4 text-center">Notre Objectif</h2>
                    <p className="lead text-center mb-3">
                        Devenir un centre d'excellence africain en Intelligence Artificielle et suivi-évaluation de projets,
                        en concevant des solutions IA adaptées aux réalités locales, et en renforçant les compétences via des formations
                        et recherches appliquées.
                    </p>
                    <p className="lead text-center">
                        Nous plaçons l'éthique et l'inclusivité au cœur de notre démarche, garantissant des impacts positifs
                        et durables pour les communautés et entreprises.
                    </p>
                </div>

                {/* Tabs for Vision, Values, History */}
                <div className="mb-5">
                    <ul className="nav nav-pills justify-content-center mb-4">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vision')}
                            >
                                Notre Vision
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'values' ? 'active' : ''}`}
                                onClick={() => setActiveTab('values')}
                            >
                                Nos Valeurs
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'history' ? 'active' : ''}`}
                                onClick={() => setActiveTab('history')}
                            >
                                Notre Histoire
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade show active">
                            {tabContent[activeTab]}
                        </div>
                    </div>
                </div>

                {/* Nos Missions */}
                <div className="mb-5">
                    <h2 className="mb-4 text-center">Nos Missions</h2>
                    <Row className="g-4">
                        {missions.map((mission, index) => (
                            <Col md={4} key={index}>
                                <Card className="h-100 shadow-sm border-0">
                                    <Card.Body>
                                        <Card.Title className="mb-3">{mission.title}</Card.Title>
                                        <ul className="list-unstyled">
                                            {mission.points.map((point, idx) => (
                                                <li key={idx} className="mb-2 d-flex">
                                                    <span className="me-2 text-primary">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Pourquoi nous choisir */}
                <div className="mb-5 bg-light p-4 rounded-3">
                    <h2 className="mb-4 text-center">Pourquoi nous choisir ?</h2>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <ul className="fs-5">
                                <li className="mb-2">Une expertise scientifique de haut niveau, alliant recherche et industrie</li>
                                <li className="mb-2">Une vision globale ancrée dans les réalités africaines</li>
                                <li className="mb-2">Un engagement pour une IA éthique, équitable et transparente</li>
                                <li className="mb-2">Une approche innovante orientée impact et développement durable</li>
                                <li>Une ouverture à la collaboration avec institutions, entreprises et gouvernements</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-5">
                    <h4 className="mb-3">Envie de collaborer avec nous ?</h4>
                    <p>Contactez-nous pour en savoir plus sur nos services et partenariats !</p>
                    <a href="/contact" className="btn btn-primary btn-lg px-4 py-2">Nous contacter</a>
                </div>
            </Container>
        </div>
    );
};

export default About;