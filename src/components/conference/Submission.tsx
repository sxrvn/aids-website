import { motion } from "framer-motion";
import { contactInfo, registrationFees, submissionGuidelines } from "@/data/conferenceData";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";

const Submission = () => (
  <section id="submission" className="section-padding" style={{ background: "rgb(3,13,31)" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Call for Papers</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Submit Your Research</h2>
        <p
          className="mt-4 max-w-xl mx-auto"
          style={{ color: "rgba(180,210,255,0.5)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
        >
          Research scholars, UG, PG students of engineering, MCA, and other Computer / IT / Data Science / AI related departments are invited to submit.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
        {/* Fees & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <h3
            className="font-bold mb-6"
            style={{ color: "#e8f4ff", fontSize: "16px", letterSpacing: "-0.1px" }}
          >
            Registration Fees
          </h3>
          <div className="space-y-1 mb-8">
            {registrationFees.map((f, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3.5"
                style={{
                  borderBottom: i === registrationFees.length - 1 ? "none" : "1px solid rgba(100,180,255,0.1)",
                }}
              >
                <span style={{ color: "rgba(180,210,255,0.8)", fontSize: "13px", fontWeight: 300 }}>
                  {f.category}
                </span>
                <span
                  className="font-bold"
                  style={{ color: "#5bc8ff", fontSize: "15px", letterSpacing: "0.5px" }}
                >
                  {f.fee}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a
              href={contactInfo.cmtLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white transition-transform hover:scale-[1.02] active:scale-95"
              style={{
                fontSize: "13px",
                letterSpacing: "0.5px",
                background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                boxShadow: "0 0 24px rgba(30,127,255,0.3)",
              }}
            >
              <ExternalLink size={16} strokeWidth={2} />
              Submit via Microsoft CMT
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
            <p
              className="text-center break-all"
              style={{ color: "rgba(120,170,255,0.45)", fontSize: "11px", letterSpacing: "1px" }}
            >
              All submissions are securely managed by Microsoft CMT.
            </p>
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          <h3
            className="font-bold mb-6"
            style={{ color: "#e8f4ff", fontSize: "16px", letterSpacing: "-0.1px" }}
          >
            Submission Guidelines
          </h3>
          <div className="space-y-3.5 max-h-[340px] overflow-y-auto pr-2" style={{ scrollbarColor: "rgba(30,127,255,0.25) transparent" }}>
            {submissionGuidelines.map((g, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 size={16} style={{ color: "#00c8b4" }} className="shrink-0 mt-0.5" />
                <p style={{ color: "rgba(180,210,255,0.6)", fontSize: "12px", fontWeight: 300, lineHeight: 1.6 }}>
                  {g}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Submission;
