import { motion } from "framer-motion";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, gradient = true }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
        {badge}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${gradient ? "text-gradient" : ""}`}>
      {title}
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
