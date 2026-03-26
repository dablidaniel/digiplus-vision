import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const ContactPage = () => (
  <PageLayout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Contact" title="Parlons de votre projet" subtitle="Remplissez le formulaire ou contactez-nous directement. Réponse sous 24h." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "contact@digiplus-service.com" },
              { icon: Phone, label: "Téléphone", value: "+33 1 23 45 67 89" },
              { icon: MapPin, label: "Adresse", value: "Paris, France" },
              { icon: MessageCircle, label: "Support", value: "support@digiplus-service.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-glass"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <info.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{info.label}</div>
                  <div className="text-sm text-muted-foreground">{info.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Map illustration */}
            <div className="rounded-2xl bg-gradient-card border border-border h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-2 opacity-50" />
                <span className="text-sm text-muted-foreground">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 rounded-2xl bg-glass"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <input type="email" placeholder="Votre email" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="tel" placeholder="Téléphone" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                <select className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>Sélectionner un service</option>
                  <option>Création de site web</option>
                  <option>E-commerce</option>
                  <option>SEO</option>
                  <option>Design graphique</option>
                  <option>Marketing digital</option>
                  <option>IA & ChatGPT</option>
                  <option>Autre</option>
                </select>
              </div>
              <input type="text" placeholder="Sujet" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <textarea rows={6} placeholder="Décrivez votre projet..." className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-neon transition-all">
                <Send size={18} /> Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ContactPage;
