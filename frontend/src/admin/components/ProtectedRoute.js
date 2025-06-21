// import React, { useState, useEffect } from 'react';
// import AdminLogin from '../AdminLogin';
// import AdminDashboard from '../AdminDashboard';

// const ProtectedRoute = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Vérifier si l'utilisateur est déjà connecté
//         const token = localStorage.getItem('admin_token');
//         const user = localStorage.getItem('admin_user');

//         if (token && user) {
//             // Optionnel : Vérifier la validité du token avec le backend
//             validateToken(token).then((isValid) => {
//                 setIsAuthenticated(isValid);
//                 setLoading(false);
//             });
//         } else {
//             setLoading(false);
//         }
//     }, []);

//     const validateToken = async (token) => {
//         try {
//             // Simulation de validation
//             // Remplacez par votre vraie validation
//             return true;

//             /* Vraie validation avec votre backend :
//             const response = await fetch('http://localhost:8000/api/auth/validate', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             return response.ok;
//             */
//         } catch (error) {
//             console.error('Erreur de validation du token:', error);
//             return false;
//         }
//     };

//     const handleLogin = (success) => {
//         setIsAuthenticated(success);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('admin_token');
//         localStorage.removeItem('admin_user');
//         setIsAuthenticated(false);
//     };

//     if (loading) {
//         return (
//             <div style={{
//                 minHeight: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 background: '#f8fafc'
//             }}>
//                 <div>Chargement...</div>
//             </div>
//         );
//     }

//     if (!isAuthenticated) {
//         return <AdminLogin onLogin={handleLogin} />;
//     }

//     return <AdminDashboard onLogout={handleLogout} />;
// };

// export default ProtectedRoute;









import React, { useState, useEffect } from 'react';
// import AdminLogin from './AdminLogin';
// import AdminDashboard from './AdminDashboard';
import AdminLogin from '../AdminLogin';
import AdminDashboard from '../AdminDashboard';
const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = "http://localhost:8000";

    useEffect(() => {
        checkAuthentication();
    }, []);

    const checkAuthentication = async () => {
        const token = localStorage.getItem('admin_token');
        const user = localStorage.getItem('admin_user');

        if (token && user) {
            // Valider le token avec le backend
            const isValid = await validateToken(token);
            setIsAuthenticated(isValid);
        }

        setLoading(false);
    };

    const validateToken = async (token) => {
        try {
            console.log('🔍 Validation du token...');

            const response = await fetch(`${API_BASE_URL}/api/auth/validate`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            });

            console.log('📡 Validation réponse:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('✅ Token valide:', data);
                return true;
            } else {
                console.log('❌ Token invalide');
                // Nettoyer le localStorage si le token n'est pas valide
                handleLogout();
                return false;
            }
        } catch (error) {
            console.error('💥 Erreur de validation:', error);
            // En cas d'erreur réseau, on peut garder l'utilisateur connecté
            // ou le déconnecter selon votre stratégie
            return true; // Changez en false si vous voulez déconnecter en cas d'erreur réseau
        }
    };

    const handleLogin = (success) => {
        if (success) {
            console.log('✅ Login réussi, redirection vers dashboard');
            setIsAuthenticated(true);
        }
    };

    const handleLogout = () => {
        console.log('🚪 Déconnexion...');
        localStorage.removeItem('admin_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('admin_user');
        setIsAuthenticated(false);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <div className="text-gray-600">Vérification de l'authentification...</div>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return <AdminDashboard onLogout={handleLogout} />;
};

export default ProtectedRoute;