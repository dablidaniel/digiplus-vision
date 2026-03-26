import { motion } from "framer-motion";
import { Clock, BarChart3, ArrowRight, Check, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const formations = [
  {
    title: "WordPress Mastery", price: "49€", level: "Débutant", duration: "12h", color: "from-blue-600 to-cyan-500",
    desc: "Maîtrisez WordPress de A à Z : installation, thèmes, plugins, sécurité et optimisation.",
    modules: ["Installation & configuration", "Thèmes & personnalisation", "Plugins essentiels", "Sécurité & maintenance", "SEO WordPress"],
  },
  {
    title: "Web Marketing Pro", price: "69€", level: "Intermédiaire", duration: "15h", color: "from-green-600 to-teal-500",
    desc: "Stratégies marketing complètes : publicité, email, réseaux sociaux et analytics.",
    modules: ["Stratégie digitale", "Facebook & Google Ads", "Email marketing", "Analytics & KPIs", "Funnel de conversion"],
  },
  {
    title: "SEO Expert", price: "59€", level: "Avancé", duration: "10h", color: "from-orange-600 to-yellow-500",
    desc: "Techniques avancées de référencement pour dominer les résultats de recherche.",
    modules: ["SEO technique", "Recherche de mots-clés", "Link building", "Content marketing", "SEO local"],
  },
  {
    title: "E-commerce Rentable", price: "79€", level: "Intermédiaire", duration: "18h", color: "from-purple-600 to-pink-500",
    desc: "Créez et développez une boutique en ligne qui génère des revenus constants.",
    modules: ["Stratégie produit", "WooCommerce avancé", "Tunnel de vente", "Logistique", "Scaling"],
  },
  {
    title: "Freelance Success", price: "39€", level: "Débutant", duration: "8h", color: "from-red-600 to-rose-500",
    desc: "Lancez votre activité freelance sur ComeUp, Upwork et Fiverr avec succès.",
    modules: ["Positionnement", "Profil optimisé", "Prospection", "Tarification", "Fidélisation"],
  },
  {
    title: "Canva Design Pro", price: "29€", level: "Débutant", duration: "6h", color: "from-pink-600 to-fuchsia-500",
    desc: "Créez des visuels professionnels sans compétences en design graphique.",
    modules: ["Interface Canva", "Templates pro", "Branding", "Visuels sociaux", "Print design"],
  },
  {
    title: "CapCut Montage Vidéo", price: "34€", level: "Débutant", duration: "7h", color: "from-indigo-600 to-blue-500",
    desc: "Maîtrisez le montage vidéo avec CapCut pour créer du contenu impactant.",
    modules: ["Prise en main", "Montage dynamique", "Effets & transitions", "Audio & musique", "Export optimisé"],
  },
  {
    title: "IA & Prompt Engineering", price: "89€", level: "Avancé", duration: "14h", color: "from-violet-600 to-purple-500",
    desc: "Devenez expert en intelligence artificielle et création de prompts avancés.",
    modules: ["Fondamentaux IA", "ChatGPT avancé", "Midjourney & DALL-E", "Automatisation", "Prompts métier"],
  },
  {
    title: "TikTok Monétisé", price: "44€", level: "Intermédiaire", duration: "9h", color: "from-cyan-600 to-blue-500",
    desc: "Stratégies pour créer du contenu viral et monétiser votre compte TikTok.",
    modules: ["Algorithme TikTok", "Création de contenu", "Viralité", "Monétisation", "TikTok Shop"],
  },
  {
    title: "Développement Personnel", price: "24€", level: "Débutant", duration: "5h", color: "from-emerald-600 to-green-500",
    desc: "Développez votre mindset, productivité et gestion du temps pour réussir.",
    modules: ["Mindset entrepreneur", "Gestion du temps", "Productivité", "Objectifs SMART", "Routines"],
  },
];

const FormationsPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Formations" title="Catalogue de formations" subtitle="Développez vos compétences avec nos formations complètes et pratiques." />

        <div className="space-y-8 mt-12">
          {formations.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all"
            >
              <div className={`w-full lg:w-60 h-40 lg:h-auto rounded-xl bg-gradient-to-br ${f.color} shrink-0 flex items-center justify-center`}>
                <BookOpen size={40} className="text-primary-foreground opacity-50" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-heading font-bold">{f.title}</h3>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    <Clock size={10} /> {f.duration}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                    <BarChart3 size={10} /> {f.level}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{f.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {f.modules.map((m) => (
                    <span key={m} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Check size={10} className="text-primary" /> {m}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-gradient">{f.price}</span>
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow hover:shadow-neon transition-all">
                    Accéder <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default FormationsPage;
