import { motion } from "framer-motion";
import { aboutConference, aboutInstitution } from "@/data/conferenceData";
import { GraduationCap, Lightbulb } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">About</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">About the Conference</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg accent-gradient text-accent-foreground flex items-center justify-center">
              <Lightbulb size={20} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">ICRTAIDS 2026</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{aboutConference}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">About the Institution</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{aboutInstitution}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3 italic">
            "To Become Center of Excellence in Artificial Intelligence & Data Science Upholding Social Values"
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
