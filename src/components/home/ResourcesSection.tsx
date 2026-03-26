import { motion } from "framer-motion";
import { Download, FileText, Wrench, Zap } from "lucide-react";
import SectionHeading from "../SectionHeading";

const resources = [
  { icon: Wrench, title: "Outils utilisés", desc: "Stack technique et logiciels que nous maîtrisons au quotidien.", count: "25+" },
  { icon: Download, title: "Kits gratuits", desc: "Templates, checklists et ressources téléchargeables gratuitement.", count: "15+" },
  { icon: FileText, title: "Documentation", desc: "Guides détaillés et tutoriels pour vos projets digitaux.", count: "40+" },
  { icon: Zap, title: "Capacités techniques", desc: "Technologies et frameworks que nous utilisons pour vos projets.", count: "30+" },
];

const ResourcesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Ressources" title="Outils & Ressources" subtitle="Accédez à notre bibliothèque de ressources digitales." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((res, i) => (
          <motion.div
            key={res.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-glass text-center hover:shadow-glow transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <res.icon size={24} className="text-primary-foreground" />
            </div>
            <div className="text-2xl font-heading font-bold text-gradient mb-1">{res.count}</div>
            <h3 className="font-heading font-semibold mb-2">{res.title}</h3>
            <p className="text-sm text-muted-foreground">{res.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
