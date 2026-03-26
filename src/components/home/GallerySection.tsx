import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

const gallery = [
  { title: "Refonte e-commerce", color: "from-blue-600 to-cyan-500", span: "col-span-2 row-span-2" },
  { title: "Logo Startup", color: "from-purple-600 to-pink-500", span: "" },
  { title: "Campagne Social", color: "from-green-600 to-teal-500", span: "" },
  { title: "Site Vitrine", color: "from-orange-600 to-yellow-500", span: "col-span-2" },
  { title: "Vidéo Promo", color: "from-red-600 to-pink-500", span: "" },
  { title: "Dashboard App", color: "from-indigo-600 to-blue-500", span: "" },
];

const GallerySection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-4">
      <SectionHeading badge="Portfolio" title="Nos réalisations" subtitle="Découvrez quelques-uns de nos projets récents." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[180px]">
        {gallery.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`${item.span} rounded-2xl bg-gradient-to-br ${item.color} relative overflow-hidden group cursor-pointer`}
          >
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-heading font-semibold text-sm">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
