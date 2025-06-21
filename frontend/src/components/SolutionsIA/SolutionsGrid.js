// // src/components/SolutionsIA/SolutionsGrid.js
// import React from "react";
// import { Brain, HeartPulse, TreePine, BookOpen, Banknote, Leaf } from "lucide-react";
// import "./SolutionsGrid.css"; // On va ajouter un style simple, moderne

// const DOMAINES = [
//     {
//         icon: <HeartPulse size={36} color="#2D3ED4" />,
//         titre: "Santé",
//         desc: "Détection maladies, diagnostic assisté IA, télémédecine…",
//     },
//     {
//         icon: <TreePine size={36} color="#2D3ED4" />,
//         titre: "Environnement",
//         desc: "Analyse pollution, prédiction climat, gestion durable…",
//     },
//     {
//         icon: <BookOpen size={36} color="#2D3ED4" />,
//         titre: "Éducation",
//         desc: "Personnalisation apprentissage, suivi intelligent, outils pédagogiques…",
//     },
//     {
//         icon: <Banknote size={36} color="#2D3ED4" />,
//         titre: "Finance",
//         desc: "Détection fraude, scoring crédit, analyse financière IA…",
//     },
//     {
//         icon: <Leaf size={36} color="#2D3ED4" />,
//         titre: "Agriculture",
//         desc: "Optimisation récoltes, analyse sol, agriculture intelligente…",
//     },
// ];

// export default function SolutionsGrid() {
//     return (
//         <div className="solutions-grid">
//             {DOMAINES.map((d, idx) => (
//                 <div className="solutions-card" key={idx}>
//                     <div className="solutions-icon">{d.icon}</div>
//                     <div className="solutions-title">{d.titre}</div>
//                     <div className="solutions-desc">{d.desc}</div>
//                 </div>
//             ))}
//         </div>
//     );
// }





import React from "react";
import { HeartPulse, BookOpen, TreePine, Flower2, Wallet, ShieldCheck } from "lucide-react";
import "./SolutionsGrid.css";

const domains = [
    {
        icon: <HeartPulse size={40} />,
        title: "Santé",
        desc: "Détection de maladies, analyse radiologique, diagnostic assisté par IA.",
        color: "health"
    },
    {
        icon: <TreePine size={40} />,
        title: "Environnement",
        desc: "Qualité de l'air, pollution, déforestation, monitoring environnemental.",
        color: "env"
    },
    {
        icon: <BookOpen size={40} />,
        title: "Éducation",
        desc: "Analyse des performances, personnalisation de l'apprentissage.",
        color: "edu"
    },
    {
        icon: <Flower2 size={40} />,
        title: "Agriculture",
        desc: "Prévision de rendements, analyse sol, détection maladies végétales.",
        color: "agri"
    },
    {
        icon: <Wallet size={40} />,
        title: "Finance",
        desc: "Détection de fraude, scoring crédit, optimisation financière.",
        color: "fin"
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Sécurité",
        desc: "Détection d'intrusion, cybersécurité, gestion des accès.",
        color: "sec"
    },
];

export default function SolutionsGrid() {
    return (
        <section className="solutions-section">
            <h2 className="solutions-title">Nos Domaines d’Expertise</h2>
            <div className="solutions-grid">
                {domains.map((d, i) => (
                    <div key={i} className={`solution-card ${d.color}`}>
                        <div className="solution-icon">{d.icon}</div>
                        <div className="solution-title">{d.title}</div>
                        <div className="solution-desc">{d.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
