







// // V2
// import React, { useState, useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Container, Row, Col, Card, Button, Spinner, Tabs, Tab, Form, Alert, Modal, NavDropdown } from 'react-bootstrap';
// import axios from 'axios';
// import './App.css'; // Assurez-vous que le fichier CSS contient les styles ajoutés
// import Formations from './components/formations';
// import About from './components/About';





// // URL de l'API backend
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// function App() {
//   // États généraux
//   const [activeTab, setActiveTab] = useState('home');
//   const [modelTab, setModelTab] = useState('tb1');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // NOUVEAU - État pour la catégorie de modèle active
//   const [modelCategory, setModelCategory] = useState('sante');
//   // Ajoutez cet état à vos déclarations d'états existantes
//   const [modelCategoryFilter, setModelCategoryFilter] = useState('tous');

//   // États pour les modèles
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [predictions, setPredictions] = useState(null);
//   const [analysisCompleted, setAnalysisCompleted] = useState(false);

//   // États pour les informations
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [modelsInfo, setModelsInfo] = useState([]);
//   const [diseaseInfo, setDiseaseInfo] = useState('');
//   const [infoTopic, setInfoTopic] = useState('Description');
//   const [currentDisease, setCurrentDisease] = useState('tuberculosis');

//   // États pour le formulaire de contact
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [contactSubmitted, setContactSubmitted] = useState(false);
//   const [showThankYouModal, setShowThankYouModal] = useState(false);

//   // Références pour les animations de défilement
//   const analyzeRef = useRef(null);
//   const resultsRef = useRef(null);

//   // Animation lors du chargement de la page
//   useEffect(() => {
//     document.querySelector('.app-container').classList.add('fade-in');
//   }, []);

//   // Chargement des données au démarrage
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         // Charger les membres de l'équipe
//         const teamResponse = await axios.get(`${API_URL}/api/team`);
//         setTeamMembers(teamResponse.data.team);

//         // Charger les infos sur les modèles
//         const modelsResponse = await axios.get(`${API_URL}/api/models-info`);
//         setModelsInfo(modelsResponse.data.models);

//         setError(null);
//       } catch (err) {
//         console.error("Erreur lors du chargement des données:", err);
//         setError("Erreur de connexion au serveur. Veuillez réessayer plus tard.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Charger les informations sur la maladie quand le sujet ou la maladie change
//   useEffect(() => {
//     const fetchDiseaseInfo = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/api/disease-info/${currentDisease}/${infoTopic}`);
//         setDiseaseInfo(response.data.info);
//       } catch (err) {
//         console.error("Erreur lors du chargement des informations:", err);
//       }
//     };

//     fetchDiseaseInfo();
//   }, [currentDisease, infoTopic]);

//   // Gestionnaire de changement d'image
//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setImage(file);
//       setImagePreview(URL.createObjectURL(file));
//       setPredictions(null); // Réinitialiser les prédictions
//       setAnalysisCompleted(false);
//     }
//   };

//   // Analyser l'image
//   const analyzeImage = async () => {
//     if (!image) return;

//     setIsLoading(true);
//     setError(null);
//     setAnalysisCompleted(false);

//     try {
//       // Préparer le formulaire
//       const formData = new FormData();
//       formData.append('file', image);

//       // Déterminer l'endpoint en fonction du modèle actif
//       let endpoint = '';
//       if (modelTab === 'tb1') {
//         endpoint = `${API_URL}/api/analyze/tuberculosis/v1`;
//         setCurrentDisease('tuberculosis');
//       } else if (modelTab === 'tb2') {
//         endpoint = `${API_URL}/api/analyze/tuberculosis/v2`;
//         setCurrentDisease('tuberculosis');
//       } else if (modelTab === 'pn') {
//         endpoint = `${API_URL}/api/analyze/pneumonia`;
//         setCurrentDisease('pneumonia');
//       }

//       // Envoyer la requête
//       const response = await axios.post(endpoint, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Traiter la réponse
//       setPredictions(response.data.predictions);
//       setAnalysisCompleted(true);

//       // Faire défiler vers les résultats après l'analyse
//       setTimeout(() => {
//         if (resultsRef.current) {
//           resultsRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 500);

//     } catch (err) {
//       console.error("Erreur lors de l'analyse:", err);
//       setError("Une erreur s'est produite lors de l'analyse de l'image. Veuillez réessayer.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Gestionnaire du formulaire de contact
//   const handleContactChange = (e) => {
//     const { name, value } = e.target;
//     setContactForm(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();

//     // Ici, vous pouvez ajouter une requête API pour envoyer le formulaire
//     // Pour cette démo, nous simulerons juste un envoi réussi

//     setIsLoading(true);

//     setTimeout(() => {
//       setContactSubmitted(true);
//       setShowThankYouModal(true);
//       setIsLoading(false);

//       // Réinitialiser le formulaire
//       setContactForm({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     }, 1000);
//   };

//   // Fonction pour naviguer entre les onglets
//   const navigateTo = (tab, modelTabType = null) => {
//     setActiveTab(tab);
//     if (modelTabType) {
//       setModelTab(modelTabType);
//     }
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Fonction pour déterminer l'état de santé d'après les prédictions
//   const getHealthStatus = () => {
//     if (!predictions) return null;

//     if (modelTab.startsWith('tb')) {
//       return predictions['Tuberculosis'] > 0.5 ? 'risk' : 'healthy';
//     } else {
//       return predictions['Pneumonia'] > 0.5 ? 'risk' : 'healthy';
//     }
//   };

//   // Fonctions fictives pour simuler l'analyse dans les nouvelles catégories
//   const analyzeSentiment = () => {
//     // Fonction fictive pour la démonstration
//     alert("Cette fonctionnalité sera bientôt disponible");
//   };

//   const classifyDocument = () => {
//     // Fonction fictive pour la démonstration
//     alert("Cette fonctionnalité sera bientôt disponible");
//   };

//   // État pour les nouveaux onglets
//   const [educationTab, setEducationTab] = useState('sentiment');
//   const [sentimentText, setSentimentText] = useState('');
//   const [sentimentResults, setSentimentResults] = useState(null);
//   const [documentFile, setDocumentFile] = useState(null);
//   const [classificationResults, setClassificationResults] = useState(null);

//   // Fonction pour gérer le changement de document
//   const handleDocumentChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setDocumentFile(e.target.files[0]);
//     }
//   };

//   // Rendu de l'application
//   return (
//     <div className="app-container">
//       {/* Barre de navigation */}
//       <Navbar bg="light" expand="lg" className="navbar-custom sticky-top shadow-sm">
//         <Container>
//           {/* <Navbar.Brand
//             href="#home"
//             onClick={() => navigateTo('home')}
//             className="brand-logo"
//           >
//             <span className="text-primary">Afri</span>
//             <span className="text-secondary">AI</span> Solutions
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link
//                 href="#home"
//                 active={activeTab === 'home'}
//                 onClick={() => navigateTo('home')}
//                 className="nav-link-animated"
//               > */}
//           <Navbar.Brand
//             href="#home"
//             onClick={() => navigateTo('home')}
//           >
//             <img
//               src="/logo.jpg" // Assurez-vous que l'image est bien nommée et placée dans le dossier public
//               alt="AfriAI Solutions Logo"
//               style={{
//                 height: '70px', // Taille ajustée pour ce logo spécifique
//                 width: 'auto',
//                 objectFit: 'contain',
//                 marginRight: '0.5rem'
//               }}
//             />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link
//                 href="#home"
//                 active={activeTab === 'home'}
//                 onClick={() => navigateTo('home')}
//                 className="nav-link-animated"
//               >
//                 Accueil
//               </Nav.Link>
//               <Nav.Link
//                 href="#team"
//                 active={activeTab === 'team'}
//                 onClick={() => navigateTo('team')}
//                 className="nav-link-animated"
//               >
//                 Notre Équipe
//               </Nav.Link>
//               {/* Menu déroulant pour les solutions IA */}
//               <NavDropdown
//                 title="Nos solutions IA"
//                 id="solutions-dropdown"
//                 active={['health', 'education', 'environment', 'realestate'].includes(activeTab)}
//               >
//                 <h6 className="dropdown-header">SANTÉ</h6>
//                 <NavDropdown.Item
//                   href="#health/tuberculosis"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('sante');
//                     setModelTab('tb1');
//                   }}
//                 >
//                   <i className="bi bi-lungs me-2"></i>Détection Tuberculose
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   href="#health/tuberculosis-hr"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('sante');
//                     setModelTab('tb2');
//                   }}
//                 >
//                   <i className="bi bi-aspect-ratio me-2"></i>Tuberculose Haute Résolution
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   href="#health/pneumonia"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('sante');
//                     setModelTab('pn');
//                   }}
//                 >
//                   <i className="bi bi-virus me-2"></i>Détection Pneumonie
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />
//                 <h6 className="dropdown-header">ÉDUCATION</h6>
//                 <NavDropdown.Item
//                   href="#education/sentiment"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('education');
//                   }}
//                 >
//                   <i className="bi bi-emoji-smile me-2"></i>Analyse de Sentiment
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   href="#education/classification"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('education');
//                   }}
//                 >
//                   <i className="bi bi-grid-3x3 me-2"></i>Classification Documents
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />
//                 <h6 className="dropdown-header">ENVIRONNEMENT</h6>
//                 <NavDropdown.Item
//                   href="#environment/pollution"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('environnement');
//                   }}
//                 >
//                   <i className="bi bi-cloud me-2"></i>Analyse Pollution
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   href="#environment/deforestation"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('environnement');
//                   }}
//                 >
//                   <i className="bi bi-tree me-2"></i>Détection Déforestation
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />
//                 <h6 className="dropdown-header">AGRICULTURE</h6>
//                 <NavDropdown.Item
//                   href="#agriculture/crops"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('agriculture');
//                   }}
//                 >
//                   <i className="bi bi-flower1 me-2"></i>Analyse de Cultures
//                 </NavDropdown.Item>
//                 <NavDropdown.Item
//                   href="#agriculture/soil"
//                   onClick={() => {
//                     navigateTo('analyze');
//                     setModelCategory('agriculture');
//                   }}
//                 >
//                   <i className="bi bi-water me-2"></i>Qualité du Sol
//                 </NavDropdown.Item>
//               </NavDropdown>

//               {/* <Nav.Link
//                 href="#team"
//                 active={activeTab === 'team'}
//                 onClick={() => navigateTo('team')}
//                 className="nav-link-animated"
//               >
//                 Notre Équipe
//               </Nav.Link> */}

//               <Nav.Link
//                 href="#models"
//                 active={activeTab === 'models'}
//                 onClick={() => navigateTo('models')}
//                 className="nav-link-animated"
//               >
//                 Nos Modèles
//               </Nav.Link>

//               {/* Nouveaux onglets - placés au même niveau que les autres, pas à l'intérieur d'un autre lien */}
//               <Nav.Link
//                 href="#formations"
//                 active={activeTab === 'formations'}
//                 onClick={() => navigateTo('formations')}
//                 className="nav-link-animated"
//               >
//                 Formations
//               </Nav.Link>

//               <Nav.Link
//                 href="#about"
//                 active={activeTab === 'about'}
//                 onClick={() => navigateTo('about')}
//                 className="nav-link-animated"
//               >
//                 À propos
//               </Nav.Link>

//               <Nav.Link
//                 href="#contact"
//                 active={activeTab === 'contact'}
//                 onClick={() => navigateTo('contact')}
//                 className="nav-link-animated"
//               >
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className={`content-wrapper ${activeTab}`}>
//         <Container className="py-4">
//           {isLoading && activeTab !== 'analyze' && (
//             <div className="text-center my-5">
//               <Spinner animation="border" variant="primary" size="lg" />
//               <p className="mt-3">Chargement en cours...</p>
//             </div>
//           )}

//           {error && (
//             <Alert variant="danger" className="my-3 fade-in">
//               <Alert.Heading>Erreur</Alert.Heading>
//               <p>{error}</p>
//             </Alert>
//           )}

//           {/* Page d'accueil MODIFIÉE */}
//           {activeTab === 'home' && !isLoading && (
//             <div className="home-section animate-in">
//               <div className="hero-section text-center mb-5">
//                 <h1 className="display-4 fw-bold text-gradient mb-3">Intelligence Artificielle au service de tous</h1>
//                 <p className="lead mb-4">
//                   Notre équipe d'experts en intelligence artificielle développe des solutions innovantes
//                   adaptées à plusieurs secteurs d'activité.
//                 </p>
//                 <div className="d-flex justify-content-center gap-3">
//                   <Button
//                     variant="primary"
//                     size="lg"
//                     className="btn-with-icon"
//                     onClick={() => navigateTo('analyze')}
//                   >
//                     <i className="bi bi-search me-2"></i> Essayer maintenant
//                   </Button>
//                   <Button
//                     variant="outline-secondary"
//                     size="lg"
//                     className="btn-with-icon"
//                     onClick={() => navigateTo('team')}
//                   >
//                     <i className="bi bi-info-circle me-2"></i> Notre équipe
//                   </Button>
//                 </div>
//               </div>

//               {/* Section des domaines */}
//               <div className="domains-section py-5">
//                 <h2 className="text-center mb-5">Nos domaines d'expertise</h2>
//                 <Row className="g-4">
//                   {/* Domaine Santé */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="domain-icon-wrapper health-bg">
//                         <i className="bi bi-heart-pulse domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Santé</Card.Title>
//                         <Card.Text>
//                           Détection des maladies et aide au diagnostic médical par l'analyse des images radiographiques et des données cliniques.
//                         </Card.Text>
//                         <Button
//                           variant="primary"
//                           className="mt-3"
//                           onClick={() => {
//                             navigateTo('analyze');
//                             setModelCategory('sante');
//                           }}
//                         >
//                           Explorer nos solutions <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   {/* Domaine Environnement */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="domain-icon-wrapper environment-bg">
//                         <i className="bi bi-tree domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Environnement</Card.Title>
//                         <Card.Text>
//                           Analyse des données climatiques, détection de la déforestation et surveillance de la qualité de l'air.
//                         </Card.Text>
//                         <Button
//                           variant="outline-success"
//                           className="mt-3"
//                           onClick={() => {
//                             navigateTo('analyze');
//                             setModelCategory('environnement');
//                           }}
//                         >
//                           Explorer nos solutions <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   {/* Domaine Éducation */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="domain-icon-wrapper education-bg">
//                         <i className="bi bi-book domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Éducation & Formation</Card.Title>
//                         <Card.Text>
//                           Personnalisation de l'apprentissage et analyse des performances des étudiants pour un enseignement adaptatif.
//                         </Card.Text>
//                         <Button
//                           variant="outline-primary"
//                           className="mt-3"
//                           onClick={() => {
//                             navigateTo('analyze');
//                             setModelCategory('education');
//                           }}
//                         >
//                           Explorer nos solutions <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   {/* Domaine Agriculture */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="domain-icon-wrapper agriculture-bg">
//                         <i className="bi bi-flower1 domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Agriculture</Card.Title>
//                         <Card.Text>
//                           Optimisation des rendements agricoles, analyse des sols et prévision des récoltes.
//                         </Card.Text>
//                         <Button
//                           variant="outline-success"
//                           className="mt-3"
//                           onClick={() => {
//                             navigateTo('analyze');
//                             setModelCategory('agriculture');
//                           }}
//                         >
//                           Explorer nos solutions <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   {/* Domaine Finance */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="domain-icon-wrapper finance-bg">
//                         <i className="bi bi-cash-coin domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Finance</Card.Title>
//                         <Card.Text>
//                           Analyse des risques financiers, détection des fraudes et optimisation des investissements.
//                         </Card.Text>
//                         <Button
//                           variant="outline-primary"
//                           className="mt-3"
//                           onClick={() => {
//                             navigateTo('analyze');
//                             setModelCategory('finance');
//                           }}
//                         >
//                           Explorer nos solutions <i className="bi bi-arrow-right ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   {/* Carte "Bientôt disponible" pour futurs domaines */}
//                   <Col md={6} lg={4}>
//                     <Card className="domain-home-card h-100 border-0 shadow-sm hover-effect coming-soon-card">
//                       <div className="domain-icon-wrapper coming-soon-bg">
//                         <i className="bi bi-plus-lg domain-icon"></i>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-3">Bientôt disponible</Card.Title>
//                         <Card.Text>
//                           De nouveaux domaines d'application seront bientôt ajoutés à notre plateforme. Restez à l'écoute !
//                         </Card.Text>
//                         <Button
//                           variant="outline-secondary"
//                           className="mt-3"
//                           onClick={() => navigateTo('contact')}
//                         >
//                           Suggérer un domaine <i className="bi bi-send ms-1"></i>
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </Row>
//               </div>

//               {/* Section "Pourquoi nous choisir" */}
//               <div className="features-section py-5">
//                 <h2 className="text-center mb-5">Pourquoi choisir TeamAI Solutions?</h2>
//                 <Row className="g-4">
//                   <Col md={4}>
//                     <div className="feature-item text-center">
//                       <div className="feature-icon mb-3">
//                         <i className="bi bi-graph-up-arrow"></i>
//                       </div>
//                       <h3 className="feature-title">Haute précision</h3>
//                       <p className="feature-text">
//                         Nos modèles d'IA atteignent une précision supérieure à 90% sur l'ensemble de nos domaines d'application.
//                       </p>
//                     </div>
//                   </Col>
//                   <Col md={4}>
//                     <div className="feature-item text-center">
//                       <div className="feature-icon mb-3">
//                         <i className="bi bi-shield-check"></i>
//                       </div>
//                       <h3 className="feature-title">Sécurité des données</h3>
//                       <p className="feature-text">
//                         Nous garantissons la confidentialité et la sécurité de vos données, avec un traitement respectant les normes internationales.
//                       </p>
//                     </div>
//                   </Col>
//                   <Col md={4}>
//                     <div className="feature-item text-center">
//                       <div className="feature-icon mb-3">
//                         <i className="bi bi-people"></i>
//                       </div>
//                       <h3 className="feature-title">Expertise</h3>
//                       <p className="feature-text">
//                         Notre équipe pluridisciplinaire combine des compétences en IA, data science et expertise métier dans chaque domaine.
//                       </p>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>

//               {/* Appel à l'action */}
//               <div className="cta-section text-center my-5 p-5 bg-light rounded">
//                 <h2 className="mb-4">Prêt à explorer nos solutions?</h2>
//                 <p className="lead mb-4">
//                   Découvrez comment notre technologie d'IA peut transformer votre organisation.
//                 </p>
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={() => navigateTo('contact')}
//                 >
//                   Contactez-nous maintenant
//                 </Button>
//               </div>
//             </div>
//           )}





//           {/* Notre équipe */}
//           {activeTab === 'team' && !isLoading && (
//             <div className="team-section animate-in">
//               <h1 className="text-center mb-2">Notre Équipe</h1>
//               <p className="text-center lead mb-5">
//                 Une équipe passionnée de chercheurs et d'ingénieurs spécialisés dans
//                 différents domaines de l'intelligence artificielle.
//               </p>

//               <Row className="g-4">
//                 {teamMembers.map((member, index) => (
//                   <Col key={index} md={4} className="mb-4">
//                     <Card className="team-card h-100 border-0 shadow-sm hover-effect">
//                       <div className="team-member-avatar">
//                         {/* Utiliser le chemin relatif au dossier public */}
//                         {(member.image || member.Images) && (
//                           <img
//                             src={`/team/${member.image || member.Images}`}
//                             alt={member.name}
//                             className="team-member-img rounded-circle"
//                             onError={(e) => {
//                               // Fallback si l'image ne se charge pas
//                               e.target.style.display = 'none';
//                               e.target.nextElementSibling.style.display = 'flex';
//                             }}
//                           />
//                         )}

//                         {/* Fallback toujours présent mais caché si l'image existe */}
//                         <div className="avatar-placeholder" style={{ display: (member.image || member.Images) ? 'none' : 'flex' }}>
//                           {member.name.charAt(0)}
//                         </div>
//                       </div>
//                       <Card.Body className="text-center">
//                         <Card.Title className="mb-2">{member.name}</Card.Title>
//                         <Card.Subtitle className="mb-3 text-primary">{member.role}</Card.Subtitle>
//                         <div className="social-icons">
//                           <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
//                           <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
//                           <a href="#" className="social-icon"><i className="bi bi-envelope"></i></a>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </Row>

//               <div className="team-cta text-center mt-5">
//                 <h3>Intéressé à collaborer avec nous?</h3>
//                 <p className="mb-4">Nous sommes toujours ouverts à de nouvelles collaborations et partenariats.</p>
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   onClick={() => navigateTo('contact')}
//                 >
//                   Contactez-nous
//                 </Button>
//               </div>
//             </div>
//           )}






//           {/* Nos modèles - SECTION MISE À JOUR */}
//           {activeTab === 'models' && !isLoading && (
//             <div className="models-section animate-in">
//               <h1 className="text-center mb-2">Nos Modèles d'IA</h1>
//               <p className="text-center lead mb-5">
//                 Des algorithmes de pointe pour plusieurs domaines d'application.
//               </p>

//               {/* Onglets des catégories pour les modèles */}
//               <div className="category-tabs d-flex justify-content-center mb-5">
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'tous' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'tous' ? 'primary' : 'light'}
//                   onClick={() => setModelCategoryFilter('tous')}
//                 >
//                   Tous
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'sante' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'sante' ? 'primary' : 'light'}
//                   onClick={() => setModelCategoryFilter('sante')}
//                 >
//                   Santé
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'agriculture' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'agriculture' ? 'light' : 'light'}
//                   onClick={() => setModelCategoryFilter('agriculture')}
//                 >
//                   Agriculture
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'education' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'education' ? 'light' : 'light'}
//                   onClick={() => setModelCategoryFilter('education')}
//                 >
//                   Education
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'finance' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'finance' ? 'light' : 'light'}
//                   onClick={() => setModelCategoryFilter('finance')}
//                 >
//                   Finance
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategoryFilter === 'environnement' ? 'active' : ''}`}
//                   variant={modelCategoryFilter === 'environnement' ? 'light' : 'light'}
//                   onClick={() => setModelCategoryFilter('environnement')}
//                 >
//                   Environnement
//                 </Button>
//               </div>

//               {/* Tableau des modèles filtré par catégorie */}
//               <Card className="mb-5 border-0 shadow-sm">
//                 <Card.Body>
//                   <Card.Title className="border-bottom pb-3 mb-4">
//                     {modelCategoryFilter === 'tous' ? 'Tous nos modèles' :
//                       modelCategoryFilter === 'sante' ? 'Modèles Santé' :
//                         modelCategoryFilter === 'agriculture' ? 'Modèles Agriculture' :
//                           modelCategoryFilter === 'education' ? 'Modèles Éducation' :
//                             modelCategoryFilter === 'finance' ? 'Modèles Finance' :
//                               'Modèles Environnement'}
//                   </Card.Title>
//                   <div className="table-responsive">
//                     <table className="table table-hover model-comparison-table">
//                       <thead className="table-light">
//                         <tr>
//                           <th>Modèle</th>
//                           <th>Application</th>
//                           <th>Technologie</th>
//                           <th>Précision</th>
//                           <th>Disponibilité</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* Pour les modèles de santé existants */}
//                         {(modelCategoryFilter === 'tous' || modelCategoryFilter === 'sante') && modelsInfo.map((model, index) => (
//                           <tr key={index} className="model-row">
//                             <td className="fw-bold">{model.name}</td>
//                             <td>{model.disease}</td>
//                             <td><span className="badge bg-light text-dark">{model.technology}</span></td>
//                             <td>
//                               <div className="d-flex align-items-center">
//                                 <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                   <div
//                                     className="progress-bar bg-success"
//                                     style={{ width: `${model.accuracy}%` }}
//                                     aria-valuenow={model.accuracy}
//                                     aria-valuemin="0"
//                                     aria-valuemax="100"
//                                   ></div>
//                                 </div>
//                                 <span className="ms-2 text-success fw-bold">{model.accuracy}%</span>
//                               </div>
//                             </td>
//                             <td><span className="badge bg-success">Disponible</span></td>
//                             <td>
//                               <Button
//                                 variant="outline-primary"
//                                 size="sm"
//                                 onClick={() => {
//                                   navigateTo('analyze');
//                                   setModelCategory('sante');
//                                   setModelTab(model.name.includes('v1') ? 'tb1' : model.name.includes('v2') ? 'tb2' : 'pn');
//                                 }}
//                               >
//                                 Essayer
//                               </Button>
//                             </td>
//                           </tr>
//                         ))}

//                         {/* Modèles Agriculture (à venir) */}
//                         {(modelCategoryFilter === 'tous' || modelCategoryFilter === 'agriculture') && (
//                           <>
//                             <tr className="model-row">
//                               <td className="fw-bold">CropAnalyzer</td>
//                               <td>Analyse de cultures</td>
//                               <td><span className="badge bg-light text-dark">CNN + Vision</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `90%` }}
//                                       aria-valuenow={90}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">90%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                             <tr className="model-row">
//                               <td className="fw-bold">SoilQualityAI</td>
//                               <td>Analyse de sol</td>
//                               <td><span className="badge bg-light text-dark">XGBoost</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `88%` }}
//                                       aria-valuenow={88}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">88%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                           </>
//                         )}

//                         {/* Modèles Éducation (à venir) */}
//                         {(modelCategoryFilter === 'tous' || modelCategoryFilter === 'education') && (
//                           <>
//                             <tr className="model-row">
//                               <td className="fw-bold">SentimentAnalyzer</td>
//                               <td>Analyse de sentiment étudiant</td>
//                               <td><span className="badge bg-light text-dark">NLP (BERT)</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `89%` }}
//                                       aria-valuenow={89}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">89%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                             <tr className="model-row">
//                               <td className="fw-bold">ContentClassifier</td>
//                               <td>Classification de contenu éducatif</td>
//                               <td><span className="badge bg-light text-dark">NLP (TF-IDF)</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `92%` }}
//                                       aria-valuenow={92}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">92%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                           </>
//                         )}

//                         {/* Ajoutez les autres modèles de la même façon pour les domaines Finance et Environnement */}
//                         {/* Modèles Finance (à venir) */}
//                         {(modelCategoryFilter === 'tous' || modelCategoryFilter === 'finance') && (
//                           <>
//                             <tr className="model-row">
//                               <td className="fw-bold">FraudDetector</td>
//                               <td>Détection de fraudes</td>
//                               <td><span className="badge bg-light text-dark">ML (Random Forest)</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `94%` }}
//                                       aria-valuenow={94}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">94%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                           </>
//                         )}

//                         {/* Modèles Environnement (à venir) */}
//                         {(modelCategoryFilter === 'tous' || modelCategoryFilter === 'environnement') && (
//                           <>
//                             <tr className="model-row">
//                               <td className="fw-bold">AirQualityPredictor</td>
//                               <td>Prédiction qualité de l'air</td>
//                               <td><span className="badge bg-light text-dark">LSTM</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `87%` }}
//                                       aria-valuenow={87}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">87%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                             <tr className="model-row">
//                               <td className="fw-bold">DeforestationDetector</td>
//                               <td>Détection déforestation</td>
//                               <td><span className="badge bg-light text-dark">CNN + Satellite</span></td>
//                               <td>
//                                 <div className="d-flex align-items-center">
//                                   <div className="progress flex-grow-1" style={{ height: '10px' }}>
//                                     <div
//                                       className="progress-bar bg-success"
//                                       style={{ width: `93%` }}
//                                       aria-valuenow={93}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                   <span className="ms-2 text-success fw-bold">93%</span>
//                                 </div>
//                               </td>
//                               <td><span className="badge bg-warning">Bientôt</span></td>
//                               <td>
//                                 <Button
//                                   variant="outline-secondary"
//                                   size="sm"
//                                   disabled
//                                 >
//                                   Bientôt disponible
//                                 </Button>
//                               </td>
//                             </tr>
//                           </>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </Card.Body>
//               </Card>

//               <div className="models-details">
//                 <h2 className="text-center mb-4">Détails techniques</h2>
//                 <Row className="g-4">
//                   <Col lg={4}>
//                     <Card className="h-100 border-0 shadow-sm model-detail-card">
//                       <Card.Body>
//                         <div className="model-icon mb-3">
//                           <i className="bi bi-cpu"></i>
//                         </div>
//                         <Card.Title>Architecture CNN</Card.Title>
//                         <Card.Text>
//                           Nos modèles utilisent des réseaux de neurones convolutifs (CNN) pour analyser
//                           les images en détectant automatiquement les motifs
//                           caractéristiques recherchés.
//                         </Card.Text>
//                         <div className="tech-specs mt-3">
//                           <div className="spec-item">
//                             <span className="spec-label">Framework:</span>
//                             <span className="spec-value">TensorFlow/Keras</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Couches:</span>
//                             <span className="spec-value">18-24</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Paramètres:</span>
//                             <span className="spec-value">~10 millions</span>
//                           </div>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   <Col lg={4}>
//                     <Card className="h-100 border-0 shadow-sm model-detail-card">
//                       <Card.Body>
//                         <div className="model-icon mb-3">
//                           <i className="bi bi-database"></i>
//                         </div>
//                         <Card.Title>Jeux de données</Card.Title>
//                         <Card.Text>
//                           Nos modèles sont entraînés sur de vastes ensembles de données annotées
//                           par des experts, garantissant une grande précision dans la détection.
//                         </Card.Text>
//                         <div className="tech-specs mt-3">
//                           <div className="spec-item">
//                             <span className="spec-label">Images d'entraînement:</span>
//                             <span className="spec-value">+10,000</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Validation:</span>
//                             <span className="spec-value">2,500 exemples</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Test:</span>
//                             <span className="spec-value">1,500 exemples</span>
//                           </div>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>

//                   <Col lg={4}>
//                     <Card className="h-100 border-0 shadow-sm model-detail-card">
//                       <Card.Body>
//                         <div className="model-icon mb-3">
//                           <i className="bi bi-graph-up"></i>
//                         </div>
//                         <Card.Title>Performance</Card.Title>
//                         <Card.Text>
//                           Nos modèles offrent des performances de pointe en termes de précision,
//                           de sensibilité et de spécificité, permettant une détection fiable et précise.
//                         </Card.Text>
//                         <div className="tech-specs mt-3">
//                           <div className="spec-item">
//                             <span className="spec-label">Précision moyenne:</span>
//                             <span className="spec-value">90.5%</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Rappel moyen:</span>
//                             <span className="spec-value">91.2%</span>
//                           </div>
//                           <div className="spec-item">
//                             <span className="spec-label">Temps d'inférence:</span>
//                             <span className="spec-value">&lt; 1 seconde</span>
//                           </div>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 </Row>
//               </div>
//             </div>
//           )}


//           {/* Page d'analyse MODIFIÉE */}
//           {activeTab === 'analyze' && (
//             <div className="analyze-section animate-in">
//               <div className="text-center my-5">
//                 <h1 className="fw-bold mb-3">Nos Modèles d'Intelligence Artificielle</h1>
//                 <p className="lead mb-5">
//                   Découvrez nos solutions d'IA innovantes conçues pour résoudre des problèmes
//                   complexes dans différents secteurs d'activité.
//                 </p>
//               </div>

//               {/* Onglets des catégories */}
//               <div className="category-tabs d-flex justify-content-center mb-5">
//                 <Button
//                   className={`category-tab mx-2 ${modelCategory === 'sante' ? 'active' : ''}`}
//                   variant={modelCategory === 'sante' ? 'primary' : 'light'}
//                   onClick={() => setModelCategory('sante')}
//                 >
//                   Santé
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategory === 'agriculture' ? 'active' : ''}`}
//                   variant={modelCategory === 'agriculture' ? 'light' : 'light'}
//                   onClick={() => setModelCategory('agriculture')}
//                 >
//                   Agriculture
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategory === 'education' ? 'active' : ''}`}
//                   variant={modelCategory === 'education' ? 'light' : 'light'}
//                   onClick={() => setModelCategory('education')}
//                 >
//                   Education
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategory === 'finance' ? 'active' : ''}`}
//                   variant={modelCategory === 'finance' ? 'light' : 'light'}
//                   onClick={() => setModelCategory('finance')}
//                 >
//                   Finance
//                 </Button>
//                 <Button
//                   className={`category-tab mx-2 ${modelCategory === 'environnement' ? 'active' : ''}`}
//                   variant={modelCategory === 'environnement' ? 'light' : 'light'}
//                   onClick={() => setModelCategory('environnement')}
//                 >
//                   Environnement
//                 </Button>
//               </div>

//               {/* Section santé */}
//               {modelCategory === 'sante' && (
//                 <div className="active-category-section bg-white p-4 rounded shadow-sm">
//                   <h2 className="mb-4">Santé</h2>
//                   <p className="mb-4">
//                     Nos modèles d'IA pour le secteur de la santé aident les professionnels à diagnostiquer les maladies,
//                     analyser les images médicales et prédire les risques patients.
//                   </p>

//                   <Row className="g-4">
//                     {/* Modèle DiagnosticAI */}
//                     <Col md={6} className="mb-4">
//                       <div className="model-card p-4 bg-light rounded">
//                         <div className="d-flex align-items-center mb-3">
//                           <div className="model-icon">
//                             <i className="bi bi-clipboard2-pulse"></i>
//                           </div>
//                           <h3 className="ms-3 mb-0">DiagnosticAI</h3>
//                         </div>
//                         <p>Système d'aide au diagnostic basé sur les symptômes et l'historique médical</p>
//                         <Button
//                           variant="primary"
//                           className="try-model-btn"
//                           onClick={() => setModelTab('diagnostic')}
//                         >
//                           Essayer ce modèle <i className="bi bi-arrow-right"></i>
//                         </Button>
//                       </div>
//                     </Col>

//                     {/* Modèle MedVision */}
//                     <Col md={6} className="mb-4">
//                       <div className="model-card p-4 bg-light rounded">
//                         <div className="d-flex align-items-center mb-3">
//                           <div className="model-icon">
//                             <i className="bi bi-eye"></i>
//                           </div>
//                           <h3 className="ms-3 mb-0">MedVision</h3>
//                         </div>
//                         <p>Analyse d'images médicales (radiographies, IRM, scanners)</p>
//                         <Button
//                           variant="primary"
//                           className="try-model-btn"
//                           onClick={() => setModelTab('medvision')}
//                         >
//                           Essayer ce modèle <i className="bi bi-arrow-right"></i>
//                         </Button>
//                       </div>
//                     </Col>

//                     {/* Modèle TuberculosisDetect v1 */}
//                     <Col md={6} className="mb-4">
//                       <div className="model-card p-4 bg-light rounded">
//                         <div className="d-flex align-items-center mb-3">
//                           <div className="model-icon">
//                             <i className="bi bi-lungs"></i>
//                           </div>
//                           <h3 className="ms-3 mb-0">TuberculosisDetect v1</h3>
//                         </div>
//                         <p>Détection de la tuberculose à partir de radiographies pulmonaires avec une précision de 93.5%.</p>
//                         <Button
//                           variant="primary"
//                           className="try-model-btn"
//                           onClick={() => setModelTab('tb1')}
//                         >
//                           Essayer ce modèle <i className="bi bi-arrow-right"></i>
//                         </Button>
//                       </div>
//                     </Col>

//                     {/* Modèle TuberculosisDetect v2 */}
//                     <Col md={6} className="mb-4">
//                       <div className="model-card p-4 bg-light rounded">
//                         <div className="d-flex align-items-center mb-3">
//                           <div className="model-icon">
//                             <i className="bi bi-aspect-ratio"></i>
//                           </div>
//                           <h3 className="ms-3 mb-0">TuberculosisDetect v2</h3>
//                         </div>
//                         <p>Version améliorée avec une résolution de 256x256 pixels pour capturer plus de détails.</p>
//                         <Button
//                           variant="primary"
//                           className="try-model-btn"
//                           onClick={() => setModelTab('tb2')}
//                         >
//                           Essayer ce modèle <i className="bi bi-arrow-right"></i>
//                         </Button>
//                       </div>
//                     </Col>

//                     {/* Modèle PneumoniaDetect */}
//                     <Col md={6} className="mb-4">
//                       <div className="model-card p-4 bg-light rounded">
//                         <div className="d-flex align-items-center mb-3">
//                           <div className="model-icon">
//                             <i className="bi bi-virus"></i>
//                           </div>
//                           <h3 className="ms-3 mb-0">PneumoniaDetect</h3>
//                         </div>
//                         <p>Détection de la pneumonie avec une résolution de 64x64 pixels.</p>
//                         <Button
//                           variant="primary"
//                           className="try-model-btn"
//                           onClick={() => setModelTab('pn')}
//                         >
//                           Essayer ce modèle <i className="bi bi-arrow-right"></i>
//                         </Button>
//                       </div>
//                     </Col>
//                   </Row>
//                 </div>
//               )}

//               {/* Section agriculture */}
//               {modelCategory === 'agriculture' && (
//                 <div className="active-category-section bg-white p-4 rounded shadow-sm">
//                   <h2 className="mb-4">Agriculture</h2>
//                   <p className="mb-4">
//                     Nos modèles d'IA pour l'agriculture aident à optimiser les rendements, analyser les sols
//                     et prédire les meilleures périodes de récolte.
//                   </p>

//                   {/* Ajouter vos modèles agriculture ici */}
//                   <div className="text-center py-5">
//                     <div className="empty-state-icon">
//                       <i className="bi bi-flower1 fs-1 text-muted"></i>
//                     </div>
//                     <p className="mt-3 lead">
//                       Nos modèles pour l'agriculture seront bientôt disponibles.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Sections pour les autres catégories */}
//               {modelCategory === 'education' && (
//                 <div className="active-category-section bg-white p-4 rounded shadow-sm">
//                   <h2 className="mb-4">Éducation</h2>
//                   <p className="mb-4">
//                     Nos modèles d'IA pour l'éducation personnalisent l'apprentissage et analysent
//                     les performances des étudiants.
//                   </p>

//                   {/* Ajouter vos modèles éducation ici */}
//                   <div className="text-center py-5">
//                     <div className="empty-state-icon">
//                       <i className="bi bi-book fs-1 text-muted"></i>
//                     </div>
//                     <p className="mt-3 lead">
//                       Nos modèles pour l'éducation seront bientôt disponibles.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Finance */}
//               {modelCategory === 'finance' && (
//                 <div className="active-category-section bg-white p-4 rounded shadow-sm">
//                   <h2 className="mb-4">Finance</h2>
//                   <p className="mb-4">
//                     Nos modèles d'IA pour la finance aident à détecter les fraudes, analyser les risques
//                     et optimiser les investissements.
//                   </p>

//                   <div className="text-center py-5">
//                     <div className="empty-state-icon">
//                       <i className="bi bi-cash-coin fs-1 text-muted"></i>
//                     </div>
//                     <p className="mt-3 lead">
//                       Nos modèles pour la finance seront bientôt disponibles.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Environnement */}
//               {modelCategory === 'environnement' && (
//                 <div className="active-category-section bg-white p-4 rounded shadow-sm">
//                   <h2 className="mb-4">Environnement</h2>
//                   <p className="mb-4">
//                     Nos modèles d'IA pour l'environnement aident à surveiller la qualité de l'air,
//                     détecter la déforestation et prédire les catastrophes naturelles.
//                   </p>

//                   <div className="text-center py-5">
//                     <div className="empty-state-icon">
//                       <i className="bi bi-tree fs-1 text-muted"></i>
//                     </div>
//                     <p className="mt-3 lead">
//                       Nos modèles pour l'environnement seront bientôt disponibles.
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {/* Interface d'analyse lorsqu'un modèle est sélectionné */}
//               {modelTab && ['tb1', 'tb2', 'pn'].includes(modelTab) && (
//                 <div className="model-analysis mt-5">
//                   <Tabs
//                     activeKey={modelTab}
//                     onSelect={(k) => setModelTab(k)}
//                     className="mb-4 analyze-tabs"
//                     justify
//                   >
//                     <Tab eventKey="tb1" title={<span><i className="bi bi-lungs me-2"></i>Tuberculose v1</span>}>
//                       <Card className="mb-4 border-0 shadow-sm">
//                         <Card.Body>
//                           <Card.Title className="text-primary">TuberculosisDetect v1</Card.Title>
//                           <Card.Text>
//                             Ce modèle utilise un réseau neuronal convolutif (CNN) pour analyser les radiographies
//                             thoraciques avec une résolution de 64x64 pixels. Précision: 93.5%.
//                           </Card.Text>
//                           <div className="model-tags">
//                             <span className="model-tag">CNN</span>
//                             <span className="model-tag">64x64px</span>
//                             <span className="model-tag">Tuberculose</span>
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </Tab>
//                     <Tab eventKey="tb2" title={<span><i className="bi bi-aspect-ratio me-2"></i>Tuberculose v2</span>}>
//                       <Card className="mb-4 border-0 shadow-sm">
//                         <Card.Body>
//                           <Card.Title className="text-primary">TuberculosisDetect v2</Card.Title>
//                           <Card.Text>
//                             Version améliorée avec une résolution de 256x256 pixels pour capturer plus de détails.
//                             Précision: 96.2%.
//                           </Card.Text>
//                           <div className="model-tags">
//                             <span className="model-tag">CNN</span>
//                             <span className="model-tag">256x256px</span>
//                             <span className="model-tag">Haute résolution</span>
//                             <span className="model-tag">Tuberculose</span>
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </Tab>
//                     <Tab eventKey="pn" title={<span><i className="bi bi-virus me-2"></i>Pneumonie</span>}>
//                       <Card className="mb-4 border-0 shadow-sm">
//                         <Card.Body>
//                           <Card.Title className="text-primary">PneumoniaDetect</Card.Title>
//                           <Card.Text>
//                             Détection de la pneumonie avec une résolution de 64x64 pixels.
//                             Précision: 91.8%.
//                           </Card.Text>
//                           <div className="model-tags">
//                             <span className="model-tag">CNN</span>
//                             <span className="model-tag">64x64px</span>
//                             <span className="model-tag">Pneumonie</span>
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </Tab>
//                   </Tabs>

//                   <Row>
//                     <Col lg={6} ref={analyzeRef}>
//                       <Card className="mb-4 border-0 shadow-sm upload-card">
//                         <Card.Body>
//                           <Card.Title>
//                             <i className="bi bi-cloud-upload me-2"></i>
//                             Télécharger une image
//                           </Card.Title>

//                           <div className="upload-area mt-4">
//                             <Form.Group className="mb-3">
//                               <div className="custom-file-upload">
//                                 <input
//                                   type="file"
//                                   id="image-upload"
//                                   className="file-input"
//                                   accept="image/*"
//                                   onChange={handleImageChange}
//                                 />
//                                 <label htmlFor="image-upload" className="file-upload-label">
//                                   <div className="upload-icon">
//                                     <i className="bi bi-image"></i>
//                                   </div>
//                                   <div className="upload-text">
//                                     <span className="primary-text">Choisir une radiographie</span>
//                                     <span className="secondary-text">ou glisser-déposer ici</span>
//                                   </div>
//                                 </label>
//                               </div>
//                             </Form.Group>

//                             {imagePreview && (
//                               <div className="image-preview-container">
//                                 <img
//                                   src={imagePreview}
//                                   alt="Aperçu"
//                                   className="img-preview"
//                                 />
//                                 <Button
//                                   variant="outline-danger"
//                                   size="sm"
//                                   className="remove-image-btn"
//                                   onClick={() => {
//                                     setImagePreview(null);
//                                     setImage(null);
//                                     setPredictions(null);
//                                     setAnalysisCompleted(false);
//                                   }}
//                                 >
//                                   <i className="bi bi-x-lg"></i>
//                                 </Button>
//                               </div>
//                             )}

//                             <Button
//                               variant="primary"
//                               onClick={analyzeImage}
//                               disabled={!image || isLoading}
//                               className="w-100 mt-3 analyze-btn"
//                             >
//                               {isLoading ? (
//                                 <>
//                                   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />{' '}
//                                   Analyse en cours...
//                                 </>
//                               ) : (
//                                 <>
//                                   <i className="bi bi-search me-2"></i> Analyser l'image
//                                 </>
//                               )}
//                             </Button>
//                           </div>
//                         </Card.Body>
//                       </Card>

//                       <Card className="border-0 shadow-sm info-card">
//                         <Card.Body>
//                           <Card.Title>
//                             <i className="bi bi-info-circle me-2"></i>
//                             Informations sur la maladie
//                           </Card.Title>

//                           <Form.Group className="mb-3 mt-4">
//                             <Form.Label>Choisir un sujet</Form.Label>
//                             <Form.Select
//                               value={infoTopic}
//                               onChange={(e) => setInfoTopic(e.target.value)}
//                               className="topic-select"
//                             >
//                               <option value="Description">Description</option>
//                               <option value="Prévention">Prévention</option>
//                               <option value="Traitements">Traitements</option>
//                             </Form.Select>
//                           </Form.Group>

//                           <div className="info-content mt-4">
//                             {diseaseInfo && (
//                               <div
//                                 className="disease-info"
//                                 dangerouslySetInnerHTML={{ __html: diseaseInfo.replace(/\n/g, '<br>') }}
//                               />
//                             )}
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </Col>

//                     <Col lg={6} ref={resultsRef}>
//                       <Card className={`border-0 shadow-sm results-card ${analysisCompleted ? 'has-results' : ''} ${getHealthStatus() || ''}`}>
//                         <Card.Body>
//                           <Card.Title>
//                             <i className="bi bi-bar-chart me-2"></i>
//                             Résultats de l'analyse
//                           </Card.Title>

//                           {error && (
//                             <Alert variant="danger" className="mt-4">
//                               <i className="bi bi-exclamation-triangle me-2"></i>
//                               {error}
//                             </Alert>
//                           )}

//                           {isLoading && (
//                             <div className="text-center py-5">
//                               <div className="spinner-container">
//                                 <Spinner animation="border" role="status" variant="primary" className="custom-spinner" />
//                                 <svg className="spinner-track" viewBox="0 0 100 100">
//                                   <circle cx="50" cy="50" r="40" />
//                                 </svg>
//                               </div>
//                               <p className="mt-4 loading-text">
//                                 Analyse de l'image en cours<span className="dot-animation">...</span>
//                               </p>
//                               <p className="text-muted small">Notre IA analyse attentivement votre radiographie</p>
//                             </div>
//                           )}

//                           {!isLoading && predictions && (
//                             <div className="mt-4 prediction-results animate-results">
//                               <h5 className="prediction-title">Prédictions :</h5>

//                               {Object.entries(predictions).map(([label, value]) => (
//                                 <div key={label} className="mb-4 prediction-item">
//                                   <div className="d-flex justify-content-between mb-2">
//                                     <span className={`prediction-label ${label === 'Normal' ? 'text-success' : 'text-warning'}`}>
//                                       <i className={`bi ${label === 'Normal' ? 'bi-shield-check' : 'bi-shield-exclamation'} me-2`}></i>
//                                       {label}
//                                     </span>
//                                     <span className={`prediction-value ${label === 'Normal' ? 'text-success' : 'text-warning'} fw-bold`}>
//                                       {(value * 100).toFixed(1)}%
//                                     </span>
//                                   </div>
//                                   <div className="progress prediction-progress" style={{ height: '10px' }}>
//                                     <div
//                                       className={`progress-bar ${label === 'Normal' ? 'bg-success' : 'bg-warning'}`}
//                                       role="progressbar"
//                                       style={{ width: `${value * 100}%` }}
//                                       aria-valuenow={value * 100}
//                                       aria-valuemin="0"
//                                       aria-valuemax="100"
//                                     ></div>
//                                   </div>
//                                 </div>
//                               ))}

//                               <div className={`diagnosis-card mt-4 ${getHealthStatus()}`}>
//                                 <div className="diagnosis-header">
//                                   <div className="diagnosis-icon">
//                                     <i className={`bi ${getHealthStatus() === 'healthy' ? 'bi-heart-pulse' : 'bi-clipboard2-pulse'}`}></i>
//                                   </div>
//                                   <h5 className="diagnosis-title">Interprétation :</h5>
//                                 </div>
//                                 <div className="diagnosis-content">
//                                   {modelTab.startsWith('tb') ? (
//                                     <p className="mb-0">
//                                       {predictions['Tuberculosis'] > 0.5 ?
//                                         "Cette radiographie présente des caractéristiques compatibles avec une tuberculose. Une évaluation clinique complémentaire est recommandée." :
//                                         "Cette radiographie ne présente pas de signes évidents de tuberculose. Cependant, une évaluation clinique est toujours recommandée pour un diagnostic complet."}
//                                     </p>
//                                   ) : (
//                                     <p className="mb-0">
//                                       {predictions['Pneumonia'] > 0.5 ?
//                                         "Cette radiographie présente des caractéristiques compatibles avec une pneumonie. Une évaluation clinique complémentaire est recommandée." :
//                                         "Cette radiographie ne présente pas de signes évidents de pneumonie. Cependant, une évaluation clinique est toujours recommandée pour un diagnostic complet."}
//                                     </p>
//                                   )}
//                                 </div>
//                               </div>

//                               <div className="mt-4 text-center">
//                                 <div className="medical-disclaimer">
//                                   <i className="bi bi-exclamation-circle me-2"></i>
//                                   <small>
//                                     Ce résultat est généré par intelligence artificielle et ne constitue pas un diagnostic médical.
//                                     Consultez toujours un professionnel de santé qualifié.
//                                   </small>
//                                 </div>

//                                 <div className="action-buttons mt-4">
//                                   <Button
//                                     variant="outline-primary"
//                                     className="me-2"
//                                     onClick={() => {
//                                       setImagePreview(null);
//                                       setImage(null);
//                                       setPredictions(null);
//                                       setAnalysisCompleted(false);
//                                       if (analyzeRef.current) {
//                                         analyzeRef.current.scrollIntoView({ behavior: 'smooth' });
//                                       }
//                                     }}
//                                   >
//                                     <i className="bi bi-arrow-repeat me-2"></i>
//                                     Nouvelle analyse
//                                   </Button>
//                                   <Button
//                                     variant="outline-secondary"
//                                     onClick={() => window.print()}
//                                   >
//                                     <i className="bi bi-printer me-2"></i>
//                                     Imprimer les résultats
//                                   </Button>
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           {!isLoading && !predictions && !error && (
//                             <div className="text-center py-5 no-results">
//                               <div className="empty-state-icon">
//                                 <i className="bi bi-image"></i>
//                               </div>
//                               <p className="mt-3 lead">
//                                 Veuillez télécharger une image et cliquer sur "Analyser l'image" pour voir les résultats.
//                               </p>
//                               <p className="text-muted">
//                                 Supporté: radiographies pulmonaires au format JPG, PNG ou JPEG
//                               </p>
//                             </div>
//                           )}
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   </Row>
//                 </div>
//               )}
//             </div>
//           )}



//           {/* Ajout des deux news pages */}
//           {/* Page Formations */}
//           {activeTab === 'formations' && !isLoading && (
//             <Formations />
//           )}

//           {/* Page À propos */}
//           {activeTab === 'about' && !isLoading && (
//             <About />
//           )}


//           {/* Page de contact */}
//           {activeTab === 'contact' && !isLoading && (
//             <div className="contact-section animate-in">
//               <h1 className="text-center mb-2">Contactez-nous</h1>
//               <p className="text-center lead mb-5">
//                 Vous avez des questions ou souhaitez collaborer avec nous? N'hésitez pas à nous contacter.
//               </p>

//               <Row>
//                 <Col lg={6}>
//                   <Card className="border-0 shadow-sm contact-card">
//                     <Card.Body>
//                       <Card.Title className="pb-3 border-bottom mb-4">
//                         <i className="bi bi-envelope-paper me-2"></i>
//                         Formulaire de contact
//                       </Card.Title>

//                       <Form onSubmit={handleContactSubmit}>
//                         <Row>
//                           <Col md={6}>
//                             <Form.Group className="mb-3">
//                               <Form.Label>Nom complet</Form.Label>
//                               <Form.Control
//                                 type="text"
//                                 name="name"
//                                 value={contactForm.name}
//                                 onChange={handleContactChange}
//                                 placeholder="Votre nom"
//                                 required
//                               />
//                             </Form.Group>
//                           </Col>
//                           <Col md={6}>
//                             <Form.Group className="mb-3">
//                               <Form.Label>Email</Form.Label>
//                               <Form.Control
//                                 type="email"
//                                 name="email"
//                                 value={contactForm.email}
//                                 onChange={handleContactChange}
//                                 placeholder="votre@email.com"
//                                 required
//                               />
//                             </Form.Group>
//                           </Col>
//                         </Row>

//                         <Form.Group className="mb-3">
//                           <Form.Label>Sujet</Form.Label>
//                           <Form.Control
//                             type="text"
//                             name="subject"
//                             value={contactForm.subject}
//                             onChange={handleContactChange}
//                             placeholder="Sujet de votre message"
//                             required
//                           />
//                         </Form.Group>

//                         <Form.Group className="mb-3">
//                           <Form.Label>Message</Form.Label>
//                           <Form.Control
//                             as="textarea"
//                             name="message"
//                             value={contactForm.message}
//                             onChange={handleContactChange}
//                             placeholder="Votre message"
//                             rows={5}
//                             required
//                           />
//                         </Form.Group>

//                         <Button
//                           variant="primary"
//                           type="submit"
//                           className="w-100 mt-3"
//                           disabled={isLoading}
//                         >
//                           {isLoading ? (
//                             <>
//                               <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />{' '}
//                               Envoi en cours...
//                             </>
//                           ) : (
//                             <>
//                               <i className="bi bi-send me-2"></i> Envoyer le message
//                             </>
//                           )}
//                         </Button>
//                       </Form>
//                     </Card.Body>
//                   </Card>
//                 </Col>

//                 <Col lg={6}>
//                   <Card className="border-0 shadow-sm contact-info-card h-100">
//                     <Card.Body>
//                       <Card.Title className="pb-3 border-bottom mb-4">
//                         <i className="bi bi-info-circle me-2"></i>
//                         Informations de contact
//                       </Card.Title>

//                       <div className="contact-info-list">
//                         <div className="contact-info-item">
//                           <div className="contact-icon">
//                             <i className="bi bi-geo-alt"></i>
//                           </div>
//                           <div className="contact-text">
//                             <h5>Adresse</h5>
//                             <p>Senegal<br />BP: 11000 - Dakar</p>
//                           </div>
//                         </div>

//                         <div className="contact-info-item">
//                           <div className="contact-icon">
//                             <i className="bi bi-envelope"></i>
//                           </div>
//                           <div className="contact-text">
//                             <h5>Email</h5>
//                             <p>contact@teamai-solutions.com</p>
//                           </div>
//                         </div>

//                         <div className="contact-info-item">
//                           <div className="contact-icon">
//                             <i className="bi bi-telephone"></i>
//                           </div>
//                           <div className="contact-text">
//                             <h5>Téléphone</h5>
//                             <p>+221 777 783 355</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="social-media-section mt-5">
//                         <h5 className="mb-3">Suivez-nous</h5>
//                         <div className="social-media-icons">
//                           <a href="#" className="social-media-icon">
//                             <i className="bi bi-linkedin"></i>
//                           </a>
//                           <a href="#" className="social-media-icon">
//                             <i className="bi bi-twitter-x"></i>
//                           </a>
//                           <a href="#" className="social-media-icon">
//                             <i className="bi bi-facebook"></i>
//                           </a>
//                           <a href="#" className="social-media-icon">
//                             <i className="bi bi-instagram"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               </Row>
//             </div>
//           )}
//         </Container>
//       </div>

//       <footer className="footer mt-auto">
//         <div className="footer-top py-5">
//           <Container>
//             <Row>
//               <Col md={4} className="mb-4 mb-md-0">
//                 <h5 className="footer-heading">TeamAI Solutions</h5>
//                 <p className="footer-text">
//                   Notre équipe d'experts en intelligence artificielle développe des solutions innovantes adaptées à plusieurs secteurs :

//                   Santé : Diagnostic médical par imagerie et assistance aux professionnels de santé.
//                   Environnement : Analyse des données climatiques et optimisation des ressources naturelles.
//                   Finance : Modélisation des risques et prévisions économiques basées sur l'IA.
//                 </p>
//                 <div className="footer-social-icons">
//                   <a href="#" className="footer-social-icon"><i className="bi bi-linkedin"></i></a>
//                   <a href="#" className="footer-social-icon"><i className="bi bi-twitter-x"></i></a>
//                   <a href="#" className="footer-social-icon"><i className="bi bi-facebook"></i></a>
//                   <a href="#" className="footer-social-icon"><i className="bi bi-instagram"></i></a>
//                 </div>
//               </Col>

//               <Col md={2} className="mb-4 mb-md-0">
//                 <h5 className="footer-heading">Navigation</h5>
//                 <ul className="footer-links">
//                   <li><a href="#home" onClick={() => navigateTo('home')}>Accueil</a></li>
//                   <li><a href="#team" onClick={() => navigateTo('team')}>Notre Équipe</a></li>
//                   <li><a href="#models" onClick={() => navigateTo('models')}>Nos Modèles</a></li>
//                   <li><a href="#analyze" onClick={() => navigateTo('analyze')}>Analyser</a></li>
//                   <li><a href="#contact" onClick={() => navigateTo('contact')}>Contact</a></li>
//                 </ul>
//               </Col>

//               <Col md={3} className="mb-4 mb-md-0">
//                 <h5 className="footer-heading">Ressources</h5>
//                 <ul className="footer-links">
//                   <li><a href="#">Tuberculose</a></li>
//                   <li><a href="#">Pneumonie</a></li>
//                   <li><a href="#">FAQ</a></li>
//                   <li><a href="#">Documentation API</a></li>
//                   <li><a href="#">Politique de confidentialité</a></li>
//                 </ul>
//               </Col>

//               <Col md={3}>
//                 <h5 className="footer-heading">Contact</h5>
//                 <ul className="footer-contact">
//                   <li>
//                     <i className="bi bi-geo-alt"></i>
//                     <span>Senegal, Dakar</span>
//                   </li>
//                   <li>
//                     <i className="bi bi-envelope"></i>
//                     <span>contact@teamai-solutions.com</span>
//                   </li>
//                   <li>
//                     <i className="bi bi-telephone"></i>
//                     <span>+221 777 783 355</span>
//                   </li>
//                 </ul>
//               </Col>
//             </Row>
//           </Container>
//         </div>

//         <div className="footer-bottom py-3">
//           <Container className="text-center">
//             <p className="mb-0">
//               &copy; {new Date().getFullYear()} TeamAI Solutions. Tous droits réservés.
//             </p>
//           </Container>
//         </div>
//       </footer>

//       {/* Modal de confirmation pour le formulaire de contact */}
//       <Modal
//         show={showThankYouModal}
//         onHide={() => setShowThankYouModal(false)}
//         centered
//         className="thank-you-modal"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Message envoyé!</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center py-4">
//           <div className="thank-you-icon">
//             <i className="bi bi-check-circle"></i>
//           </div>
//           <h4 className="mt-3">Merci pour votre message</h4>
//           <p className="lead">
//             Nous vous répondrons dans les plus brefs délais.
//           </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={() => setShowThankYouModal(false)}>
//             Fermer
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default App;















// new structure

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import HomePage from "./pages/HomePage";
// import TeamPage from "./pages/TeamPage";
// import ModelsPage from "./pages/ModelsPage";

// import TrainingPage from "./pages/TrainingPage";
// import NewsPage from "./pages/NewsPage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";

// import "./App.css";

// function App() {
//   return (
//     <div className="app-root">
//       <Navbar />

//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/team" element={<TeamPage />} />
//           <Route path="/models" element={<ModelsPage />} />
//           <Route path="/formations" element={<TrainingPage />} />
//           <Route path="/news" element={<NewsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="*" element={<HomePage />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;









// Code qui marche super bien

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import HomePage from "./pages/HomePage";
// import TeamPage from "./pages/TeamPage";
// import ModelsPage from "./pages/ModelsPage";
// import TrainingPage from "./pages/TrainingPage";
// import NewsPage from "./pages/NewsPage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import ModelDemoPage from "./pages/ModelDemoPage"; // ton import ici

// import "./App.css";

// function App() {
//   return (
//     <div className="app-root">
//       <Navbar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/team" element={<TeamPage />} />
//           <Route path="/models" element={<ModelsPage />} />
//           <Route path="/models/demo/:modelId" element={<ModelDemoPage />} /> {/* Pour la démo */}
//           <Route path="/formations" element={<TrainingPage />} />
//           <Route path="/news" element={<NewsPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           {/* Redirection par défaut */}
//           <Route path="*" element={<HomePage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;








import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages publiques
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import ModelsPage from "./pages/ModelsPage";
import TrainingPage from "./pages/TrainingPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ModelDemoPage from "./pages/ModelDemoPage";

// Admin
import ProtectedRoute from "./admin/components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Routes>
        {/* Routes admin sans navbar/footer */}
        <Route path="/admin" element={<ProtectedRoute />} />
        <Route path="/admin/*" element={<ProtectedRoute />} />

        {/* Routes publiques avec navbar/footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/models/demo/:modelId" element={<ModelDemoPage />} />
                <Route path="/formations" element={<TrainingPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                {/* Redirection par défaut */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;