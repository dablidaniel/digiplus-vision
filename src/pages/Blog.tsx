import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  { title: "10 tendances web design 2026", summary: "Les tendances visuelles et UX qui dominent le web cette année. De la 3D immersive aux micro-interactions.", category: "Design", date: "15 Mars 2026", color: "from-purple-600 to-pink-500" },
  { title: "SEO : guide complet", summary: "Tout savoir sur le référencement naturel en 2026 : algorithmes, contenu, technique et netlinking.", category: "SEO", date: "12 Mars 2026", color: "from-blue-600 to-cyan-500" },
  { title: "L'IA révolutionne le marketing", summary: "Comment ChatGPT et les outils IA transforment les stratégies marketing des entreprises.", category: "IA", date: "10 Mars 2026", color: "from-green-600 to-teal-500" },
  { title: "WordPress vs Headless CMS", summary: "Comparatif détaillé pour choisir la meilleure solution selon votre projet web.", category: "Dev", date: "8 Mars 2026", color: "from-orange-600 to-yellow-500" },
  { title: "Monétiser TikTok en 2026", summary: "Stratégies concrètes pour créer du contenu viral et générer des revenus sur TikTok.", category: "Social", date: "5 Mars 2026", color: "from-red-600 to-pink-500" },
  { title: "E-commerce : les clés du succès", summary: "Lancer et optimiser une boutique en ligne rentable : de la stratégie à l'exécution.", category: "E-commerce", date: "3 Mars 2026", color: "from-indigo-600 to-violet-500" },
  { title: "Canva pour les pros", summary: "Créer des visuels professionnels sans être graphiste grâce à Canva.", category: "Design", date: "1 Mars 2026", color: "from-pink-600 to-fuchsia-500" },
  { title: "Email marketing efficace", summary: "Construire des séquences email qui convertissent et fidélisent vos clients.", category: "Marketing", date: "28 Fév 2026", color: "from-teal-600 to-cyan-500" },
  { title: "Freelance : devenir indépendant", summary: "Guide pas à pas pour lancer votre activité freelance dans le digital.", category: "Freelance", date: "25 Fév 2026", color: "from-amber-600 to-orange-500" },
];

const BlogPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Blog" title="Actualités & Guides" subtitle="Insights, tutoriels et conseils pour réussir dans le digital." />

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Rechercher un article..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-gradient-card border border-border overflow-hidden group hover:border-primary/30 transition-all hover:shadow-glow"
            >
              <div className={`h-44 bg-gradient-to-br ${article.color} relative`}>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 text-xs font-medium">{article.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} /> {article.date}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{article.summary}</p>
                <Link to="/blog" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                  Lire l'article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default BlogPage;
