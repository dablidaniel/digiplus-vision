import { motion } from "framer-motion";
import { Globe, Headphones, ShoppingCart, FileText, Palette, Video, Brain, TrendingUp, ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Globe, title: "Création de sites web", color: "from-blue-500 to-cyan-400",
    desc: "Sites WordPress professionnels, vitrines et landing pages sur mesure.",
    features: ["Design responsive", "Optimisation SEO", "Hébergement inclus", "Formation utilisation"],
    process: ["Analyse des besoins", "Maquette & design", "Développement", "Tests & livraison"],
  },
  {
    icon: Headphones, title: "Gestion SAV", color: "from-green-500 to-emerald-400",
    desc: "Service client externalisé pour répondre à vos utilisateurs avec professionnalisme.",
    features: ["Support multicanal", "Temps de réponse rapide", "Base de connaissances", "Rapports mensuels"],
    process: ["Audit du service actuel", "Mise en place", "Formation équipe", "Suivi continu"],
  },
  {
    icon: ShoppingCart, title: "E-commerce", color: "from-orange-500 to-yellow-400",
    desc: "Boutiques en ligne WooCommerce et Shopify optimisées pour la conversion.",
    features: ["Paiement sécurisé", "Gestion des stocks", "Tunnel de vente", "Analytics avancés"],
    process: ["Stratégie produit", "Design boutique", "Intégration paiement", "Lancement"],
  },
  {
    icon: FileText, title: "Rédaction SEO", color: "from-pink-500 to-rose-400",
    desc: "Contenus optimisés pour les moteurs de recherche qui attirent du trafic qualifié.",
    features: ["Recherche de mots-clés", "Rédaction optimisée", "Planification éditoriale", "Analyse de performance"],
    process: ["Audit SEO", "Stratégie de contenu", "Rédaction", "Suivi des positions"],
  },
  {
    icon: Palette, title: "Design graphique", color: "from-purple-500 to-violet-400",
    desc: "Identités visuelles, logos et supports de communication percutants.",
    features: ["Logo professionnel", "Charte graphique", "Supports print", "Visuels réseaux sociaux"],
    process: ["Brief créatif", "Recherche visuelle", "Propositions", "Finalisation"],
  },
  {
    icon: Video, title: "Montage vidéo", color: "from-red-500 to-pink-400",
    desc: "Vidéos professionnelles pour YouTube, TikTok, Instagram et publicités.",
    features: ["Montage dynamique", "Motion design", "Sous-titres", "Optimisation plateforme"],
    process: ["Script & storyboard", "Montage", "Effets & son", "Export & diffusion"],
  },
  {
    icon: Brain, title: "IA & ChatGPT", color: "from-indigo-500 to-blue-400",
    desc: "Consulting en intelligence artificielle et création de prompts sur mesure.",
    features: ["Prompts personnalisés", "Automatisation IA", "Chatbots", "Formation équipe"],
    process: ["Analyse des besoins", "Design de prompts", "Intégration", "Optimisation"],
  },
  {
    icon: TrendingUp, title: "Marketing digital", color: "from-teal-500 to-cyan-400",
    desc: "Stratégies marketing complètes pour accélérer votre croissance en ligne.",
    features: ["Publicité payante", "Email marketing", "Réseaux sociaux", "Analytics"],
    process: ["Audit marketing", "Stratégie sur mesure", "Exécution", "Analyse ROI"],
  },
];

const ServicesPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Services" title="Nos expertises à votre service" subtitle="Des solutions complètes pour chaque aspect de votre présence digitale." />

        <div className="space-y-20 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
            >
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon size={26} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>

                <h4 className="font-heading font-semibold mb-3 text-sm text-primary uppercase tracking-wider">Avantages</h4>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-neon transition-all text-sm">
                  Commander maintenant <ArrowRight size={16} />
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="p-6 rounded-2xl bg-glass">
                  <h4 className="font-heading font-semibold mb-4 text-sm text-primary uppercase tracking-wider">Processus</h4>
                  <div className="space-y-4">
                    {service.process.map((step, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                          {j + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ServicesPage;
