import { motion } from "framer-motion";
import { importantDates } from "@/data/conferenceData";
import { FileText, CheckCircle, Camera, UserPlus, Calendar } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  FileText:    <FileText size={18} />,
  CheckCircle: <CheckCircle size={18} />,
  Camera:      <Camera size={18} />,
  UserPlus:    <UserPlus size={18} />,
  Calendar:    <Calendar size={18} />,
};

const ImportantDates = () => (
  <section id="dates" className="section-padding" style={{ background: "rgb(3,13,31)" }}>
    <div className="container-narrow">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Timeline</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Important Dates</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute top-2 bottom-2 w-px"
          style={{
            left: 24,
            background: "linear-gradient(to bottom, rgba(91,200,255,0.4), rgba(100,180,255,0.1), transparent)",
          }}
        />

        {importantDates.map((item, i) => {
          const isLast = i === importantDates.length - 1;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-5 mb-5 last:mb-0"
            >
              {/* Icon dot */}
              <div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={
                  isLast
                    ? {
                        background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                        boxShadow: "0 0 20px rgba(30,127,255,0.5)",
                        color: "#fff",
                      }
                    : {
                        background: "rgba(30,120,255,0.15)",
                        border: "1px solid rgba(100,180,255,0.2)",
                        boxShadow: "0 0 12px rgba(30,120,255,0.15)",
                        color: "#5bc8ff",
                      }
                }
              >
                {iconMap[item.icon]}
              </div>

              {/* Content card */}
              <div
                className="flex-1 min-w-0 pt-1.5 rounded-2xl px-5 py-4 card-hover"
                style={
                  isLast
                    ? {
                        background: "rgba(30,100,255,0.1)",
                        border: "1.5px solid rgba(91,200,255,0.5)",
                        boxShadow: "0 0 24px rgba(30,120,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(100,180,255,0.18)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 4px 24px rgba(0,80,200,0.08)",
                      }
                }
              >
                <p
                  className="font-semibold leading-snug"
                  style={{ color: "#e8f4ff", fontSize: "13.5px" }}
                >
                  {item.event}
                </p>
                <p
                  className="mt-1 font-bold"
                  style={
                    isLast
                      ? { color: "#5bc8ff", fontSize: "12px", letterSpacing: "0.5px" }
                      : { color: "rgba(120,170,255,0.55)", fontSize: "11px", letterSpacing: "0.5px", textTransform: "uppercase" }
                  }
                >
                  {item.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ImportantDates;
