import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionHeading from "../SectionHeading";

const ContactSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Contact" title="Parlons de votre projet" subtitle="Remplissez le formulaire et notre équipe vous répondra sous 24h." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto p-8 rounded-2xl bg-glass"
      >
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <input type="email" placeholder="Votre email" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <input type="text" placeholder="Sujet" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
          <textarea rows={5} placeholder="Votre message" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-neon transition-all">
            <Send size={18} />
            Envoyer le message
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
