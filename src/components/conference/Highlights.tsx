import { motion } from "framer-motion";
import { highlights } from "@/data/conferenceData";
import { Presentation, Trophy, Award, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Presentation: <Presentation size={28} />,
  Trophy: <Trophy size={28} />,
  Award: <Award size={28} />,
  Globe: <Globe size={28} />,
};

const Highlights = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Attend</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Conference Highlights</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl accent-gradient text-accent-foreground mb-4">
              {iconMap[h.icon]}
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Highlights;
