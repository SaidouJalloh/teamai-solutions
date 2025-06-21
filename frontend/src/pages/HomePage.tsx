// import { ArrowRight, Brain, Zap, Shield, Globe } from "lucide-react"
// import Button from "../components/ui/Button"
// import Card from "../components/ui/Card"

// const HomePage = () => {
//   const features = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "IA Conversationnelle",
//       description: "Chatbots intelligents adaptés aux langues et cultures africaines",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Analyse Prédictive",
//       description: "Modèles prédictifs pour l'agriculture, la santé et la finance",
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "IA Éthique",
//       description: "Solutions respectueuses des valeurs et diversité africaine",
//     },
//     {
//       icon: <Globe className="w-8 h-8" />,
//       title: "Vision par Ordinateur",
//       description: "Reconnaissance d'images pour la santé et l'agriculture",
//     },
//   ]

//   const stats = [
//     { number: "15+", label: "Modèles IA" },
//     { number: "500+", label: "Clients satisfaits" },
//     { number: "12", label: "Pays africains" },
//     { number: "95%", label: "Précision moyenne" },
//   ]

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="mb-8">
//             <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
//               🚀 Solutions IA Made in Africa
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//               L'Intelligence Artificielle
//             </span>
//             <br />
//             <span className="text-gray-900 dark:text-white">au service de l'Afrique</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
//             Nous développons des solutions d'IA innovantes, formons les talents de demain et créons l'écosystème
//             technologique africain.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <Button size="lg" className="px-8 py-4">
//               Découvrir nos solutions
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//             <Button variant="outline" size="lg" className="px-8 py-4">
//               Voir nos modèles IA
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
//                 <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white dark:bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//               Nos domaines d'expertise
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Des solutions IA conçues spécifiquement pour répondre aux défis du continent africain
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 text-white">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Prêt à transformer votre vision en réalité ?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Rejoignez les entreprises qui font confiance à nos solutions IA pour révolutionner leurs activités
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button variant="secondary" size="lg" className="px-8 py-4">
//               Contactez-nous
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
//             >
//               Voir nos formations
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default HomePage
