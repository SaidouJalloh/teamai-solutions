// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Form, Spinner, Alert, Tab, Tabs } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// function ContactPage() {
//     const navigate = useNavigate();
//     const [contactForm, setContactForm] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         organization: '',
//         subject: '',
//         message: '',
//         interestedIn: [],
//         howHeard: '',
//         newsletter: true
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitSuccess, setSubmitSuccess] = useState(false);
//     const [activeTab, setActiveTab] = useState('contact');

//     // Options pour les domaines d'intérêt
//     const interestOptions = [
//         { value: 'health', label: 'Solutions santé', icon: 'bi-heart-pulse' },
//         { value: 'education', label: 'Solutions éducation', icon: 'bi-book' },
//         { value: 'environment', label: 'Solutions environnement', icon: 'bi-tree' },
//         { value: 'training', label: 'Formations en IA', icon: 'bi-mortarboard' }
//     ];

//     // Options pour la source de connaissance
//     const referralOptions = [
//         { value: 'search', label: 'Moteur de recherche' },
//         { value: 'social', label: 'Réseaux sociaux' },
//         { value: 'event', label: 'Événement ou conférence' },
//         { value: 'recommendation', label: 'Recommandation' },
//         { value: 'other', label: 'Autre' }
//     ];

//     // Gérer le changement des champs du formulaire
//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;

//         if (type === 'checkbox' && name === 'interestedIn') {
//             // Gestion des cases à cocher pour les domaines d'intérêt
//             const updatedInterests = checked
//                 ? [...contactForm.interestedIn, value]
//                 : contactForm.interestedIn.filter(item => item !== value);

//             setContactForm({
//                 ...contactForm,
//                 interestedIn: updatedInterests
//             });
//         } else {
//             // Gestion des autres types de champs
//             setContactForm({
//                 ...contactForm,
//                 [name]: type === 'checkbox' ? checked : value
//             });
//         }

//         // Effacer l'erreur lorsque l'utilisateur modifie le champ
//         if (errors[name]) {
//             setErrors({
//                 ...errors,
//                 [name]: null
//             });
//         }
//     };

//     // Valider le formulaire
//     const validateForm = () => {
//         const newErrors = {};

//         if (!contactForm.firstName.trim()) {
//             newErrors.firstName = "Le prénom est requis";
//         }

//         if (!contactForm.lastName.trim()) {
//             newErrors.lastName = "Le nom est requis";
//         }

//         if (!contactForm.email.trim()) {
//             newErrors.email = "L'email est requis";
//         } else if (!/^\S+@\S+\.\S+$/.test(contactForm.email)) {
//             newErrors.email = "L'email n'est pas valide";
//         }

//         if (!contactForm.subject.trim()) {
//             newErrors.subject = "Le sujet est requis";
//         }

//         if (!contactForm.message.trim()) {
//             newErrors.message = "Le message est requis";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     // Gérer la soumission du formulaire
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // En production, remplacer par un vrai appel API
//             // const response = await axios.post(`${API_URL}/api/contact`, contactForm);

//             // Simuler un appel API réussi
//             setTimeout(() => {
//                 console.log("Formulaire soumis:", contactForm);
//                 setSubmitSuccess(true);
//                 setIsSubmitting(false);
//             }, 1500);
//         } catch (error) {
//             console.error("Erreur lors de la soumission du formulaire:", error);
//             setErrors({
//                 ...errors,
//                 submit: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
//             });
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="contact-page animate-in">
//             {/* Hero section */}
//             <div className="contact-hero-section text-center py-5">
//                 <Container>
//                     <div className="contact-icon-large mb-3">
//                         <i className="bi bi-envelope-paper"></i>
//                     </div>
//                     <h1 className="display-4 fw-bold mb-3">Contactez-nous</h1>
//                     <p className="lead mb-0">
//                         Vous avez des questions ou souhaitez discuter d'un projet ? Notre équipe est à votre écoute.
//                     </p>
//                 </Container>
//             </div>

//             <Container className="py-5">
//                 <Tabs
//                     activeKey={activeTab}
//                     onSelect={(k) => setActiveTab(k)}
//                     className="mb-4 nav-fill"
//                 >
//                     <Tab eventKey="contact" title={<span><i className="bi bi-envelope me-2"></i>Nous contacter</span>}>
//                         {submitSuccess ? (
//                             <Card className="border-0 shadow-sm">
//                                 <Card.Body className="text-center p-5">
//                                     <div className="success-icon mb-4">
//                                         <i className="bi bi-check-circle"></i>
//                                     </div>
//                                     <h2 className="mb-3">Message envoyé avec succès !</h2>
//                                     <p className="lead mb-4">
//                                         Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
//                                     </p>
//                                     <Button
//                                         variant="primary"
//                                         onClick={() => {
//                                             setSubmitSuccess(false);
//                                             setContactForm({
//                                                 firstName: '',
//                                                 lastName: '',
//                                                 email: '',
//                                                 phone: '',
//                                                 organization: '',
//                                                 subject: '',
//                                                 message: '',
//                                                 interestedIn: [],
//                                                 howHeard: '',
//                                                 newsletter: true
//                                             });
//                                         }}
//                                     >
//                                         Envoyer un autre message
//                                     </Button>
//                                 </Card.Body>
//                             </Card>
//                         ) : (
//                             <Row>
//                                 <Col lg={7}>
//                                     <Card className="border-0 shadow-sm contact-form-card">
//                                         <Card.Body className="p-4 p-md-5">
//                                             <Form onSubmit={handleSubmit} noValidate>
//                                                 <Row>
//                                                     <Col md={6}>
//                                                         <Form.Group className="mb-3">
//                                                             <Form.Label>Prénom *</Form.Label>
//                                                             <Form.Control
//                                                                 type="text"
//                                                                 name="firstName"
//                                                                 value={contactForm.firstName}
//                                                                 onChange={handleInputChange}
//                                                                 isInvalid={!!errors.firstName}
//                                                                 required
//                                                             />
//                                                             <Form.Control.Feedback type="invalid">
//                                                                 {errors.firstName}
//                                                             </Form.Control.Feedback>
//                                                         </Form.Group>
//                                                     </Col>
//                                                     <Col md={6}>
//                                                         <Form.Group className="mb-3">
//                                                             <Form.Label>Nom *</Form.Label>
//                                                             <Form.Control
//                                                                 type="text"
//                                                                 name="lastName"
//                                                                 value={contactForm.lastName}
//                                                                 onChange={handleInputChange}
//                                                                 isInvalid={!!errors.lastName}
//                                                                 required
//                                                             />
//                                                             <Form.Control.Feedback type="invalid">
//                                                                 {errors.lastName}
//                                                             </Form.Control.Feedback>
//                                                         </Form.Group>
//                                                     </Col>
//                                                 </Row>

//                                                 <Row>
//                                                     <Col md={6}>
//                                                         <Form.Group className="mb-3">
//                                                             <Form.Label>Email *</Form.Label>
//                                                             <Form.Control
//                                                                 type="email"
//                                                                 name="email"
//                                                                 value={contactForm.email}
//                                                                 onChange={handleInputChange}
//                                                                 isInvalid={!!errors.email}
//                                                                 required
//                                                             />
//                                                             <Form.Control.Feedback type="invalid">
//                                                                 {errors.email}
//                                                             </Form.Control.Feedback>
//                                                         </Form.Group>
//                                                     </Col>
//                                                     <Col md={6}>
//                                                         <Form.Group className="mb-3">
//                                                             <Form.Label>Téléphone</Form.Label>
//                                                             <Form.Control
//                                                                 type="tel"
//                                                                 name="phone"
//                                                                 value={contactForm.phone}
//                                                                 onChange={handleInputChange}
//                                                             />
//                                                         </Form.Group>
//                                                     </Col>
//                                                 </Row>

//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label>Organisation</Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="organization"
//                                                         value={contactForm.organization}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Form.Group>

//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label>Sujet *</Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="subject"
//                                                         value={contactForm.subject}
//                                                         onChange={handleInputChange}
//                                                         isInvalid={!!errors.subject}
//                                                         required
//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors.subject}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>

//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label>Message *</Form.Label>
//                                                     <Form.Control
//                                                         as="textarea"
//                                                         rows={5}
//                                                         name="message"
//                                                         value={contactForm.message}
//                                                         onChange={handleInputChange}
//                                                         isInvalid={!!errors.message}
//                                                         required
//                                                     />
//                                                     <Form.Control.Feedback type="invalid">
//                                                         {errors.message}
//                                                     </Form.Control.Feedback>
//                                                 </Form.Group>

//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label>Intéressé(e) par</Form.Label>
//                                                     <div className="interest-options">
//                                                         {interestOptions.map(option => (
//                                                             <Form.Check
//                                                                 key={option.value}
//                                                                 type="checkbox"
//                                                                 id={`interest-${option.value}`}
//                                                                 label={
//                                                                     <span className="interest-label">
//                                                                         <i className={`bi ${option.icon} me-2`}></i>
//                                                                         {option.label}
//                                                                     </span>
//                                                                 }
//                                                                 name="interestedIn"
//                                                                 value={option.value}
//                                                                 checked={contactForm.interestedIn.includes(option.value)}
//                                                                 onChange={handleInputChange}
//                                                                 className="interest-checkbox"
//                                                             />
//                                                         ))}
//                                                     </div>
//                                                 </Form.Group>

//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label>Comment avez-vous entendu parler de nous ?</Form.Label>
//                                                     <Form.Select
//                                                         name="howHeard"
//                                                         value={contactForm.howHeard}
//                                                         onChange={handleInputChange}
//                                                     >
//                                                         <option value="">Sélectionnez une option</option>
//                                                         {referralOptions.map(option => (
//                                                             <option key={option.value} value={option.value}>
//                                                                 {option.label}
//                                                             </option>
//                                                         ))}
//                                                     </Form.Select>
//                                                 </Form.Group>

//                                                 <Form.Group className="mb-4">
//                                                     <Form.Check
//                                                         type="checkbox"
//                                                         id="newsletter"
//                                                         name="newsletter"
//                                                         label="Je souhaite recevoir des informations sur les nouveaux produits et services"
//                                                         checked={contactForm.newsletter}
//                                                         onChange={handleInputChange}
//                                                     />
//                                                 </Form.Group>

//                                                 {errors.submit && (
//                                                     <Alert variant="danger" className="mb-3">
//                                                         {errors.submit}
//                                                     </Alert>
//                                                 )}

//                                                 <div className="d-grid">
//                                                     <Button
//                                                         variant="primary"
//                                                         type="submit"
//                                                         size="lg"
//                                                         disabled={isSubmitting}
//                                                     >
//                                                         {isSubmitting ? (
//                                                             <>
//                                                                 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />{' '}
//                                                                 Envoi en cours...
//                                                             </>
//                                                         ) : (
//                                                             <>
//                                                                 <i className="bi bi-send me-2"></i>
//                                                                 Envoyer le message
//                                                             </>
//                                                         )}
//                                                     </Button>
//                                                 </div>
//                                             </Form>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>

//                                 <Col lg={5}>
//                                     <Card className="border-0 shadow-sm contact-info-card h-100">
//                                         <Card.Body className="p-4 p-md-5">
//                                             <h3 className="mb-4">Informations de contact</h3>

//                                             <div className="contact-info-list">
//                                                 <div className="contact-info-item">
//                                                     <div className="contact-icon">
//                                                         <i className="bi bi-geo-alt"></i>
//                                                     </div>
//                                                     <div className="contact-text">
//                                                         <h5>Adresse</h5>
//                                                         <p>Université de Djibouti<br />Avenue Georges Clemenceau<br />BP: 1904 - Djibouti</p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="contact-info-item">
//                                                     <div className="contact-icon">
//                                                         <i className="bi bi-envelope"></i>
//                                                     </div>
//                                                     <div className="contact-text">
//                                                         <h5>Email</h5>
//                                                         <p>contact@teamai-solutions.com</p>
//                                                     </div>
//                                                 </div>

//                                                 <div className="contact-info-item">
//                                                     <div className="contact-icon">
//                                                         <i className="bi bi-telephone"></i>
//                                                     </div>
//                                                     <div className="contact-text">
//                                                         <h5>Téléphone</h5>
//                                                         <p>+253 77 12 34 56</p>
//                                                     </div>
//                                                 </div>
//                                             </div>

//                                             <div className="social-media-section mt-5">
//                                                 <h5 className="mb-3">Suivez-nous</h5>
//                                                 <div className="social-media-icons">
//                                                     <a href="#" className="social-media-icon">
//                                                         <i className="bi bi-linkedin"></i>
//                                                     </a>
//                                                     <a href="#" className="social-media-icon">
//                                                         <i className="bi bi-twitter-x"></i>
//                                                     </a>
//                                                     <a href="#" className="social-media-icon">
//                                                         <i className="bi bi-facebook"></i>
//                                                     </a>
//                                                     <a href="#" className="social-media-icon">
//                                                         <i className="bi bi-instagram"></i>
//                                                     </a>
//                                                 </div>
//                                             </div>

//                                             <div className="contact-cta mt-5">
//                                                 <h5>Besoin d'une formation en IA ?</h5>
//                                                 <p>Découvrez notre catalogue de formations dispensées par des experts.</p>
//                                                 <Button
//                                                     variant="outline-primary"
//                                                     onClick={() => navigate('/training')}
//                                                     className="w-100"
//                                                 >
//                                                     Voir les formations
//                                                 </Button>
//                                             </div>
//                                         </Card.Body>
//                                     </Card>
//                                 </Col>
//                             </Row>
//                         )}
//                     </Tab>

//                     <Tab eventKey="map" title={<span><i className="bi bi-geo-alt me-2"></i>Nous trouver</span>}>
//                         <Card className="border-0 shadow-sm">
//                             <Card.Body className="p-0">
//                                 <div className="map-container">
//                                     {/* En production, remplacer par une carte Google Maps ou OpenStreetMap */}
//                                     <div className="map-placeholder">
//                                         <div className="map-placeholder-text">
//                                             <i className="bi bi-map"></i>
//                                             <span>Carte interactive à venir</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="map-details p-4">
//                                     <h3>Notre localisation</h3>
//                                     <p className="mb-4">
//                                         Vous pouvez nous rendre visite à l'Université de Djibouti, où notre équipe travaille sur les dernières innovations en intelligence artificielle.
//                                     </p>

//                                     <div className="location-details">
//                                         <div className="location-item">
//                                             <div className="location-icon">
//                                                 <i className="bi bi-building"></i>
//                                             </div>
//                                             <div className="location-text">
//                                                 <h5>Adresse</h5>
//                                                 <p>Université de Djibouti<br />Avenue Georges Clemenceau<br />BP: 1904 - Djibouti</p>
//                                             </div>
//                                         </div>

//                                         <div className="location-item">
//                                             <div className="location-icon">
//                                                 <i className="bi bi-clock"></i>
//                                             </div>
//                                             <div className="location-text">
//                                                 <h5>Heures d'ouverture</h5>
//                                                 <p>Lundi - Vendredi: 8h00 - 17h00<br />Samedi: 9h00 - 12h00<br />Dimanche: Fermé</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Tab>

//                     <Tab eventKey="faq" title={<span><i className="bi bi-question-circle me-2"></i>FAQ</span>}>
//                         <Card className="border-0 shadow-sm">
//                             <Card.Body className="p-4 p-md-5">
//                                 <h3 className="mb-4">Questions fréquemment posées</h3>

//                                 <div className="faq-list">
//                                     <div className="faq-item">
//                                         <h4 className="faq-question">
//                                             <i className="bi bi-question-circle me-2"></i>
//                                             Comment fonctionnent vos modèles d'IA pour la détection de la tuberculose ?
//                                         </h4>
//                                         <div className="faq-answer">
//                                             <p>
//                                                 Nos modèles d'IA utilisent des réseaux neuronaux convolutifs (CNN) pour analyser les radiographies pulmonaires.
//                                                 Ils ont été entraînés sur des milliers d'images annotées par des radiologues experts pour identifier les motifs
//                                                 caractéristiques de la tuberculose avec une précision supérieure à 95%.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="faq-item">
//                                         <h4 className="faq-question">
//                                             <i className="bi bi-question-circle me-2"></i>
//                                             Vos solutions sont-elles accessibles aux petites structures médicales ?
//                                         </h4>
//                                         <div className="faq-answer">
//                                             <p>
//                                                 Oui, nos solutions sont conçues pour être accessibles à tous types d'établissements, y compris les petites
//                                                 cliniques et les centres de santé en zones rurales. Nous proposons différentes formules d'abonnement adaptées
//                                                 aux besoins et aux ressources de chaque structure.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="faq-item">
//                                         <h4 className="faq-question">
//                                             <i className="bi bi-question-circle me-2"></i>
//                                             Quand seront disponibles vos solutions pour l'éducation et l'environnement ?
//                                         </h4>
//                                         <div className="faq-answer">
//                                             <p>
//                                                 Nos solutions pour l'éducation et l'environnement sont actuellement en phase de développement.
//                                                 Nous prévoyons de lancer nos premiers produits pour l'éducation en juin 2025 et pour l'environnement en août-septembre 2025.
//                                                 Vous pouvez vous inscrire à notre newsletter pour être informé des lancements.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="faq-item">
//                                         <h4 className="faq-question">
//                                             <i className="bi bi-question-circle me-2"></i>
//                                             Comment puis-je m'inscrire à une formation en IA ?
//                                         </h4>
//                                         <div className="faq-answer">
//                                             <p>
//                                                 Vous pouvez consulter notre catalogue de formations sur la page "Formations" et vous inscrire directement en ligne.
//                                                 Pour les formations sur mesure ou les demandes spécifiques, n'hésitez pas à nous contacter via le formulaire de contact.
//                                             </p>
//                                             <Button
//                                                 variant="outline-primary"
//                                                 size="sm"
//                                                 onClick={() => navigate('/training')}
//                                             >
//                                                 Voir les formations
//                                             </Button>
//                                         </div>
//                                     </div>

//                                     <div className="faq-item">
//                                         <h4 className="faq-question">
//                                             <i className="bi bi-question-circle me-2"></i>
//                                             Proposez-vous des partenariats pour des projets de recherche ?
//                                         </h4>
//                                         <div className="faq-answer">
//                                             <p>
//                                                 Oui, nous sommes toujours ouverts aux collaborations et partenariats pour des projets de recherche
//                                                 dans les domaines de l'IA appliquée à la santé, l'éducation et l'environnement. Contactez-nous
//                                                 avec les détails de votre projet pour discuter des possibilités de collaboration.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="text-center mt-5">
//                                     <p>Une autre question ? N'hésitez pas à nous contacter directement.</p>
//                                     <Button
//                                         variant="primary"
//                                         onClick={() => setActiveTab('contact')}
//                                     >
//                                         Nous contacter
//                                     </Button>
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </Tab>
//                 </Tabs>
//             </Container>
//         </div>
//     );
// }

// export default ContactPage;












import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, User } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulation d'appel API
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Ici, tu ajouteras ton appel API réel
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(form)
            // });

            setSent(true);
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="hero-content">
                    <div className="hero-icon">
                        <MessageSquare size={64} />
                    </div>
                    <h1>Contactez-nous</h1>
                    <p>
                        Vous avez une question, un projet ou souhaitez en savoir plus sur nos services ?
                        Notre équipe est là pour vous accompagner dans vos projets d'intelligence artificielle.
                    </p>
                </div>
            </div>

            <div className="contact-content">
                <div className="contact-grid">
                    {/* Informations de contact */}
                    <div className="contact-info">
                        <h2>Restons en contact</h2>
                        <p>Plusieurs moyens pour nous joindre et échanger sur vos projets.</p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">
                                    <Mail size={24} />
                                </div>
                                <div className="method-content">
                                    <h3>Email</h3>
                                    <p>contact@teamai-solutions.com</p>
                                    <small>Nous répondons sous 24h</small>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <Phone size={24} />
                                </div>
                                <div className="method-content">
                                    <h3>Téléphone</h3>
                                    <p>+33 1 23 45 67 89</p>
                                    <small>Lun-Ven 9h-18h</small>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="method-content">
                                    <h3>Adresse</h3>
                                    <p>123 Avenue de l'Innovation<br />75001 Paris, France</p>
                                    <small>Rendez-vous sur demande</small>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <Clock size={24} />
                                </div>
                                <div className="method-content">
                                    <h3>Horaires</h3>
                                    <p>Lundi - Vendredi<br />9h00 - 18h00</p>
                                    <small>Support technique inclus</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="contact-form-container">
                        {sent ? (
                            <div className="success-message">
                                <CheckCircle size={64} />
                                <h2>Message envoyé !</h2>
                                <p>Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
                                <button
                                    className="new-message-btn"
                                    onClick={() => setSent(false)}
                                >
                                    Envoyer un nouveau message
                                </button>
                            </div>
                        ) : (
                            <div className="contact-form">
                                <h2>Envoyez-nous un message</h2>
                                <p>Décrivez votre projet et nous vous recontacterons rapidement.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                <User size={18} />
                                                Nom complet *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Votre nom"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <Mail size={18} />
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="votre@email.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">
                                            <MessageSquare size={18} />
                                            Sujet *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="formation">Formation en IA</option>
                                            <option value="consulting">Consulting & Accompagnement</option>
                                            <option value="development">Développement de solutions IA</option>
                                            <option value="partnership">Partenariat</option>
                                            <option value="support">Support technique</option>
                                            <option value="other">Autre demande</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            <MessageSquare size={18} />
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                                            value={form.message}
                                            onChange={handleChange}
                                            rows="6"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="submit-btn"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="spinner-small"></div>
                                                Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Envoyer le message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>

                {/* FAQ rapide */}
                <div className="faq-section">
                    <h2>Questions fréquentes</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Combien de temps pour une réponse ?</h3>
                            <p>Nous répondons généralement sous 24h ouvrées pour toute demande de renseignement.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Proposez-vous des devis gratuits ?</h3>
                            <p>Oui, nous proposons une première consultation gratuite pour évaluer vos besoins.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Travaillez-vous avec toutes les entreprises ?</h3>
                            <p>Nous accompagnons les startups, PME et grandes entreprises dans leurs projets IA.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Où sont localisés vos bureaux ?</h3>
                            <p>Nos bureaux sont situés à Paris, avec possibilité d'interventions partout en France.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;