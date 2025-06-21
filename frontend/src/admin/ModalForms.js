import React, { useState } from 'react';
import { Save, X } from 'lucide-react';

const ModalForms = ({ type, item, onSave, onClose }) => {
    const [formData, setFormData] = useState(item || {});
    const [saving, setSaving] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const newErrors = {};

        switch (type) {
            case 'formation':
                if (!formData.titre && !formData.title) {
                    newErrors.titre = 'Le titre est requis';
                }
                if (!formData.niveau && !formData.level) {
                    newErrors.niveau = 'Le niveau est requis';
                }
                break;
            case 'news':
                if (!formData.title && !formData.titre) {
                    newErrors.title = 'Le titre est requis';
                }
                if (!formData.content && !formData.contenu) {
                    newErrors.content = 'Le contenu est requis';
                }
                break;
            case 'model':
                if (!formData.name) {
                    newErrors.name = 'Le nom est requis';
                }
                if (!formData.model_type && !formData.type) {
                    newErrors.model_type = 'Le type est requis';
                }
                break;
            case 'team':
                if (!formData.name && !formData.nom) {
                    newErrors.name = 'Le nom est requis';
                }
                if (!formData.role && !formData.poste) {
                    newErrors.role = 'Le rôle est requis';
                }
                break;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setSaving(true);
        try {
            await onSave(formData);
            onClose();
        } catch (error) {
            console.error('Erreur lors de la sauvegarde:', error);
            alert('Erreur lors de la sauvegarde');
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Supprimer l'erreur si le champ est maintenant rempli
        if (errors[name] && value.trim()) {
            setErrors(prev => ({
                ...prev,
                [name]: null
            }));
        }
    };

    const renderFormFields = () => {
        switch (type) {
            case 'formation':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Titre *</label>
                            <input
                                type="text"
                                name="titre"
                                value={formData.titre || formData.title || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        titre: e.target.value,
                                        title: e.target.value
                                    }));
                                }}
                                className={`form-input ${errors.titre ? 'error' : ''}`}
                                placeholder="Ex: Introduction à l'IA"
                                required
                            />
                            {errors.titre && <span className="error-text">{errors.titre}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                value={formData.description || ''}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Description de la formation..."
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Niveau *</label>
                                <select
                                    name="niveau"
                                    value={formData.niveau || formData.level || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            niveau: e.target.value,
                                            level: e.target.value
                                        }));
                                    }}
                                    className={`form-input ${errors.niveau ? 'error' : ''}`}
                                    required
                                >
                                    <option value="">Sélectionner un niveau</option>
                                    <option value="Débutant">Débutant</option>
                                    <option value="Intermédiaire">Intermédiaire</option>
                                    <option value="Avancé">Avancé</option>
                                </select>
                                {errors.niveau && <span className="error-text">{errors.niveau}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Durée</label>
                                <input
                                    type="text"
                                    name="duree"
                                    value={formData.duree || formData.duration || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            duree: e.target.value,
                                            duration: e.target.value
                                        }));
                                    }}
                                    className="form-input"
                                    placeholder="Ex: 8 semaines"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Statut</label>
                                <select
                                    name="status"
                                    value={formData.status || 'active'}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="active">Actif</option>
                                    <option value="inactive">Inactif</option>
                                    <option value="draft">Brouillon</option>
                                </select>
                            </div>
                        </div>
                    </>
                );

            case 'news':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Titre *</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title || formData.titre || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        title: e.target.value,
                                        titre: e.target.value
                                    }));
                                }}
                                className={`form-input ${errors.title ? 'error' : ''}`}
                                placeholder="Titre de l'article"
                                required
                            />
                            {errors.title && <span className="error-text">{errors.title}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Catégorie</label>
                                <select
                                    name="category"
                                    value={formData.category || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="">Sélectionner une catégorie</option>
                                    <option value="innovation">Innovation</option>
                                    <option value="formation">Formation</option>
                                    <option value="recherche">Recherche</option>
                                    <option value="événement">Événement</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Résumé</label>
                            <textarea
                                name="summary"
                                rows="3"
                                value={formData.summary || formData.resume || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        summary: e.target.value,
                                        resume: e.target.value
                                    }));
                                }}
                                className="form-input"
                                placeholder="Résumé de l'article..."
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Contenu *</label>
                            <textarea
                                name="content"
                                rows="8"
                                value={formData.content || formData.contenu || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        content: e.target.value,
                                        contenu: e.target.value
                                    }));
                                }}
                                className={`form-input ${errors.content ? 'error' : ''}`}
                                placeholder="Contenu complet de l'article..."
                                required
                            />
                            {errors.content && <span className="error-text">{errors.content}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Auteur</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={formData.author || formData.auteur || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            author: e.target.value,
                                            auteur: e.target.value
                                        }));
                                    }}
                                    className="form-input"
                                    placeholder="Nom de l'auteur"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Statut</label>
                                <select
                                    name="status"
                                    value={formData.status || 'published'}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="published">Publié</option>
                                    <option value="draft">Brouillon</option>
                                    <option value="archived">Archivé</option>
                                </select>
                            </div>
                        </div>
                    </>
                );

            case 'model':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Nom du modèle *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || ''}
                                onChange={handleInputChange}
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Ex: TuberculosisDetect v2.0"
                                required
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Type de modèle *</label>
                                <select
                                    name="model_type"
                                    value={formData.model_type || formData.type || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            model_type: e.target.value,
                                            type: e.target.value
                                        }));
                                    }}
                                    className={`form-input ${errors.model_type ? 'error' : ''}`}
                                    required
                                >
                                    <option value="">Sélectionner un type</option>
                                    <option value="tuberculosis_v1">Tuberculose v1</option>
                                    <option value="tuberculosis_v2">Tuberculose v2</option>
                                    <option value="pneumonia">Pneumonie</option>
                                    <option value="chest_xray">Radiographie thoracique</option>
                                    <option value="covid19">COVID-19</option>
                                </select>
                                {errors.model_type && <span className="error-text">{errors.model_type}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Précision (%)</label>
                                <input
                                    type="number"
                                    name="accuracy"
                                    min="0"
                                    max="100"
                                    step="0.1"
                                    value={formData.accuracy || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="95.8"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                value={formData.description || ''}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Description du modèle et de ses capacités..."
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Technologie</label>
                                <input
                                    type="text"
                                    name="technology"
                                    value={formData.technology || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="Ex: CNN + Transfer Learning"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Statut</label>
                                <select
                                    name="status"
                                    value={formData.status || 'development'}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="development">Développement</option>
                                    <option value="beta">Bêta</option>
                                    <option value="production">Production</option>
                                </select>
                            </div>
                        </div>
                    </>
                );

            case 'team':
                return (
                    <>
                        <div className="form-group">
                            <label className="form-label">Nom complet *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name || formData.nom || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        name: e.target.value,
                                        nom: e.target.value
                                    }));
                                }}
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Ex: Dr. Sarah Johnson"
                                required
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Poste/Rôle *</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role || formData.poste || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        role: e.target.value,
                                        poste: e.target.value
                                    }));
                                }}
                                className={`form-input ${errors.role ? 'error' : ''}`}
                                placeholder="Ex: Lead AI Engineer"
                                required
                            />
                            {errors.role && <span className="error-text">{errors.role}</span>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Département</label>
                                <select
                                    name="department"
                                    value={formData.department || formData.departement || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            department: e.target.value,
                                            departement: e.target.value
                                        }));
                                    }}
                                    className="form-input"
                                >
                                    <option value="">Sélectionner un département</option>
                                    <option value="Direction">Direction</option>
                                    <option value="Technique">Technique</option>
                                    <option value="Recherche">Recherche</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Commercial">Commercial</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Statut</label>
                                <select
                                    name="status"
                                    value={formData.status || 'active'}
                                    onChange={handleInputChange}
                                    className="form-input"
                                >
                                    <option value="active">Actif</option>
                                    <option value="inactive">Inactif</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Bio/Description</label>
                            <textarea
                                name="bio"
                                rows="4"
                                value={formData.bio || formData.description || ''}
                                onChange={(e) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        bio: e.target.value,
                                        description: e.target.value
                                    }));
                                }}
                                className="form-input"
                                placeholder="Parcours et expertise..."
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">LinkedIn</label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={formData.linkedin || ''}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="https://linkedin.com/in/..."
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Photo (URL)</label>
                                <input
                                    type="url"
                                    name="photo"
                                    value={formData.photo || formData.image_url || ''}
                                    onChange={(e) => {
                                        setFormData(prev => ({
                                            ...prev,
                                            photo: e.target.value,
                                            image_url: e.target.value
                                        }));
                                    }}
                                    className="form-input"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>
                    </>
                );

            case 'contact':
                return (
                    <div className="contact-view">
                        <div className="form-group">
                            <label className="form-label">Nom</label>
                            <div className="read-only-field">{formData.name}</div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="read-only-field">{formData.email}</div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Sujet</label>
                            <div className="read-only-field">{formData.subject}</div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <div className="message-content">
                                {formData.message || 'Aucun message disponible'}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Statut</label>
                            <select
                                name="status"
                                value={formData.status || 'new'}
                                onChange={handleInputChange}
                                className="form-input"
                            >
                                <option value="new">Nouveau</option>
                                <option value="replied">Répondu</option>
                                <option value="closed">Fermé</option>
                            </select>
                        </div>
                    </div>
                );

            default:
                return <p>Formulaire pour {type}</p>;
        }
    };

    const getModalTitle = () => {
        const action = item ? 'Modifier' : 'Ajouter';
        const entityName = {
            formation: 'Formation',
            news: 'Article',
            model: 'Modèle IA',
            team: 'Membre équipe',
            contact: 'Message'
        }[type] || type;

        return `${action} ${entityName}`;
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{getModalTitle()}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div>
                    <div className="modal-body">
                        {renderFormFields()}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn-cancel" onClick={onClose}>
                            Annuler
                        </button>
                        <button onClick={handleSubmit} className="btn-save" disabled={saving}>
                            {saving ? (
                                <>
                                    <div className="spinner"></div>
                                    Sauvegarde...
                                </>
                            ) : (
                                <>
                                    <Save size={18} />
                                    Sauvegarder
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalForms;