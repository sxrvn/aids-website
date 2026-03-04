import { motion } from "framer-motion";
import { BookOpen, FileCheck } from "lucide-react";

const Publication = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Publication</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Where Your Work Gets Published</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">Conference Proceedings</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            All accepted and presented papers will be published in conference proceedings with <span className="font-semibold text-foreground">ISBN</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl accent-gradient text-accent-foreground flex items-center justify-center">
              <FileCheck size={24} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">Scopus Indexed</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Selected peer-reviewed papers will be published in a <span className="font-semibold text-foreground">Scopus indexed journal</span> (with additional cost).
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Publication;
