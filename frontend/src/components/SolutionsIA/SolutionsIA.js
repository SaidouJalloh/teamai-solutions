import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SolutionsIA.css'; // Fichier CSS pour les styles spécifiques

// Importation des données des modèles (à placer dans un fichier séparé plus tard)
import { modelsByCategory } from './modelsData';

const SolutionsIA = () => {
    // État pour gérer la catégorie active
    const [activeCategory, setActiveCategory] = useState('sante');

    // Liste des catégories disponibles
    const categories = [
        { id: 'sante', name: 'Santé' },
        { id: 'agriculture', name: 'Agriculture' },
        { id: 'education', name: 'Education' },
        { id: 'finance', name: 'Finance' },
        { id: 'environnement', name: 'Environnement' }
    ];

    // Fonction pour changer de catégorie
    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    // Récupérer les modèles de la catégorie active
    const activeModels = modelsByCategory[activeCategory] || [];

    return (
        <div className="solutions-ia-page">
            <Container>
                <div className="text-center my-5">
                    <h1 className="fw-bold mb-3">Nos Modèles d'Intelligence Artificielle</h1>
                    <p className="lead mb-5">
                        Découvrez nos solutions d'IA innovantes conçues pour résoudre des problèmes
                        complexes dans différents secteurs d'activité.
                    </p>
                </div>

                {/* Onglets des catégories */}
                <div className="category-tabs d-flex justify-content-center mb-5">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            className={`category-tab mx-2 ${activeCategory === category.id ? 'active' : ''}`}
                            variant={activeCategory === category.id ? 'primary' : 'light'}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>

                {/* Section de la catégorie active */}
                <div className="active-category-section bg-white p-4 rounded shadow-sm">
                    <h2 className="mb-4">{categories.find(c => c.id === activeCategory)?.name}</h2>
                    <p className="mb-4">
                        {activeCategory === 'sante' && "Nos modèles d'IA pour le secteur de la santé aident les professionnels à diagnostiquer les maladies, analyser les images médicales et prédire les risques patients."}
                        {activeCategory === 'agriculture' && "Nos modèles d'IA pour l'agriculture aident à optimiser les rendements, analyser les sols et prédire les meilleures périodes de récolte."}
                        {activeCategory === 'education' && "Nos modèles d'IA pour l'éducation personnalisent l'apprentissage et analysent les performances des étudiants."}
                        {activeCategory === 'finance' && "Nos modèles d'IA pour la finance aident à détecter les fraudes, analyser les risques et optimiser les investissements."}
                        {activeCategory === 'environnement' && "Nos modèles d'IA pour l'environnement aident à surveiller la qualité de l'air, détecter la déforestation et prédire les catastrophes naturelles."}
                    </p>

                    {/* Liste des modèles */}
                    <Row className="models-list mt-4">
                        {activeModels.map((model) => (
                            <Col key={model.id} md={6} className="mb-4">
                                <div className="model-card p-4 bg-light rounded">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="model-icon">
                                            <i className={model.icon}></i>
                                        </div>
                                        <h3 className="ms-3 mb-0">{model.name}</h3>
                                    </div>
                                    <p>{model.description}</p>
                                    <Button
                                        variant="primary"
                                        className="try-model-btn"
                                        onClick={() => window.location.href = `/analyze/${model.id}`}
                                    >
                                        Essayer ce modèle <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default SolutionsIA;