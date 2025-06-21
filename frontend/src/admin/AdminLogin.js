import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simulation d'authentification
            // Remplacez par votre vraie logique d'auth
            if (credentials.username === 'admin' && credentials.password === 'teamai2024') {
                localStorage.setItem('admin_token', 'mock-jwt-token');
                localStorage.setItem('admin_user', JSON.stringify({
                    username: credentials.username,
                    role: 'admin'
                }));
                onLogin(true);
            } else {
                setError('Identifiants incorrects');
            }

            /* Vraie authentification avec votre backend :
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('admin_token', data.access_token);
                localStorage.setItem('admin_user', JSON.stringify(data.user));
                onLogin(true);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Erreur d\'authentification');
            }
            */
        } catch (error) {
            console.error('Erreur de connexion:', error);
            setError('Erreur de connexion au serveur');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login">
            <div className="login-container">
                <div className="login-header">
                    <div className="login-icon">
                        <Lock size={40} />
                    </div>
                    <h1>Administration TeamAI</h1>
                    <p>Connectez-vous pour accéder au panneau d'administration</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">
                            <User size={18} />
                            Nom d'utilisateur
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={credentials.username}
                            onChange={(e) => setCredentials({
                                ...credentials,
                                username: e.target.value
                            })}
                            required
                            autoComplete="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            <Lock size={18} />
                            Mot de passe
                        </label>
                        <div className="password-input">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({
                                    ...credentials,
                                    password: e.target.value
                                })}
                                required
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={loading}
                    >
                        {loading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>

                <div className="login-demo">
                    <p><strong>Démo :</strong></p>
                    <p>Username: <code>admin</code></p>
                    <p>Password: <code>teamai2024</code></p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;












// import React, { useState } from 'react';
// import { Lock, User, Eye, EyeOff, AlertCircle, Wifi, WifiOff } from 'lucide-react';
// import './AdminLogin.css';
// const AdminLogin = ({ onLogin }) => {
//     const [credentials, setCredentials] = useState({
//         username: 'admin',
//         password: 'teamai2024'
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [connectionStatus, setConnectionStatus] = useState(null);

//     const API_BASE_URL = "http://localhost:8000";

//     const testConnection = async () => {
//         try {
//             const response = await fetch(`${API_BASE_URL}/health`);
//             if (response.ok) {
//                 const data = await response.json();
//                 setConnectionStatus('connected');
//                 console.log('✅ Serveur accessible:', data);
//             } else {
//                 setConnectionStatus('error');
//                 console.log('❌ Serveur répond avec erreur:', response.status);
//             }
//         } catch (error) {
//             setConnectionStatus('offline');
//             console.log('💥 Serveur inaccessible:', error.message);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');

//         try {
//             console.log('🔄 Tentative de connexion...', {
//                 username: credentials.username,
//                 url: `${API_BASE_URL}/api/auth/login`
//             });

//             const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                 },
//                 credentials: 'include',
//                 body: JSON.stringify({
//                     username: credentials.username,
//                     password: credentials.password
//                 })
//             });

//             console.log('📡 Réponse:', {
//                 status: response.status,
//                 statusText: response.statusText
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log('✅ Login réussi:', data);

//                 // Stocker les informations de connexion
//                 localStorage.setItem('admin_token', data.access_token);
//                 localStorage.setItem('token_type', data.token_type || 'bearer');
//                 localStorage.setItem('admin_user', JSON.stringify(data.user));

//                 // Appeler le callback de succès
//                 onLogin(true);
//             } else {
//                 const errorData = await response.json();
//                 console.log('❌ Erreur de login:', errorData);
//                 setError(errorData.detail || errorData.message || 'Erreur d\'authentification');
//             }

//         } catch (error) {
//             console.error('💥 Erreur de connexion:', error);
//             setError('Impossible de se connecter au serveur. Vérifiez que le backend est démarré.');
//             setConnectionStatus('offline');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Test automatique de connexion au chargement
//     React.useEffect(() => {
//         testConnection();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//             <div className="max-w-md w-full">
//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                     {/* Header */}
//                     <div className="text-center mb-8">
//                         <div className="mx-auto h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
//                             <Lock size={32} className="text-white" />
//                         </div>
//                         <h1 className="text-2xl font-bold text-gray-900">Administration TeamAI</h1>
//                         <p className="text-gray-600 mt-2">Connectez-vous pour accéder au panneau d'administration</p>
//                     </div>

//                     {/* Status de connexion */}
//                     <div className="mb-6">
//                         <div className="flex items-center justify-between">
//                             <span className="text-sm text-gray-600">État du serveur :</span>
//                             <div className="flex items-center gap-2">
//                                 {connectionStatus === 'connected' && (
//                                     <>
//                                         <Wifi size={16} className="text-green-600" />
//                                         <span className="text-sm text-green-600">Connecté</span>
//                                     </>
//                                 )}
//                                 {connectionStatus === 'offline' && (
//                                     <>
//                                         <WifiOff size={16} className="text-red-600" />
//                                         <span className="text-sm text-red-600">Hors ligne</span>
//                                     </>
//                                 )}
//                                 {connectionStatus === 'error' && (
//                                     <>
//                                         <AlertCircle size={16} className="text-orange-600" />
//                                         <span className="text-sm text-orange-600">Erreur</span>
//                                     </>
//                                 )}
//                                 {connectionStatus === null && (
//                                     <span className="text-sm text-gray-500">Test...</span>
//                                 )}
//                             </div>
//                         </div>
//                         <button
//                             type="button"
//                             onClick={testConnection}
//                             className="mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
//                         >
//                             Retester la connexion
//                         </button>
//                     </div>

//                     {/* Formulaire */}
//                     <div className="space-y-6">
//                         <div>
//                             <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                                 <User size={18} />
//                                 Nom d'utilisateur
//                             </label>
//                             <input
//                                 type="text"
//                                 value={credentials.username}
//                                 onChange={(e) => setCredentials({
//                                     ...credentials,
//                                     username: e.target.value
//                                 })}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                                 required
//                                 autoComplete="username"
//                                 placeholder="admin"
//                             />
//                         </div>

//                         <div>
//                             <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
//                                 <Lock size={18} />
//                                 Mot de passe
//                             </label>
//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     value={credentials.password}
//                                     onChange={(e) => setCredentials({
//                                         ...credentials,
//                                         password: e.target.value
//                                     })}
//                                     className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                                     required
//                                     autoComplete="current-password"
//                                     placeholder="••••••••"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
//                                 >
//                                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Messages d'erreur */}
//                         {error && (
//                             <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
//                                 <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
//                                 <div className="text-sm text-red-700">
//                                     {error}
//                                     {error.includes('serveur') && (
//                                         <div className="mt-1 text-xs">
//                                             Assurez-vous que votre backend FastAPI est démarré sur le port 8000
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         )}

//                         {/* Bouton de connexion */}
//                         <button
//                             onClick={handleSubmit}
//                             disabled={loading || connectionStatus === 'offline'}
//                             className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors font-medium"
//                         >
//                             {loading ? 'Connexion...' : 'Se connecter'}
//                         </button>
//                     </div>

//                     {/* Informations de démo */}
//                     <div className="mt-8 pt-6 border-t border-gray-200">
//                         <div className="bg-blue-50 rounded-lg p-4">
//                             <p className="text-sm font-medium text-blue-900 mb-2">
//                                 <strong>Identifiants de démonstration :</strong>
//                             </p>
//                             <div className="text-sm text-blue-800 space-y-1">
//                                 <div>Username: <code className="bg-blue-100 px-2 py-1 rounded">admin</code></div>
//                                 <div>Password: <code className="bg-blue-100 px-2 py-1 rounded">teamai2024</code></div>
//                             </div>
//                         </div>

//                         {/* Debug info */}
//                         <div className="mt-4 text-xs text-gray-500">
//                             <div><strong>Endpoint :</strong> {API_BASE_URL}/api/auth/login</div>
//                             <div><strong>Méthode :</strong> POST</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;