// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../components/About.CSS'; // Nous créerons ce fichier CSS

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