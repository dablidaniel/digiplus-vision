import { motion } from "framer-motion";
import { Calendar, Users, Radio, Award } from "lucide-react";
import SectionHeading from "../SectionHeading";

const events = [
  { icon: Users, type: "Atelier", title: "WordPress de A à Z", date: "15 Avril 2026", spots: "20 places" },
  { icon: Radio, type: "Webinaire", title: "SEO avancé en 2026", date: "22 Avril 2026", spots: "Illimité" },
  { icon: Calendar, type: "Live", title: "Q&A Marketing Digital", date: "28 Avril 2026", spots: "Illimité" },
  { icon: Award, type: "Masterclass", title: "IA & Prompt Engineering", date: "5 Mai 2026", spots: "30 places" },
];

const EventsSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Événements" title="Prochains événements" subtitle="Participez à nos ateliers, webinaires et masterclass." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <event.icon size={20} className="text-primary-foreground" />
            </div>
            <div>
              <span className="text-xs text-primary font-semibold uppercase">{event.type}</span>
              <h3 className="font-heading font-semibold mt-1">{event.title}</h3>
              <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                <span>{event.date}</span>
                <span>{event.spots}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
