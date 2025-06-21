import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/team/logo.jpg";

const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/team", label: "Notre équipe" },
    { to: "/models", label: "Nos modèles" },
    { to: "/formations", label: "Formations" },
    { to: "/news", label: "Actualités" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "À propos" }
];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar-pro">
            <div className="navbar-left">
                <img src={logo} alt="TeamAI Logo" className="navbar-logo" />
                <span className="navbar-brand">TeamAI Solutions</span>
            </div>
            <ul className="navbar-links">
                {navLinks.map(link => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            className={location.pathname === link.to ? "active" : ""}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
