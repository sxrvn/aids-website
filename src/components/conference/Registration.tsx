import { motion } from "framer-motion";
import { contactInfo } from "@/data/conferenceData";
import { ArrowRight } from "lucide-react";

const Registration = () => (
  <section id="register" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 opacity-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent) / 0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="relative z-10 container-narrow text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Ready to Present Your Research?
        </h2>
        <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
          Join researchers, academics, and industry professionals at ICRTAIDS 2026 in Pune, India.
        </p>
        <a
          href={contactInfo.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-10 py-5 rounded-xl accent-gradient text-accent-foreground font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-accent/30"
        >
          Register Now
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Registration;
