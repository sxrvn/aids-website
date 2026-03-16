import { motion } from "framer-motion";
import { tracks } from "@/data/conferenceData";
import { Brain, Cpu, Globe, Wifi, BarChart3, Sparkles } from "lucide-react";

const iconVariants = [
  { icon: <Brain size={22} />,    color: "#5bc8ff", bg: "rgba(30,120,255,0.2)",  shadow: "0 0 14px rgba(30,120,255,0.35)" },
  { icon: <Cpu size={22} />,      color: "#a078ff", bg: "rgba(130,60,255,0.2)",  shadow: "0 0 14px rgba(130,60,255,0.35)" },
  { icon: <Globe size={22} />,    color: "#00c8b4", bg: "rgba(0,200,180,0.2)",   shadow: "0 0 14px rgba(0,200,180,0.35)" },
  { icon: <Wifi size={22} />,     color: "#ff6050", bg: "rgba(255,70,50,0.2)",   shadow: "0 0 14px rgba(255,70,50,0.35)" },
  { icon: <BarChart3 size={22} />,color: "#4de896", bg: "rgba(30,220,100,0.2)",  shadow: "0 0 14px rgba(30,220,100,0.35)" },
  { icon: <Sparkles size={22} />, color: "#5bc8ff", bg: "rgba(30,120,255,0.2)",  shadow: "0 0 14px rgba(30,120,255,0.35)" },
];

const Tracks = () => (
  <section id="tracks" className="section-padding" style={{ background: "rgb(3,13,31)" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Topics</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Conference Tracks</h2>
        <p
          className="mt-4 max-w-lg mx-auto"
          style={{ color: "rgba(180,210,255,0.5)", fontSize: "13px", fontWeight: 300, lineHeight: 1.7 }}
        >
          Submit your research across six interdisciplinary areas of AI and Data Science
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {tracks.map((track, i) => {
          const v = iconVariants[i % iconVariants.length];
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl p-5 sm:p-6 card-hover cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(100,180,255,0.18)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ color: v.color, background: v.bg, boxShadow: v.shadow }}
                >
                  {v.icon}
                </div>
                <div className="pt-0.5">
                  <span
                    className="uppercase block mb-0.5"
                    style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "rgba(120,180,255,0.55)" }}
                  >
                    Track {track.id}
                  </span>
                  <h3
                    className="font-bold leading-snug"
                    style={{ color: "#e8f4ff", fontSize: "14px", letterSpacing: "-0.1px" }}
                  >
                    {track.title}
                  </h3>
                </div>
              </div>
              <p
                className="border-t pt-3"
                style={{
                  color: "rgba(160,200,255,0.45)",
                  fontSize: "11px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  borderColor: "rgba(100,180,255,0.1)",
                }}
              >
                {track.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Tracks;
