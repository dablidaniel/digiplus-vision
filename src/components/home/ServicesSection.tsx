import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Headphones, ShoppingCart, FileText, Palette, Video, Brain, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

const services = [
  { icon: Globe, title: "Création de sites web", desc: "Sites WordPress & vitrines sur mesure, performants et responsive.", color: "from-blue-500 to-cyan-400" },
  { icon: Headphones, title: "Gestion SAV", desc: "Service client professionnel et réactif pour vos utilisateurs.", color: "from-green-500 to-emerald-400" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Boutiques en ligne optimisées pour maximiser vos conversions.", color: "from-orange-500 to-yellow-400" },
  { icon: FileText, title: "Rédaction SEO", desc: "Articles de blog et contenus optimisés pour le référencement.", color: "from-pink-500 to-rose-400" },
  { icon: Palette, title: "Design graphique", desc: "Logos, affiches et visuels qui marquent les esprits.", color: "from-purple-500 to-violet-400" },
  { icon: Video, title: "Montage vidéo", desc: "Production vidéo professionnelle pour vos réseaux sociaux.", color: "from-red-500 to-pink-400" },
  { icon: Brain, title: "IA & ChatGPT", desc: "Consulting IA, création de prompts et automatisation intelligente.", color: "from-indigo-500 to-blue-400" },
  { icon: TrendingUp, title: "Marketing digital", desc: "Stratégies web marketing pour accélérer votre croissance.", color: "from-teal-500 to-cyan-400" },
];

const ServicesSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Nos Services" title="Solutions digitales complètes" subtitle="De la création web au consulting IA, nous couvrons tous vos besoins digitaux." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <service.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
          Voir tous nos services <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
