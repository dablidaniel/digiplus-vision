import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const articles = [
  { title: "10 tendances web design 2026", summary: "Découvrez les tendances qui définissent le web cette année.", category: "Design", color: "from-purple-600 to-pink-500" },
  { title: "SEO : guide complet pour débutants", summary: "Tout ce qu'il faut savoir pour bien référencer votre site.", category: "SEO", color: "from-blue-600 to-cyan-500" },
  { title: "L'IA au service du marketing", summary: "Comment l'intelligence artificielle révolutionne le marketing digital.", category: "IA", color: "from-green-600 to-teal-500" },
  { title: "WordPress vs solutions headless", summary: "Comparatif des meilleures solutions pour votre projet web.", category: "Dev", color: "from-orange-600 to-yellow-500" },
  { title: "Monétiser TikTok en 2026", summary: "Stratégies concrètes pour gagner de l'argent sur TikTok.", category: "Social", color: "from-red-600 to-pink-500" },
  { title: "Créer un e-commerce rentable", summary: "Les clés pour lancer une boutique en ligne qui convertit.", category: "E-commerce", color: "from-indigo-600 to-violet-500" },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading badge="Blog" title="Derniers articles" subtitle="Insights, guides et actualités du monde digital." />
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="min-w-[300px] md:min-w-[340px] snap-start rounded-2xl bg-gradient-card border border-border overflow-hidden group hover:border-primary/30 transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${article.color} relative`}>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 text-xs font-medium">{article.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.summary}</p>
                <Link to="/blog" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                  Lire <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
