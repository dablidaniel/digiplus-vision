import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const products = [
  { title: "Pack Templates WordPress", price: "29€", category: "Templates" },
  { title: "Scripts d'automatisation", price: "19€", category: "Scripts" },
  { title: "Guide SEO Complet", price: "14€", category: "Ebooks" },
  { title: "Kit Design Canva Pro", price: "24€", category: "Design" },
  { title: "Prompts IA Premium", price: "9€", category: "IA" },
  { title: "Pack Réseaux Sociaux", price: "19€", category: "Marketing" },
];

const CatalogueSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Catalogue" title="Produits digitaux" subtitle="Templates, scripts, ebooks et ressources prêts à l'emploi." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-neon flex items-center justify-center">
                <ShoppingBag size={18} className="text-primary-foreground" />
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{product.category}</span>
            </div>
            <h3 className="font-heading font-semibold mb-2">{product.title}</h3>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-heading font-bold text-gradient">{product.price}</span>
              <button className="flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                Acheter <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/catalogue" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          Voir le catalogue complet <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default CatalogueSection;
