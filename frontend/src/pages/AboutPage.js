import React from 'react';
import { Users, Target, Award, Globe, Brain, Lightbulb, Heart, Zap } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="hero-content">
                    <div className="hero-icon">
                        <Brain size={64} />
                    </div>
                    <h1>À propos de TeamAI Solutions</h1>
                    <p>
                        Nous développons des solutions innovantes en Intelligence Artificielle
                        pour répondre aux besoins de l'Afrique et du monde entier.
                    </p>
                </div>
            </div>

            <div className="about-content">
                {/* Mission Section */}
                <section className="mission-section">
                    <div className="section-header">
                        <Target size={40} />
                        <h2>Notre Mission</h2>
                    </div>
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="card-icon">
                                <Brain size={32} />
                            </div>
                            <h3>Innovation IA</h3>
                            <p>
                                Développer des solutions d'intelligence artificielle de pointe
                                adaptées aux défis spécifiques de l'Afrique et du monde.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="card-icon">
                                <Users size={32} />
                            </div>
                            <h3>Formation</h3>
                            <p>
                                Former la nouvelle génération d'experts en IA pour construire
                                un écosystème technologique durable et inclusif.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="card-icon">
                                <Globe size={32} />
                            </div>
                            <h3>Impact Global</h3>
                            <p>
                                Créer des solutions qui transforment positivement les communautés
                                et contribuent au développement durable.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="story-section">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Notre Histoire</h2>
                            <p>
                                TeamAI Solutions a été fondée avec la vision de démocratiser l'accès
                                à l'intelligence artificielle en Afrique. Nous croyons fermement que
                                l'IA peut être un catalyseur de développement et d'innovation.
                            </p>
                            <p>
                                Depuis notre création, nous avons travaillé avec des entreprises,
                                des institutions éducatives et des organisations gouvernementales
                                pour développer des solutions IA adaptées aux contextes locaux.
                            </p>
                            <div className="story-stats">
                                <div className="stat">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Projets réalisés</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Étudiants formés</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Pays partenaires</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Équipe TeamAI Solutions"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <div className="section-header">
                        <Heart size={40} />
                        <h2>Nos Valeurs</h2>
                        <p>Les principes qui guident notre action quotidienne</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <Lightbulb size={28} />
                            </div>
                            <h3>Innovation</h3>
                            <p>
                                Nous repoussons constamment les limites de la technologie
                                pour créer des solutions révolutionnaires.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <Users size={28} />
                            </div>
                            <h3>Collaboration</h3>
                            <p>
                                Nous croyons en la force du travail d'équipe et des
                                partenariats stratégiques pour atteindre l'excellence.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <Award size={28} />
                            </div>
                            <h3>Excellence</h3>
                            <p>
                                Nous nous engageons à livrer des solutions de la plus haute
                                qualité, dépassant les attentes de nos clients.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">
                                <Globe size={28} />
                            </div>
                            <h3>Impact</h3>
                            <p>
                                Nous mesurons notre succès par l'impact positif de nos
                                solutions sur les communautés et la société.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="vision-section">
                    <div className="vision-content">
                        <div className="vision-text">
                            <Zap size={40} />
                            <h2>Notre Vision</h2>
                            <p>
                                Être le leader africain de l'innovation en intelligence artificielle,
                                en créant un écosystème technologique qui propulse le continent
                                vers un avenir prospère et durable.
                            </p>
                            <p>
                                Nous imaginons un monde où l'IA est accessible à tous, où elle
                                résout les défis les plus pressants de notre époque et où
                                l'Afrique joue un rôle central dans la révolution technologique mondiale.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Rejoignez notre mission</h2>
                        <p>
                            Ensemble, construisons l'avenir de l'intelligence artificielle en Afrique
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="cta-btn primary">
                                Nous contacter
                            </a>
                            <a href="/formations" className="cta-btn secondary">
                                Nos formations
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage; 