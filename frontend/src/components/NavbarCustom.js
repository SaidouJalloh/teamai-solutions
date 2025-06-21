// src/components/NavbarCustom.js
import React from 'react';

const NavbarCustom = ({ navigateTo, activeTab }) => (
    <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigateTo('home')}>
            <img src="/logo.jpg" alt="Logo" style={{ height: 40 }} />
            <span className="navbar-brand">TeamAI Solutions</span>
        </div>
        <ul className="navbar-links">
            <li className={activeTab === 'home' ? 'active' : ''} onClick={() => navigateTo('home')}>Accueil</li>
            <li className={activeTab === 'team' ? 'active' : ''} onClick={() => navigateTo('team')}>Notre équipe</li>
            <li className={activeTab === 'models' ? 'active' : ''} onClick={() => navigateTo('models')}>Nos modèles</li>
            <li className={activeTab === 'contact' ? 'active' : ''} onClick={() => navigateTo('contact')}>Contact</li>
            <li className={activeTab === 'about' ? 'active' : ''} onClick={() => navigateTo('about')}>À propos</li>
        </ul>
    </nav>
);

export default NavbarCustom;
