import { motion } from "framer-motion";
import { contactInfo } from "@/data/conferenceData";
import { ArrowRight } from "lucide-react";

const Registration = () => (
  <section id="register" className="section-padding relative overflow-hidden">
    {/* ── Background System ── */}
    <div className="absolute inset-0" style={{ background: "#030d1f" }} />

    {/* Orb 1 — left primary */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 380, height: 380,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,100,255,0.35) 0%, transparent 70%)",
        filter: "blur(80px)",
        top: -100, left: "-10%",
      }}
    />
    {/* Orb 2 — right secondary */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 420, height: 420,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,180,255,0.2) 0%, transparent 70%)",
        filter: "blur(90px)",
        bottom: -150, right: "-10%",
      }}
    />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-50"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="relative z-10 container-narrow text-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card max-w-4xl mx-auto rounded-[32px] p-8 sm:p-14"
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="divider" />
          <span className="eyebrow" style={{ color: "rgba(100,180,255,0.9)" }}>Join Us</span>
          <div className="divider" />
        </div>
        <h2
          className="font-bold text-white mb-4"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.5px" }}
        >
          Ready to Present Your Research?
        </h2>
        <p
          className="max-w-xl mx-auto mb-10"
          style={{ color: "rgba(180,210,255,0.6)", fontSize: "14px", fontWeight: 300, lineHeight: 1.8 }}
        >
          Join researchers, academics, and industry professionals at ICNIEE 2026 in Pune, India. 
          Be part of the next wave of Innovation and Engineering Excellence.
        </p>
        <a
          href={contactInfo.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shimmer group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
          style={{
            fontSize: "15px",
            letterSpacing: "0.5px",
            background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
            boxShadow: "0 0 40px rgba(30,127,255,0.4), 0 12px 32px rgba(0,100,255,0.2)",
          }}
        >
          Register Now
          <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Registration;
