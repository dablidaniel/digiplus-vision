import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "../SectionHeading";

const testimonials = [
  { name: "Sophie Martin", role: "CEO, TechStartup", text: "DigiPlus a complètement transformé notre présence digitale. Résultat exceptionnel !", rating: 5 },
  { name: "Ahmed Benali", role: "Entrepreneur", text: "Professionnalisme et créativité au rendez-vous. Je recommande vivement leurs formations.", rating: 5 },
  { name: "Claire Dubois", role: "Directrice Marketing", text: "Leur expertise en SEO a boosté notre trafic de 300%. Une équipe formidable.", rating: 5 },
  { name: "Marc Lefèvre", role: "Freelance", text: "Grâce à leur formation freelance, j'ai doublé mes revenus en 3 mois.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Témoignages" title="Ce que disent nos clients" subtitle="La satisfaction de nos clients est notre meilleure carte de visite." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-glass hover:shadow-glow transition-all"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
