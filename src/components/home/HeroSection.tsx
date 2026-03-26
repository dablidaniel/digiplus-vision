import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

    <div className="container mx-auto px-4 relative z-10 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          Agence Digitale Premium
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
          Transformez vos <span className="text-gradient">idées</span> en{" "}
          <span className="text-gradient-neon">solutions digitales</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Création web, design, marketing digital, IA — nous donnons vie à vos projets avec expertise et créativité.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-neon transition-all"
          >
            Voir nos services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-glass text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            Nous contacter
          </Link>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex gap-8 md:gap-16"
        >
          {[
            { value: "150+", label: "Projets livrés" },
            { value: "50+", label: "Clients satisfaits" },
            { value: "10+", label: "Experts" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
