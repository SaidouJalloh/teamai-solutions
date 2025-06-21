"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Users,
  Calendar,
  Rocket,
  Globe,
  Code,
  Zap,
  Award,
  ArrowRight,
  Play,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function AIStartupWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-slate-900/95 backdrop-blur-md border-b border-orange-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                AfriAI Solutions
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#accueil" className="text-white hover:text-indigo-400 transition-colors">
                Accueil
              </Link>
              <Link href="#solutions" className="text-white hover:text-indigo-400 transition-colors">
                Solutions
              </Link>
              <Link href="#formation" className="text-white hover:text-indigo-400 transition-colors">
                Formation
              </Link>
              <Link href="#evenements" className="text-white hover:text-indigo-400 transition-colors">
                Événements
              </Link>
              <Link href="#contact" className="text-white hover:text-indigo-400 transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-amber-600 text-white">
                Démarrer
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <Link href="#accueil" className="text-white hover:text-indigo-400 transition-colors">
                  Accueil
                </Link>
                <Link href="#solutions" className="text-white hover:text-indigo-400 transition-colors">
                  Solutions
                </Link>
                <Link href="#formation" className="text-white hover:text-indigo-400 transition-colors">
                  Formation
                </Link>
                <Link href="#evenements" className="text-white hover:text-indigo-400 transition-colors">
                  Événements
                </Link>
                <Link href="#contact" className="text-white hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-amber-600 text-white">
                  Démarrer
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">
              🚀 Solutions IA Made in Africa
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
              L'IA qui comprend
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              l'Afrique
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform data into solutions. Nous développons des solutions d'intelligence artificielle adaptées aux
            réalités africaines, formons la prochaine génération de talents tech et créons l'écosystème IA de demain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
            >
              Découvrir nos solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 px-8 py-4 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Voir la démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">15+</div>
              <div className="text-gray-400">Modèles IA en production</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-400">Jeunes formés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">25+</div>
              <div className="text-gray-400">Événements organisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">12</div>
              <div className="text-gray-400">Pays africains</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions IA Section */}
      <section id="solutions" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">🧠 Nos Solutions IA</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies qui transforment l'Afrique</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions d'IA conçues spécifiquement pour répondre aux défis et opportunités du continent africain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "IA Conversationnelle",
                description:
                  "Chatbots et assistants virtuels qui comprennent les langues locales et les contextes culturels africains",
                features: ["Support multilingue", "Compréhension culturelle", "Déploiement local"],
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Vision par Ordinateur",
                description: "Solutions de reconnaissance d'images adaptées aux environnements et besoins africains",
                features: ["Agriculture intelligente", "Santé diagnostique", "Sécurité urbaine"],
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Analyse Prédictive",
                description: "Modèles prédictifs pour l'agriculture, la finance et les services publics",
                features: ["Prévisions météo", "Analyse de crédit", "Optimisation ressources"],
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "APIs IA",
                description: "APIs robustes et scalables pour intégrer l'IA dans vos applications",
                features: ["Documentation complète", "Support technique", "Tarification flexible"],
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "IA Éthique",
                description: "Solutions respectueuses des valeurs et de la diversité africaine",
                features: ["Biais minimisés", "Transparence", "Respect culturel"],
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Solutions Custom",
                description: "Développement sur mesure pour vos besoins spécifiques",
                features: ["Consultation gratuite", "Développement agile", "Support continu"],
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-300">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <ChevronRight className="w-4 h-4 text-orange-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-4">🎓 Formation & Éducation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Former les talents de demain</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Programmes de formation complets pour démocratiser l'IA et le numérique en Afrique
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Bootcamps IA",
                    description: "Formations intensives de 3-6 mois pour maîtriser l'IA et le machine learning",
                  },
                  {
                    icon: <Code className="w-6 h-6" />,
                    title: "Développement Web & Mobile",
                    description: "Apprenez à créer des applications modernes avec les dernières technologies",
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "Data Science",
                    description:
                      "Maîtrisez l'analyse de données et la visualisation pour prendre de meilleures décisions",
                  },
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    title: "Entrepreneuriat Tech",
                    description: "Accompagnement pour créer et développer votre startup technologique",
                  },
                ].map((program, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{program.title}</h3>
                      <p className="text-gray-300">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                  Voir tous les programmes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                    <div className="text-gray-300">Étudiants formés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                    <div className="text-gray-300">Taux de réussite</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                    <div className="text-gray-300">Insertion professionnelle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">15</div>
                    <div className="text-gray-300">Programmes actifs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Événements Section */}
      <section id="evenements" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">📅 Événements & Communauté</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Construisons ensemble l'écosystème IA africain
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rejoignez notre communauté dynamique à travers nos événements, conférences et meetups
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "15 Mars 2024",
                title: "AI Summit Africa 2024",
                location: "Lagos, Nigeria",
                type: "Conférence",
                attendees: "500+ participants",
              },
              {
                date: "22 Mars 2024",
                title: "Workshop Machine Learning",
                location: "Dakar, Sénégal",
                type: "Formation",
                attendees: "50 participants",
              },
              {
                date: "5 Avril 2024",
                title: "Hackathon IA pour l'Agriculture",
                location: "Nairobi, Kenya",
                type: "Compétition",
                attendees: "200+ développeurs",
              },
              {
                date: "18 Avril 2024",
                title: "Meetup Entrepreneurs Tech",
                location: "Casablanca, Maroc",
                type: "Networking",
                attendees: "100+ entrepreneurs",
              },
              {
                date: "2 Mai 2024",
                title: "Formation Data Science",
                location: "Abidjan, Côte d'Ivoire",
                type: "Formation",
                attendees: "75 participants",
              },
              {
                date: "15 Mai 2024",
                title: "Conférence IA & Santé",
                location: "Accra, Ghana",
                type: "Conférence",
                attendees: "300+ professionnels",
              },
            ].map((event, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300">
                      {event.type}
                    </Badge>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-blue-400" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
              Voir tous les événements
              <Calendar className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">💬 Contactez-nous</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre vision en réalité ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discutons de votre projet et découvrons comment l'IA peut révolutionner votre activité
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">contact@afriai.com</p>
                    <p className="text-gray-300">partnerships@afriai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                    <p className="text-gray-300">+221 77 123 45 67</p>
                    <p className="text-gray-300">+234 80 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bureaux</h3>
                    <p className="text-gray-300">Dakar, Sénégal</p>
                    <p className="text-gray-300">Lagos, Nigeria</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Envoyez-nous un message</CardTitle>
                <CardDescription className="text-gray-300">Nous vous répondrons dans les 24 heures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Prénom"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Nom"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Sujet"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Votre message..."
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-600 hover:to-amber-600 text-white">
                  Envoyer le message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  AfriAI Solutions
                </span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Pionniers de l'intelligence artificielle en Afrique, nous créons des solutions qui transforment le
                continent et formons les talents de demain.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500/20 transition-colors cursor-pointer"
                  >
                    <span className="text-gray-400 text-sm">{social[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    IA Conversationnelle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Vision par Ordinateur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Analyse Prédictive
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    APIs IA
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Formation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Bootcamps IA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-indigo-400 transition-colors">
                    Entrepreneuriat
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 AfriAI. Tous droits réservés. Made with ❤️ in Africa</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
