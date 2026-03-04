import { motion } from "framer-motion";
import { tracks } from "@/data/conferenceData";
import { Brain, Cpu, Globe, Wifi, BarChart3, Sparkles } from "lucide-react";

const icons = [
  <Brain size={24} />, <Cpu size={24} />, <Globe size={24} />,
  <Wifi size={24} />, <BarChart3 size={24} />, <Sparkles size={24} />,
];

const Tracks = () => (
  <section id="tracks" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Topics</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Conference Tracks</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group glass-card rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all cursor-default"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:accent-gradient group-hover:text-accent-foreground transition-all">
                {icons[i]}
              </div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Track {track.id}</span>
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{track.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Tracks;
