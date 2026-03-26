import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const formations = [
  { title: "WordPress Mastery", price: "49€", level: "Débutant", duration: "12h", color: "from-blue-600 to-cyan-500" },
  { title: "Web Marketing Pro", price: "69€", level: "Intermédiaire", duration: "15h", color: "from-green-600 to-teal-500" },
  { title: "SEO Expert", price: "59€", level: "Avancé", duration: "10h", color: "from-orange-600 to-yellow-500" },
  { title: "E-commerce Rentable", price: "79€", level: "Intermédiaire", duration: "18h", color: "from-purple-600 to-pink-500" },
  { title: "Freelance Success", price: "39€", level: "Débutant", duration: "8h", color: "from-red-600 to-rose-500" },
  { title: "Canva Design Pro", price: "29€", level: "Débutant", duration: "6h", color: "from-pink-600 to-fuchsia-500" },
  { title: "CapCut Montage Vidéo", price: "34€", level: "Débutant", duration: "7h", color: "from-indigo-600 to-blue-500" },
  { title: "IA & Prompt Engineering", price: "89€", level: "Avancé", duration: "14h", color: "from-violet-600 to-purple-500" },
  { title: "TikTok Monétisé", price: "44€", level: "Intermédiaire", duration: "9h", color: "from-cyan-600 to-blue-500" },
  { title: "Développement Personnel", price: "24€", level: "Débutant", duration: "5h", color: "from-emerald-600 to-green-500" },
];

const FormationsSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Formations" title="Apprenez avec les experts" subtitle="Formations complètes pour développer vos compétences digitales." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {formations.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="rounded-2xl bg-gradient-card border border-border overflow-hidden group hover:border-primary/30 transition-all hover:shadow-glow"
          >
            <div className={`h-24 bg-gradient-to-br ${f.color} relative`}>
              <div className="absolute bottom-2 left-3 flex gap-2">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/80 text-[10px] font-medium">
                  <Clock size={10} /> {f.duration}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-background/80 text-[10px] font-medium">
                  <BarChart3 size={10} /> {f.level}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-semibold text-sm mb-3">{f.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-heading font-bold text-gradient">{f.price}</span>
                <button className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Accéder <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/formations" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-neon transition-all">
          Toutes les formations <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
);

export default FormationsSection;
