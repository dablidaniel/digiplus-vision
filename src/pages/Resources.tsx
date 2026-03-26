import { motion } from "framer-motion";
import { Download, FileText, Wrench, BookOpen, Zap, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const tools = [
  "WordPress", "WooCommerce", "Elementor", "Figma", "Canva", "CapCut",
  "Google Analytics", "SEMrush", "Ahrefs", "Mailchimp", "ChatGPT", "Midjourney",
  "Photoshop", "Premiere Pro", "Notion", "Trello",
];

const kits = [
  { title: "Kit Branding Starter", desc: "Templates logo, carte de visite et charte graphique.", format: "AI / PSD" },
  { title: "Checklist SEO Complète", desc: "200+ points à vérifier pour optimiser votre référencement.", format: "PDF" },
  { title: "Templates Social Media", desc: "50 templates Instagram, Facebook et LinkedIn.", format: "Canva" },
  { title: "Guide Prompt ChatGPT", desc: "100 prompts professionnels pour le marketing digital.", format: "PDF" },
];

const guides = [
  { title: "Créer un site WordPress", desc: "Guide pas à pas de l'installation au lancement.", pages: "45 pages" },
  { title: "Lancer son e-commerce", desc: "De la stratégie produit à la première vente.", pages: "60 pages" },
  { title: "Maîtriser le SEO", desc: "Techniques avancées de référencement naturel.", pages: "38 pages" },
  { title: "Marketing sur les réseaux", desc: "Stratégies pour TikTok, Instagram et YouTube.", pages: "52 pages" },
];

const ResourcesPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Ressources" title="Bibliothèque de ressources" subtitle="Outils, guides et ressources pour booster vos projets digitaux." />

        {/* Tools */}
        <div className="mb-20">
          <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2"><Wrench size={20} className="text-primary" /> Outils que nous maîtrisons</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-xl bg-glass text-sm font-medium hover:shadow-glow transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Free Kits */}
        <div className="mb-20">
          <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2"><Download size={20} className="text-primary" /> Kits gratuits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kits.map((kit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold mb-1">{kit.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{kit.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{kit.format}</span>
                    <button className="flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                      Télécharger <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2"><BookOpen size={20} className="text-primary" /> Guides pratiques</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-glass hover:shadow-glow transition-all">
                <h4 className="font-heading font-semibold mb-1">{guide.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{guide.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{guide.pages}</span>
                  <button className="flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                    Accéder <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ResourcesPage;
