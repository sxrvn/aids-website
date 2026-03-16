import { motion } from "framer-motion";
import { aboutConference, aboutInstitution } from "@/data/conferenceData";
import { GraduationCap, Lightbulb } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding" style={{ background: "rgb(3,13,31)" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">About</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">About the Conference</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8 card-hover"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                color: "#fff",
                background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                boxShadow: "0 0 16px rgba(30,127,255,0.4)",
              }}
            >
              <Lightbulb size={20} strokeWidth={1.8} />
            </div>
            <h3
              className="font-bold"
              style={{ color: "#e8f4ff", fontSize: "15px", letterSpacing: "-0.1px" }}
            >
              ICNIEE 2026
            </h3>
          </div>
          <p style={{ color: "rgba(180,210,255,0.6)", fontSize: "13px", fontWeight: 300, lineHeight: 1.8 }}>
            {aboutConference}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8 card-hover"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                color: "#a078ff",
                background: "rgba(130,60,255,0.2)",
                boxShadow: "0 0 16px rgba(130,60,255,0.3)",
              }}
            >
              <GraduationCap size={20} strokeWidth={1.8} />
            </div>
            <h3
              className="font-bold"
              style={{ color: "#e8f4ff", fontSize: "15px", letterSpacing: "-0.1px" }}
            >
              About the Institution
            </h3>
          </div>
          <p style={{ color: "rgba(180,210,255,0.6)", fontSize: "13px", fontWeight: 300, lineHeight: 1.8 }}>
            {aboutInstitution}
          </p>
          <p
            className="mt-4 italic"
            style={{ color: "rgba(120,170,255,0.5)", fontSize: "12px", fontWeight: 300, lineHeight: 1.6 }}
          >
            "To Become Center of Excellence in Artificial Intelligence &amp; Data Science Upholding Social Values"
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
