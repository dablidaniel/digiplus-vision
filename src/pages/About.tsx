import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Shield, Users, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Target, title: "Excellence", desc: "Nous visons la perfection dans chaque projet que nous réalisons." },
  { icon: Eye, title: "Innovation", desc: "Nous adoptons les dernières technologies pour rester à la pointe." },
  { icon: Heart, title: "Passion", desc: "Chaque projet est porté par notre passion pour le digital." },
  { icon: Shield, title: "Confiance", desc: "Transparence et honnêteté sont au cœur de notre relation client." },
  { icon: Users, title: "Collaboration", desc: "Nous travaillons main dans la main avec nos clients." },
  { icon: Award, title: "Qualité", desc: "Des livrables de qualité premium, sans compromis." },
];

const milestones = [
  { year: "2020", event: "Création de DigiPlus Service" },
  { year: "2021", event: "50 premiers clients accompagnés" },
  { year: "2022", event: "Lancement des formations en ligne" },
  { year: "2023", event: "Expansion vers le consulting IA" },
  { year: "2024", event: "100+ projets livrés" },
  { year: "2025", event: "Lancement du catalogue de produits digitaux" },
  { year: "2026", event: "Équipe de 10+ experts" },
];

const AboutPage = () => (
  <PageLayout>
    {/* Hero */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading badge="À Propos" title="Notre histoire, votre succès" subtitle="Découvrez l'équipe et la vision derrière DigiPlus Service." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-heading font-bold mb-4">Notre Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Démocratiser l'accès aux solutions digitales de qualité. Nous croyons que chaque entreprise, quelle que soit sa taille, mérite une présence digitale exceptionnelle.
            </p>
            <h3 className="text-2xl font-heading font-bold mb-4">Notre Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Accompagner les entrepreneurs et entreprises dans leur transformation digitale en fournissant des services de qualité premium, des formations pratiques et des outils innovants.
            </p>
            <h3 className="text-2xl font-heading font-bold mb-4">Pourquoi nous choisir ?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Notre approche unique combine expertise technique, créativité et engagement envers la satisfaction client. Nous ne livrons pas simplement des projets, nous construisons des partenariats durables.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <h3 className="text-2xl font-heading font-bold mb-6">Notre Parcours</h3>
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-16 shrink-0 text-right">
                    <span className="text-sm font-heading font-bold text-gradient">{m.year}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gradient-primary mt-1.5 shrink-0 relative">
                    {i < milestones.length - 1 && <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />}
                  </div>
                  <p className="text-sm text-muted-foreground">{m.event}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-heading font-bold text-center mb-10">Nos Valeurs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-glass text-center hover:shadow-glow transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <v.icon size={22} className="text-primary-foreground" />
              </div>
              <h4 className="font-heading font-semibold mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default AboutPage;
