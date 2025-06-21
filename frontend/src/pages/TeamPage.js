// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// function TeamPage({ members = [] }) {
//     const navigate = useNavigate();
//     const [teamMembers, setTeamMembers] = useState(members);
//     const [activeTab, setActiveTab] = useState('team');

//     useEffect(() => {
//         const fetchTeamData = async () => {
//             // Si les membres ne sont pas déjà passés en prop, les charger
//             if (members.length === 0) {
//                 try {
//                     // En production, remplacer par un appel API réel
//                     // const response = await axios.get(`${API_URL}/api/team`);
//                     // setTeamMembers(response.data.team);

//                     // Données de test
//                     setTeamMembers([
//                         {
//                             id: 1,
//                             name: "Yacin Mouhoumed Elmi",
//                             role: "Doctorant en Économétrie-statistique et Data Scientist",
//                             bio: "Expert en modèles statistiques et deep learning avec une expérience significative dans l'application de l'IA au domaine médical. Dirige le développement des modèles de détection de la tuberculose.",
//                             image: "yacin.jpg",
//                             domain: "health",
//                             publications: 8,
//                             social: {
//                                 linkedin: "#",
//                                 twitter: "#",
//                                 github: "#"
//                             }
//                         },
//                         {
//                             id: 2,
//                             name: "Abdoul Wahab Diallo",
//                             role: "Professeur Permanent à DIT | Chercheur en IA",
//                             bio: "Chercheur renommé en intelligence artificielle avec plus de 15 ans d'expérience académique. Spécialisé dans les algorithmes d'apprentissage profond et leur application dans divers domaines.",
//                             image: "awd.jpg",
//                             domain: "education",
//                             publications: 15,
//                             social: {
//                                 linkedin: "#",
//                                 twitter: "#",
//                                 researchgate: "#"
//                             }
//                         },
//                         {
//                             id: 3,
//                             name: "Lauriane MBAGDJE DORENAN",
//                             role: "AWS AI & ML Scholar'24 | Junior Data Scientist | Biomedical Equipment Technician",
//                             bio: "Expertise en analyse de données biomédicales et développement de solutions IA pour le secteur de la santé. Passionnée par l'application de la technologie pour résoudre des problèmes de santé publique.",
//                             image: "laurian.jpg",
//                             domain: "health",
//                             publications: 3,
//                             social: {
//                                 linkedin: "#",
//                                 twitter: "#",
//                                 github: "#"
//                             }
//                         },
//                         {
//                             id: 4,
//                             name: "Oumar KRA",
//                             role: "Ingénieur en Intelligence Artificielle, Spécialiste en Coopération au Développement",
//                             bio: "Expert en solutions d'IA pour le développement durable et l'environnement. Travaille sur des projets innovants pour lutter contre le changement climatique et optimiser l'utilisation des ressources.",
//                             image: "oumar.jpg",
//                             domain: "environment",
//                             publications: 6,
//                             social: {
//                                 linkedin: "#",
//                                 twitter: "#",
//                                 github: "#"
//                             }
//                         },
//                         {
//                             id: 5,
//                             name: "Mamadou Saidou Diallo",
//                             role: "Software Engineer | IA Engineer | Data Analyst",
//                             bio: "Ingénieur logiciel spécialisé dans le développement de systèmes d'IA. Expertise en conception d'architectures logicielles robustes et évolutives pour les applications d'intelligence artificielle.",
//                             image: "Imamsaid.jpg",
//                             domain: "education",
//                             publications: 5,
//                             social: {
//                                 linkedin: "#",
//                                 github: "#",
//                                 medium: "#"
//                             }
//                         }
//                     ]);
//                 } catch (error) {
//                     console.error("Erreur lors du chargement des données de l'équipe:", error);
//                 }
//             }
//         };

//         fetchTeamData();
//     }, [members]);

//     // Fonction pour obtenir l'icône correspondant au domaine d'expertise
//     const getDomainIcon = (domain) => {
//         switch (domain) {
//             case 'health': return 'bi-heart-pulse';
//             case 'education': return 'bi-book';
//             case 'environment': return 'bi-tree';
//             case 'training': return 'bi-mortarboard';
//             default: return 'bi-stars';
//         }
//     };

//     // Fonction pour obtenir la couleur correspondant au domaine d'expertise
//     const getDomainClass = (domain) => {
//         switch (domain) {
//             case 'health': return 'health-domain';
//             case 'education': return 'education-domain';
//             case 'environment': return 'environment-domain';
//             case 'training': return 'training-domain';
//             default: return '';
//         }
//     };

//     return (
//         <div className="team-page animate-in">
//             {/* Hero section */}
//             <div className="team-hero-section text-center py-5">
//                 <Container>
//                     <div className="team-icon-large mb-3">
//                         <i className="bi bi-people"></i>
//                     </div>
//                     <h1 className="display-4 fw-bold mb-3">Notre équipe</h1>
//                     <p className="lead mb-4">
//                         Une équipe passionnée d'experts en IA dédiée à résoudre les défis
//                         dans les domaines de la santé, l'éducation et l'environnement.
//                     </p>
//                 </Container>
//             </div>

//             <Container className="py-5">
//                 <Tabs
//                     activeKey={activeTab}
//                     onSelect={(k) => setActiveTab(k)}
//                     className="mb-4"
//                     justify
//                 >
//                     <Tab eventKey="team" title="Notre équipe">
//                         <div className="team-members-grid">
//                             <Row className="g-4">
//                                 {teamMembers.map(member => (
//                                     <Col key={member.id} lg={4} md={6}>
//                                         <Card className={`team-member-card h-100 border-0 shadow-sm hover-effect ${getDomainClass(member.domain)}`}>
//                                             <div className="member-header">
//                                                 <div className="member-avatar">
//                                                     {/* Si une image réelle existe, l'utiliser, sinon afficher une initiale */}
//                                                     <div className="avatar-placeholder">
//                                                         {member.name.charAt(0)}
//                                                     </div>
//                                                 </div>
//                                                 <div className="domain-badge">
//                                                     <i className={`bi ${getDomainIcon(member.domain)}`}></i>
//                                                 </div>
//                                             </div>
//                                             <Card.Body>
//                                                 <Card.Title className="member-name">{member.name}</Card.Title>
//                                                 <div className="member-role">{member.role}</div>
//                                                 <Card.Text className="member-bio">{member.bio}</Card.Text>

//                                                 <div className="member-stats">
//                                                     <div className="stat-item">
//                                                         <i className="bi bi-journal-text"></i>
//                                                         <span>{member.publications} publications</span>
//                                                     </div>
//                                                 </div>

//                                                 <div className="member-social">
//                                                     {member.social.linkedin && (
//                                                         <a href={member.social.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
//                                                             <i className="bi bi-linkedin"></i>
//                                                         </a>
//                                                     )}
//                                                     {member.social.twitter && (
//                                                         <a href={member.social.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
//                                                             <i className="bi bi-twitter-x"></i>
//                                                         </a>
//                                                     )}
//                                                     {member.social.github && (
//                                                         <a href={member.social.github} className="social-icon" target="_blank" rel="noopener noreferrer">
//                                                             <i className="bi bi-github"></i>
//                                                         </a>
//                                                     )}
//                                                     {member.social.researchgate && (
//                                                         <a href={member.social.researchgate} className="social-icon" target="_blank" rel="noopener noreferrer">
//                                                             <i className="bi bi-journal-richtext"></i>
//                                                         </a>
//                                                     )}
//                                                     {member.social.medium && (
//                                                         <a href={member.social.medium} className="social-icon" target="_blank" rel="noopener noreferrer">
//                                                             <i className="bi bi-medium"></i>
//                                                         </a>
//                                                     )}
//                                                 </div>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </div>
//                     </Tab>

//                     <Tab eventKey="vision" title="Notre vision">
//                         <Card className="border-0 shadow-sm">
//                             <Card.Body className="p-4 p-md-5">
//                                 <Row>
//                                     <Col lg={6}>
//                                         <h2 className="mb-4">Notre vision</h2>
//                                         <p className="lead mb-4">
//                                             Chez TeamAI Solutions, nous croyons en la puissance de l'intelligence artificielle
//                                             pour transformer positivement notre société et répondre aux défis les plus pressants
//                                             de notre époque.
//                                         </p>
//                                         <p className="mb-4">
//                                             Notre vision est de développer des technologies d'IA accessibles, éthiques et efficaces
//                                             qui améliorent la vie des personnes dans trois domaines fondamentaux : la santé, l'éducation
//                                             et l'environnement.
//                                         </p>
//                                         <p>
//                                             Nous aspirons à un monde où chaque individu, quelles que soient ses ressources ou sa localisation,
//                                             puisse bénéficier d'un diagnostic médical précis, d'un apprentissage personnalisé et d'un
//                                             environnement durable grâce à l'intelligence artificielle.
//                                         </p>
//                                     </Col>
//                                     <Col lg={6}>
//                                         <h2 className="mb-4">Notre approche</h2>
//                                         <div className="approach-item">
//                                             <div className="approach-icon">
//                                                 <i className="bi bi-lightbulb"></i>
//                                             </div>
//                                             <div className="approach-content">
//                                                 <h4>Innovation centrée sur l'humain</h4>
//                                                 <p>Nous développons des technologies qui répondent aux besoins réels des personnes.</p>
//                                             </div>
//                                         </div>
//                                         <div className="approach-item">
//                                             <div className="approach-icon">
//                                                 <i className="bi bi-shield-check"></i>
//                                             </div>
//                                             <div className="approach-content">
//                                                 <h4>Éthique et responsabilité</h4>
//                                                 <p>Nous adhérons aux plus hauts standards éthiques dans le développement et l'utilisation de l'IA.</p>
//                                             </div>
//                                         </div>
//                                         <div className="approach-item">
//                                             <div className="approach-icon">
//                                                 <i className="bi bi-globe"></i>
//                                             </div>
//                                             <div className="approach-content">
//                                                 <h4>Accessibilité globale</h4>
//                                                 <p>Nous concevons des solutions adaptées à différents contextes, y compris les régions à ressources limitées.</p>
//                                             </div>
//                                         </div>
//                                         <div className="approach-item">
//                                             <div className="approach-icon">
//                                                 <i className="bi bi-graph-up"></i>
//                                             </div>
//                                             <div className="approach-content">
//                                                 <h4>Amélioration continue</h4>
//                                                 <p>Nous itérons constamment nos solutions basées sur les retours d'utilisateurs et les avancées technologiques.</p>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Tab>

//                     <Tab eventKey="join" title="Rejoignez-nous">
//                         <Card className="border-0 shadow-sm">
//                             <Card.Body className="p-4 p-md-5">
//                                 <Row>
//                                     <Col lg={6}>
//                                         <h2 className="mb-4">Rejoignez notre équipe</h2>
//                                         <p className="lead mb-4">
//                                             Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe
//                                             et contribuer à notre mission de transformation par l'IA.
//                                         </p>
//                                         <p className="mb-4">
//                                             Chez AfriAI-Solutions Solutions, vous aurez l'opportunité de travailler sur des projets innovants
//                                             avec un impact réel sur la société, dans un environnement collaboratif et stimulant.
//                                         </p>
//                                         <h4 className="mb-3">Ce que nous offrons :</h4>
//                                         <ul className="benefits-list">
//                                             <li><i className="bi bi-check-circle-fill"></i> Projets à fort impact social</li>
//                                             <li><i className="bi bi-check-circle-fill"></i> Environnement de travail collaboratif</li>
//                                             <li><i className="bi bi-check-circle-fill"></i> Opportunités de développement professionnel</li>
//                                             <li><i className="bi bi-check-circle-fill"></i> Flexibilité et équilibre travail-vie personnelle</li>
//                                         </ul>
//                                         <Button
//                                             variant="primary"
//                                             size="lg"
//                                             className="mt-4"
//                                             onClick={() => navigate('/contact')}
//                                         >
//                                             Contactez-nous
//                                         </Button>
//                                     </Col>
//                                     <Col lg={6}>
//                                         <h2 className="mb-4">Postes ouverts</h2>
//                                         <div className="job-list">
//                                             <div className="job-card">
//                                                 <div className="job-header">
//                                                     <h4 className="job-title">Data Scientist - Environnement</h4>
//                                                     <span className="job-type">Temps plein</span>
//                                                 </div>
//                                                 <p className="job-description">
//                                                     Nous recherchons un Data Scientist passionné par l'environnement pour rejoindre notre équipe
//                                                     et travailler sur des projets d'analyse d'images satellitaires et de prédiction climatique.
//                                                 </p>
//                                                 <div className="job-skills">
//                                                     <span className="skill-tag">Python</span>
//                                                     <span className="skill-tag">TensorFlow</span>
//                                                     <span className="skill-tag">Computer Vision</span>
//                                                     <span className="skill-tag">GIS</span>
//                                                 </div>
//                                                 <Button variant="outline-primary" size="sm" className="mt-3">
//                                                     Voir les détails
//                                                 </Button>
//                                             </div>

//                                             <div className="job-card">
//                                                 <div className="job-header">
//                                                     <h4 className="job-title">Développeur Full-Stack</h4>
//                                                     <span className="job-type">Temps plein</span>
//                                                 </div>
//                                                 <p className="job-description">
//                                                     Rejoignez notre équipe technique pour développer des interfaces utilisateur intuitives
//                                                     et des backends robustes pour nos solutions d'IA dans différents domaines.
//                                                 </p>
//                                                 <div className="job-skills">
//                                                     <span className="skill-tag">React</span>
//                                                     <span className="skill-tag">Node.js</span>
//                                                     <span className="skill-tag">Python</span>
//                                                     <span className="skill-tag">FastAPI</span>
//                                                 </div>
//                                                 <Button variant="outline-primary" size="sm" className="mt-3">
//                                                     Voir les détails
//                                                 </Button>
//                                             </div>

//                                             <div className="job-card">
//                                                 <div className="job-header">
//                                                     <h4 className="job-title">Formateur en IA (temps partiel)</h4>
//                                                     <span className="job-type">Temps partiel</span>
//                                                 </div>
//                                                 <p className="job-description">
//                                                     Nous recherchons des formateurs expérimentés pour animer nos cours et ateliers
//                                                     sur l'intelligence artificielle et ses applications.
//                                                 </p>
//                                                 <div className="job-skills">
//                                                     <span className="skill-tag">Machine Learning</span>
//                                                     <span className="skill-tag">Deep Learning</span>
//                                                     <span className="skill-tag">Pédagogie</span>
//                                                     <span className="skill-tag">Communication</span>
//                                                 </div>
//                                                 <Button variant="outline-primary" size="sm" className="mt-3">
//                                                     Voir les détails
//                                                 </Button>
//                                             </div>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     </Tab>
//                 </Tabs>
//             </Container>

//             {/* Appel à l'action */}
//             <section className="cta-section py-5">
//                 <Container>
//                     <Row className="align-items-center">
//                         <Col lg={8}>
//                             <h2 className="cta-title">Une question pour notre équipe ?</h2>
//                             <p className="cta-text">
//                                 Contactez-nous pour discuter de vos besoins spécifiques ou pour explorer des opportunités de collaboration.
//                             </p>
//                         </Col>
//                         <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
//                             <Button
//                                 variant="outline-light"
//                                 size="lg"
//                                 onClick={() => navigate('/contact')}
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

// export default TeamPage;








// new structure 
// src/pages/TeamPage.js
// src/pages/TeamPage.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./TeamPage.css";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

// const getImagePath = (filename) => {
//     try {
//         // Utilisation de require contextuel pour import dynamique
//         return require(`../assets/images/team/${filename}`);
//     } catch (err) {
//         return require("../assets/images/team/ia.jpg"); // image par défaut
//     }
// };

// export default function TeamPage() {
//     const [team, setTeam] = useState([]);

//     useEffect(() => {
//         axios
//             .get(`${API_URL}/api/team`)
//             .then((res) => setTeam(res.data.team))
//             .catch(() => setTeam([]));
//     }, []);

//     return (
//         <div className="team-root">
//             <h1 className="team-title">Notre Équipe</h1>
//             <p className="team-desc">Des experts passionnés en IA & Data Science</p>
//             <div className="team-grid">
//                 {team.map((member, i) => (
//                     <div className="team-card" key={i}>
//                         <img
//                             className="team-img"
//                             src={getImagePath(member.image)}
//                             alt={member.name}
//                             loading="lazy"
//                         />
//                         <div className="team-info">
//                             <h3>{member.name}</h3>
//                             <div className="team-role">{member.role}</div>
//                             {/* Option LinkedIn etc. */}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }









import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeamPage.css";

// Pour importer dynamiquement les images de l'équipe
const getImagePath = (filename) => {
    try {
        return require(`../assets/images/team/${filename}`);
    } catch (err) {
        return require("../assets/images/team/ia.jpg");
    }
};

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

// Ajoute ici les infos complémentaires (LinkedIn, bio, badge…)
const extraInfos = {
    "Mamadou Saidou Diallo": {
        linkedin: "https://www.linkedin.com/in/imamsaidou/",
        bio: "Ingénieur IA, passionné de deep learning et d'applications médicales.",
        badge: "Lead IA"
    },
    "Yacin Mouhoumed Elmi": {
        linkedin: "https://www.linkedin.com/in/yacin-elmi/",
        bio: "Doctorant en économétrie et data scientist, expert analyse prédictive.",
        badge: "Expert Data"
    },
    // ... pour tous les autres membres
};

export default function TeamPage() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/api/team`)
            .then((res) => setTeam(res.data.team))
            .catch(() => setTeam([]));
    }, []);

    return (
        <section className="team-section">
            <div className="team-header">
                <h1>Notre Équipe</h1>
                <p>
                    Des experts pluridisciplinaires pour propulser l’Intelligence Artificielle en Afrique.<br />
                    <span style={{ color: "#185adf", fontWeight: 700 }}>
                        Santé • Data Science • Education • Modélisation • IA appliquée
                    </span>
                </p>
            </div>
            <div className="team-cards-grid">
                {team.map((member, i) => {
                    const info = extraInfos[member.name] || {};
                    return (
                        <div className="team-card" key={i}>
                            {info.badge && <div className="team-badge">{info.badge}</div>}
                            <img
                                className="team-img"
                                src={getImagePath(member.image)}
                                alt={member.name}
                                loading="lazy"
                            />
                            <div className="team-name">{member.name}</div>
                            <div className="team-role">{member.role}</div>
                            <div className="team-bio">{info.bio || ""}</div>
                            <div className="team-social">
                                {info.linkedin && (
                                    <a href={info.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                )}
                                {/* Ajoute d'autres réseaux si tu veux */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
