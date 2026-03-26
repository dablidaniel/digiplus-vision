import { motion } from "framer-motion";
import { Calendar, Users, Radio, Award, MapPin, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const events = [
  { icon: Users, type: "Atelier", title: "WordPress de A à Z", desc: "Apprenez à créer un site WordPress professionnel en une journée.", date: "15 Avril 2026", time: "10h - 17h", location: "En ligne", spots: "20 places", color: "from-blue-600 to-cyan-500" },
  { icon: Radio, type: "Webinaire", title: "SEO avancé en 2026", desc: "Découvrez les dernières techniques SEO pour dominer Google.", date: "22 Avril 2026", time: "14h - 16h", location: "Zoom", spots: "Illimité", color: "from-green-600 to-teal-500" },
  { icon: Calendar, type: "Live", title: "Q&A Marketing Digital", desc: "Session questions-réponses en direct sur le marketing digital.", date: "28 Avril 2026", time: "19h - 20h30", location: "YouTube Live", spots: "Illimité", color: "from-orange-600 to-yellow-500" },
  { icon: Award, type: "Masterclass", title: "IA & Prompt Engineering", desc: "Masterclass intensive sur l'IA et la création de prompts professionnels.", date: "5 Mai 2026", time: "9h - 18h", location: "En ligne", spots: "30 places", color: "from-purple-600 to-pink-500" },
  { icon: Users, type: "Atelier", title: "E-commerce avec WooCommerce", desc: "Créez votre boutique en ligne de A à Z avec WooCommerce.", date: "12 Mai 2026", time: "10h - 17h", location: "En ligne", spots: "25 places", color: "from-red-600 to-rose-500" },
  { icon: Radio, type: "Webinaire", title: "Monétiser les réseaux sociaux", desc: "Stratégies concrètes pour générer des revenus sur TikTok et YouTube.", date: "20 Mai 2026", time: "15h - 17h", location: "Zoom", spots: "Illimité", color: "from-indigo-600 to-violet-500" },
];

const EventsPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Événements" title="Nos prochains événements" subtitle="Participez à nos ateliers, webinaires et masterclass pour monter en compétences." />

        <div className="space-y-6 max-w-4xl mx-auto mt-12">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all"
            >
              <div className={`w-full sm:w-32 h-32 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shrink-0`}>
                <event.icon size={36} className="text-primary-foreground opacity-60" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">{event.type}</span>
                <h3 className="text-lg font-heading font-bold mt-1 mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.desc}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {event.spots}</span>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow hover:shadow-neon transition-all">
                  S'inscrire <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default EventsPage;
