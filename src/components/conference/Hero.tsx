import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { contactInfo } from "@/data/conferenceData";

const Hero = () => {
  // Conference date for countdown
  const conferenceDate = new Date("2026-04-04T09:00:00+05:30");
  const now = new Date();
  const diff = conferenceDate.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              height: "200%",
            }}
          />
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container-narrow px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-primary-foreground/80">
              4 April 2026 · Pune, India · {days} days to go
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground max-w-4xl mx-auto mb-6">
            International Conference on{" "}
            <span className="text-gradient">Recent Trends in AI & Data Science</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-4 font-light">
            Reimagine the Future: Be Part of AI & Data Science
          </p>

          <p className="text-sm text-primary-foreground/40 max-w-xl mx-auto mb-10">
            Organized by Department of AI & DS, Ajeenkya DY Patil School of Engineering, Pune
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contactInfo.email}?subject=Paper Submission – ICRTAIDS 2026`}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl accent-gradient text-accent-foreground font-semibold text-base transition-transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              <FileText size={18} />
              Submit Paper
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={contactInfo.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/20 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Register Now
            </a>
            <a
              href={contactInfo.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
            >
              <Download size={16} />
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
