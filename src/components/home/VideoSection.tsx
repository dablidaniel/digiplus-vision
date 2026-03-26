import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Découvrez DigiPlus</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 text-gradient">Notre vision en action</h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-card glow-border">
          <div className="aspect-video bg-gradient-card flex items-center justify-center relative">
            {/* Mockup laptop frame */}
            <div className="absolute inset-4 md:inset-8 rounded-xl bg-secondary/50 border border-border overflow-hidden">
              <div className="h-8 bg-muted flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-4 text-xs text-muted-foreground">digiplus-service.com</span>
              </div>
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow cursor-pointer hover:scale-110 transition-transform">
                    <Play size={28} className="text-primary-foreground ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">Regarder notre présentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoSection;
