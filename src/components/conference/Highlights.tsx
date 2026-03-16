import { motion } from "framer-motion";
import { highlights } from "@/data/conferenceData";
import { Presentation, Trophy, Award, Globe } from "lucide-react";

const iconColors = ["blue", "purple", "green", "teal"] as const;
type IconColor = typeof iconColors[number];

const iconStyleMap: Record<IconColor, { color: string; bg: string; shadow: string }> = {
  blue:   { color: "#5bc8ff", bg: "rgba(30,120,255,0.2)",  shadow: "0 0 16px rgba(30,120,255,0.4)" },
  purple: { color: "#a078ff", bg: "rgba(130,60,255,0.2)",  shadow: "0 0 16px rgba(130,60,255,0.4)" },
  green:  { color: "#4de896", bg: "rgba(30,220,100,0.2)",  shadow: "0 0 16px rgba(30,220,100,0.4)" },
  teal:   { color: "#00c8b4", bg: "rgba(0,200,180,0.2)",   shadow: "0 0 16px rgba(0,200,180,0.4)" },
};

const iconMap: Record<string, React.ReactNode> = {
  Presentation: <Presentation size={26} />,
  Trophy:       <Trophy size={26} />,
  Award:        <Award size={26} />,
  Globe:        <Globe size={26} />,
};

const Highlights = () => (
  <section className="section-padding" style={{ background: "#020b1a" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Why Attend</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Conference Highlights</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {highlights.map((h, i) => {
          const colorKey = iconColors[i % iconColors.length];
          const { color, bg, shadow } = iconStyleMap[colorKey];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl p-6 text-center card-hover cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(100,180,255,0.18)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 4px 24px rgba(0,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ color, background: bg, boxShadow: shadow }}
              >
                {iconMap[h.icon]}
              </div>
              <h3
                className="font-bold mb-2"
                style={{ color: "#e8f4ff", fontSize: "13.5px", letterSpacing: "-0.1px" }}
              >
                {h.title}
              </h3>
              <p style={{ color: "rgba(160,200,255,0.45)", fontSize: "11px", fontWeight: 300, lineHeight: 1.7 }}>
                {h.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Highlights;
