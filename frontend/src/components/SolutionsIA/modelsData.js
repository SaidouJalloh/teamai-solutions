// modelsData.js - Fichier contenant les données des modèles par catégorie

export const modelsByCategory = {
    // Modèles pour la catégorie Santé
    sante: [
        {
            id: 'diagnosticai',
            name: 'DiagnosticAI',
            description: 'Système d\'aide au diagnostic basé sur les symptômes et l\'historique médical',
            icon: 'bi bi-clipboard2-pulse',
            path: '/analyze/health/diagnostic'
        },
        {
            id: 'medvision',
            name: 'MedVision',
            description: 'Analyse d\'images médicales (radiographies, IRM, scanners)',
            icon: 'bi bi-eye',
            path: '/analyze/health/medvision'
        },
        {
            id: 'tuberculosis-v1',
            name: 'TuberculosisDetect v1',
            description: 'Détection de la tuberculose à partir de radiographies pulmonaires (64x64, RGB)',
            icon: 'bi bi-lungs',
            path: '/analyze/tuberculosis/v1'
        },
        {
            id: 'tuberculosis-v2',
            name: 'TuberculosisDetect v2',
            description: 'Version améliorée avec une résolution de 256x256 pixels pour capturer plus de détails',
            icon: 'bi bi-aspect-ratio',
            path: '/analyze/tuberculosis/v2'
        },
        {
            id: 'pneumonia',
            name: 'PneumoniaDetect',
            description: 'Détection de la pneumonie avec une résolution de 64x64 pixels',
            icon: 'bi bi-virus',
            path: '/analyze/pneumonia'
        }
    ],

    // Modèles pour la catégorie Agriculture
    agriculture: [
        {
            id: 'crop-analyzer',
            name: 'CropAnalyzer',
            description: 'Analyse de la santé des cultures et détection des maladies des plantes',
            icon: 'bi bi-flower1',
            path: '/analyze/agriculture/crops'
        },
        {
            id: 'soil-quality',
            name: 'SoilQualityAI',
            description: 'Évaluation de la qualité du sol et recommandations de culture',
            icon: 'bi bi-water',
            path: '/analyze/agriculture/soil'
        }
    ],

    // Modèles pour la catégorie Education
    education: [
        {
            id: 'student-performance',
            name: 'StudentPerformance',
            description: 'Analyse des performances des étudiants et recommandations personnalisées',
            icon: 'bi bi-graph-up',
            path: '/analyze/education/performance'
        },
        {
            id: 'content-classifier',
            name: 'ContentClassifier',
            description: 'Classification du contenu éducatif pour une meilleure organisation des ressources',
            icon: 'bi bi-grid-3x3',
            path: '/analyze/education/content'
        }
    ],

    // Modèles pour la catégorie Finance
    finance: [
        {
            id: 'fraud-detector',
            name: 'FraudDetector',
            description: 'Détection des transactions frauduleuses et des activités suspectes',
            icon: 'bi bi-shield-check',
            path: '/analyze/finance/fraud'
        },
        {
            id: 'investment-advisor',
            name: 'InvestmentAdvisor',
            description: 'Recommandations d\'investissement basées sur l\'analyse des marchés',
            icon: 'bi bi-cash-coin',
            path: '/analyze/finance/investment'
        }
    ],

    // Modèles pour la catégorie Environnement
    environnement: [
        {
            id: 'air-quality',
            name: 'AirQualityMonitor',
            description: 'Surveillance et prédiction de la qualité de l\'air dans différentes zones',
            icon: 'bi bi-cloud',
            path: '/analyze/environment/air'
        },
        {
            id: 'deforestation',
            name: 'DeforestationDetector',
            description: 'Détection de la déforestation à partir d\'images satellite',
            icon: 'bi bi-tree',
            path: '/analyze/environment/forest'
        }
    ]
};