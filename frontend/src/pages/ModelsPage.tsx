// "use client"

// import { useState } from "react"
// import { useQuery } from "@tanstack/react-query"
// import { Brain, ExternalLink, Star } from "lucide-react"
// import { fetchModels } from "../services/api"
// import LoadingSpinner from "../components/ui/LoadingSpinner"
// import Card from "../components/ui/Card"
// import Button from "../components/ui/Button"
// import Badge from "../components/ui/Badge"

// const ModelsPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const {
//     data: models,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["models"],
//     queryFn: fetchModels,
//   })

//   const categories = [
//     { id: "all", name: "Tous les modèles" },
//     { id: "nlp", name: "Traitement du langage" },
//     { id: "vision", name: "Vision par ordinateur" },
//     { id: "medical", name: "Analyse médicale" },
//     { id: "agriculture", name: "Agriculture" },
//   ]

//   const filteredModels = models?.filter(
//     (model: any) => selectedCategory === "all" || model.category === selectedCategory,
//   )

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <LoadingSpinner size="lg" />
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Erreur de chargement</h2>
//           <p className="text-gray-600 dark:text-gray-400">Impossible de charger les modèles IA</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Nos modèles d'IA</h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Découvrez notre collection de modèles d'intelligence artificielle conçus pour répondre aux défis africains
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-medium transition-all ${
//                 selectedCategory === category.id
//                   ? "bg-blue-600 text-white shadow-lg"
//                   : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Models Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredModels?.map((model: any, index: number) => (
//             <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <Badge variant={model.status === "available" ? "success" : "warning"}>
//                   {model.status === "available" ? "Disponible" : "Bientôt"}
//                 </Badge>
//               </div>

//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{model.name}</h3>

//               <p className="text-gray-600 dark:text-gray-300 mb-4">{model.description}</p>

//               <div className="flex items-center mb-4">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < Math.floor(model.rating || 0) ? "text-yellow-400 fill-current" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({model.rating || 0}/5)</span>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {model.tags?.map((tag: string, tagIndex: number) => (
//                   <Badge key={tagIndex} variant="secondary">
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <Button className="flex-1" disabled={model.status !== "available"}>
//                   {model.status === "available" ? "Essayer" : "Bientôt disponible"}
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <ExternalLink className="w-4 h-4" />
//                 </Button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ModelsPage
