import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import { contactInfo } from "@/data/conferenceData";

import logo1 from "@/assets/Logos/1.png";
import logo2 from "@/assets/Logos/2.png";
import logo3 from "@/assets/Logos/3.png";
import logo4 from "@/assets/Logos/4.png";
import logo5 from "@/assets/Logos/5.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div
      className="rounded-2xl w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(91,200,255,0.25)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 24px rgba(0,80,200,0.15), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      <span
        className="font-bold tabular-nums text-white"
        style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
      >
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span
      className="mt-2 uppercase"
      style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "3px", color: "rgba(120,180,255,0.55)" }}
    >
      {label}
    </span>
  </div>
);

const Hero = () => {
  const conferenceDate = new Date("2026-04-27T09:00:00+05:30");

  const calcTimeLeft = (): TimeLeft => {
    const diff = conferenceDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background System ── */}
      <div className="absolute inset-0" style={{ background: "#020b1a" }} />

      {/* Orb 1 — top-left primary */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 420, height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,100,255,0.45) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: -100, left: -80,
        }}
      />
      {/* Orb 2 — bottom-right secondary */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 360, height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,255,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: -80, right: -60,
        }}
      />
      {/* Orb 3 — mid accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 280, height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,60,220,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "55%", right: "30%",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 container-narrow px-4 sm:px-6 md:px-8 text-center pt-24 sm:pt-28 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-7 sm:mb-9"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(100,180,255,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="pulse-dot shrink-0" />
            <span
              style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "rgba(180,210,255,0.7)", textTransform: "uppercase" }}
            >
              27 & 28 April 2026 &nbsp;·&nbsp; Pune, India
            </span>
          </motion.div>

          {/* Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-10"
          >
            {[logo1, logo2, logo3, logo4, logo5].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Partner Logo ${idx + 1}`}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                style={{ filter: "drop-shadow(0px 0px 8px rgba(255,255,255,0.1))" }}
              />
            ))}
          </motion.div>

          {/* Eyebrow */}
          <div className="eyebrow mb-3" style={{ color: "rgba(100,180,255,0.65)" }}>
            International Conference
          </div>

          {/* Title */}
          <h1
            className="font-bold text-white mb-5 max-w-5xl mx-auto"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
            }}
          >
            Next Gen AI, <span className="text-gradient">Innovation</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span className="text-gradient">and Engineering Excellence</span>
          </h1>

          <p
            className="max-w-2xl mx-auto mb-2 px-2"
            style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.1rem)", color: "rgba(180,210,255,0.5)", fontWeight: 300, lineHeight: 1.7 }}
          >
            Reimagine the Future: Be Part of the Next Wave
          </p>

          <p
            className="max-w-xl mx-auto mb-10 sm:mb-12 px-2"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1px", color: "rgba(120,170,255,0.45)" }}
          >
            Organized by Dept. of AI & DS · Ajeenkya DY Patil School of Engineering, Pune
          </p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-start justify-center gap-3 sm:gap-5 mb-11 sm:mb-13"
          >
            <CountdownBox value={timeLeft.days} label="Days" />
            <span className="text-white/15 text-3xl sm:text-4xl font-light mt-4 sm:mt-5 select-none">:</span>
            <CountdownBox value={timeLeft.hours} label="Hours" />
            <span className="text-white/15 text-3xl sm:text-4xl font-light mt-4 sm:mt-5 select-none">:</span>
            <CountdownBox value={timeLeft.minutes} label="Mins" />
            <span className="text-white/15 text-3xl sm:text-4xl font-light mt-4 sm:mt-5 select-none">:</span>
            <CountdownBox value={timeLeft.seconds} label="Secs" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-xl mx-auto"
          >
            {/* Primary */}
            <a
              href={contactInfo.cmtLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group relative flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-white transition-transform hover:scale-[1.03] active:scale-95"
              style={{
                fontSize: "13px",
                letterSpacing: "0.5px",
                background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                boxShadow: "0 0 32px rgba(30,127,255,0.4), 0 8px 24px rgba(0,100,255,0.25)",
              }}
            >
              <FileText size={16} className="shrink-0" />
              <span>Submit on CMT</span>
              <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary */}
            <a
              href={contactInfo.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-2xl font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
              style={{
                fontSize: "13px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(100,180,255,0.28)",
                backdropFilter: "blur(12px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(91,200,255,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(30,127,255,0.2), inset 0 1px 0 rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(100,180,255,0.28)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.07)";
              }}
            >
              <span>Register Now</span>
              <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Tertiary */}
            <a
              href={contactInfo.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-3.5 rounded-2xl font-medium transition-colors duration-200 active:scale-95"
              style={{
                fontSize: "12px",
                letterSpacing: "0.5px",
                color: "rgba(120,170,255,0.5)",
                border: "1px solid rgba(100,180,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180,210,255,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(100,180,255,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(120,170,255,0.5)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(100,180,255,0.1)";
              }}
            >
              <Download size={13} className="shrink-0" />
              <span>Brochure</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center max-w-3xl mx-auto px-4"
            style={{ fontSize: "11px", color: "rgba(180,210,255,0.4)", lineHeight: 1.6 }}
          >
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #020b1a, transparent)" }}
      />
    </section>
  );
};

export default Hero;
