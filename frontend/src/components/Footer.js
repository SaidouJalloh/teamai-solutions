// import React from "react";
// import "./Footer.css";

// export default function Footer() {
//     return (
//         <footer className="footer">
//             © {new Date().getFullYear()} TeamAI Solutions. Tous droits réservés.
//         </footer>
//     );
// }





import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import "./Footer.css";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <h3>TeamAI Solutions</h3>
                            <p>Votre partenaire en Intelligence Artificielle pour transformer l'avenir</p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/team">Notre équipe</a></li>
                            <li><a href="/models">Nos modèles</a></li>
                            <li><a href="/formations">Formations</a></li>
                            <li><a href="/news">Actualités</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="/models">Modèles IA</a></li>
                            <li><a href="/formations">Formations</a></li>
                            <li><a href="/consulting">Consulting</a></li>
                            <li><a href="/support">Support technique</a></li>
                            <li><a href="/api">API & Intégrations</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail size={16} />
                                <span>contact@teamai-solutions.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={16} />
                                <span>+33 1 23 45 67 89</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={16} />
                                <span>Paris, France</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            © {new Date().getFullYear()} TeamAI Solutions. Tous droits réservés.
                        </div>
                        <div className="footer-bottom-links">
                            <a href="/privacy">Politique de confidentialité</a>
                            <a href="/terms">Conditions d'utilisation</a>
                            <a href="/cookies">Cookies</a>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Retour en haut"
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    );
}