import { motion } from "framer-motion";
import { BookOpen, FileCheck } from "lucide-react";

const Publication = () => (
  <section className="section-padding" style={{ background: "#020b1a" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Publication</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Where Your Work Gets Published</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
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
              style={{ color: "#5bc8ff", background: "rgba(30,120,255,0.2)", boxShadow: "0 0 16px rgba(30,120,255,0.3)" }}
            >
              <BookOpen size={20} strokeWidth={1.8} />
            </div>
            <h3
              className="font-bold whitespace-nowrap"
              style={{ color: "#e8f4ff", fontSize: "14px", letterSpacing: "-0.1px" }}
            >
              Conference Proceedings
            </h3>
          </div>
          <p style={{ color: "rgba(180,210,255,0.5)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}>
            All accepted and presented papers will be published in conference proceedings with <span style={{ color: "#e8f4ff", fontWeight: 600 }}>ISBN</span>.
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
              style={{ color: "#a078ff", background: "rgba(130,60,255,0.2)", boxShadow: "0 0 16px rgba(130,60,255,0.3)" }}
            >
              <FileCheck size={20} strokeWidth={1.8} />
            </div>
            <h3
              className="font-bold whitespace-nowrap"
              style={{ color: "#e8f4ff", fontSize: "14px", letterSpacing: "-0.1px" }}
            >
              Scopus Indexed
            </h3>
          </div>
          <p style={{ color: "rgba(180,210,255,0.5)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}>
            Selected peer-reviewed papers will be published in a <span style={{ color: "#e8f4ff", fontWeight: 600 }}>Scopus indexed journal</span> (with additional cost).
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Publication;
