import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/conferenceData";

const BrochureViewer = () => {
  const pdfUrl = contactInfo.brochureLink;

  return (
    <section id="brochure" className="section-padding" style={{ background: "rgb(2,11,26)" }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="divider" />
            <span className="eyebrow">Brochure</span>
            <div className="divider" />
          </div>
          <h2 className="section-title">Conference Brochure</h2>
          <p
            className="mt-3 max-w-xl mx-auto"
            style={{ color: "rgba(180,210,255,0.5)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
          >
            Download or view the official ICNIEE 2026 conference brochure for complete details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between p-4"
            style={{
              background: "rgba(3,13,31,0.5)",
              borderBottom: "1px solid rgba(100,180,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <FileText size={18} style={{ color: "#5bc8ff" }} />
              <span className="font-bold" style={{ color: "#e8f4ff", fontSize: "13px", letterSpacing: "0.5px" }}>
                ICNIEE 2026 Brochure
              </span>
            </div>
            <div className="flex gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors"
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "rgba(180,210,255,0.8)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(100,180,255,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(100,180,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180,210,255,0.8)";
                }}
              >
                <ExternalLink size={13} strokeWidth={2} />
                <span className="hidden sm:inline">Open</span>
              </a>
              <a
                href={pdfUrl}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
                style={{
                  fontSize: "11px",
                  letterSpacing: "1px",
                  background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                  boxShadow: "0 0 16px rgba(30,127,255,0.3)",
                }}
              >
                <Download size={13} strokeWidth={2.5} />
                <span className="hidden sm:inline">Download</span>
              </a>
            </div>
          </div>

          {/* Viewer */}
          <div className="w-full aspect-[3/4] md:aspect-[16/10]">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-full border-0"
              title="ICNIEE 2026 Brochure"
              style={{ background: "#f5f5f5" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureViewer;
