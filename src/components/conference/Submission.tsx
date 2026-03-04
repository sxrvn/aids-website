import { motion } from "framer-motion";
import { contactInfo, registrationFees, submissionGuidelines } from "@/data/conferenceData";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Submission = () => (
  <section id="submission" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Call for Papers</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Submit Your Research</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Research scholars, UG, PG students of engineering, MCA, and other Computer / IT / Data Science / AI related departments are invited to submit.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Fees & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Registration Fees</h3>
          <div className="space-y-4 mb-8">
            {registrationFees.map((f, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                <span className="text-foreground font-medium">{f.category}</span>
                <span className="font-heading font-bold text-primary text-lg">{f.fee}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${contactInfo.email}?subject=Paper Submission – ICRTAIDS 2026`}
              className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl accent-gradient text-accent-foreground font-semibold transition-transform hover:scale-[1.02]"
            >
              <Mail size={18} />
              Submit via Email
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs text-muted-foreground text-center">{contactInfo.email}</p>
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Submission Guidelines</h3>
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {submissionGuidelines.map((g, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Submission;
