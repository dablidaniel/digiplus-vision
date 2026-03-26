import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Search } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { title: "Pack Templates WordPress Premium", price: "29€", category: "Templates", desc: "10 templates WordPress professionnels et responsive." },
  { title: "Scripts d'automatisation Python", price: "19€", category: "Scripts", desc: "Scripts pour automatiser vos tâches marketing." },
  { title: "Guide SEO Complet 2026", price: "14€", category: "Ebooks", desc: "Guide de 80 pages sur le référencement naturel." },
  { title: "Kit Design Canva Pro", price: "24€", category: "Design", desc: "200+ templates Canva pour vos réseaux sociaux." },
  { title: "Prompts IA Premium", price: "9€", category: "IA", desc: "100 prompts ChatGPT pour le business." },
  { title: "Pack Réseaux Sociaux", price: "19€", category: "Marketing", desc: "Stratégies et templates pour les réseaux sociaux." },
  { title: "Templates E-mail Marketing", price: "15€", category: "Marketing", desc: "30 templates d'emails qui convertissent." },
  { title: "Kit Freelance Starter", price: "34€", category: "Freelance", desc: "Tout pour lancer votre activité freelance." },
  { title: "Pack Vidéo CapCut", price: "12€", category: "Vidéo", desc: "Effets, transitions et templates CapCut." },
];

const CataloguePage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Catalogue" title="Produits digitaux" subtitle="Templates, scripts, ebooks et outils prêts à l'emploi." />

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Rechercher un produit..." className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all group hover:shadow-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center">
                  <ShoppingBag size={20} className="text-primary-foreground" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{product.category}</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{product.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-heading font-bold text-gradient">{product.price}</span>
                <button className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all">
                  Acheter <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CataloguePage;
