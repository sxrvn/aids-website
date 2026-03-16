import { motion } from "framer-motion";
import {
  chiefPatron, patrons, conferenceDirector, advisoryCommittee,
  conveners, coConveners, coordinators, organizingCommittee,
} from "@/data/conferenceData";
import { Crown, Users, BookOpen, UserCheck, User, Star } from "lucide-react";

interface PersonCardProps {
  name: string;
  title: string;
  accent?: boolean;
}

const PersonCard = ({ name, title, accent }: PersonCardProps) => (
  <div
    className="rounded-xl p-4 text-center card-hover cursor-default"
    style={
      accent
        ? {
            background: "rgba(30,100,255,0.1)",
            border: "1.5px solid rgba(91,200,255,0.5)",
            boxShadow: "0 0 24px rgba(30,120,255,0.15), 0 0 60px rgba(30,120,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",
          }
        : {
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(100,180,255,0.18)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 4px 24px rgba(0,80,200,0.05), inset 0 1px 0 rgba(255,255,255,0.05)",
          }
    }
  >
    <div
      className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-lg"
      style={
        accent
          ? {
              background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
              color: "#fff",
              boxShadow: "0 0 16px rgba(30,127,255,0.4)",
            }
          : {
              background: "rgba(30,120,255,0.2)",
              color: "#5bc8ff",
              boxShadow: "0 0 12px rgba(30,120,255,0.2)",
            }
      }
    >
      {name.replace(/^(Dr\.|Prof\.|Hon\s|Adv\s)+/i, '').trim().charAt(0).toUpperCase()}
    </div>
    <p
      className="font-bold leading-snug"
      style={{
        color: accent ? "#fff" : "#e8f4ff",
        fontSize: "13.5px",
        letterSpacing: "-0.1px",
        background: accent ? "linear-gradient(135deg, #5bc8ff, #1a7fff)" : "none",
        WebkitBackgroundClip: accent ? "text" : "border-box",
        WebkitTextFillColor: accent ? "transparent" : "inherit",
      }}
    >
      {name}
    </p>
    <p
      className="mt-1 leading-snug"
      style={{
        color: accent ? "rgba(180,210,255,0.7)" : "rgba(160,200,255,0.45)",
        fontSize: "11px",
        fontWeight: 300,
      }}
    >
      {title}
    </p>
  </div>
);

const Committee = () => (
  <section id="committee" className="section-padding" style={{ background: "#020b1a" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">People</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Conference Committee</h2>
      </motion.div>

      {/* Chief Patron */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <Crown size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Chief Patron</h3>
        </div>
        <div className="max-w-[240px] mx-auto">
          <PersonCard name={chiefPatron.name} title={chiefPatron.title} accent />
        </div>
      </motion.div>

      {/* Patrons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <Users size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Patrons</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {patrons.map((p, i) => <PersonCard key={i} name={p.name} title={p.title} />)}
        </div>
      </motion.div>

      {/* Conference Director */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <Star size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Conference Director</h3>
        </div>
        <div className="max-w-[240px] mx-auto">
          <PersonCard name={conferenceDirector.name} title={conferenceDirector.title} accent />
        </div>
      </motion.div>

      {/* Conveners & Coordinators */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <UserCheck size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Conveners &amp; Coordinators</h3>
        </div>

        <div className="mb-8">
          <p className="text-center mb-4" style={{ color: "rgba(100,180,255,0.7)", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Conveners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {conveners.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-center mb-4" style={{ color: "rgba(100,180,255,0.7)", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Co-Conveners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {coConveners.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>

        <div>
          <p className="text-center mb-4" style={{ color: "rgba(100,180,255,0.7)", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Coordinators</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {coordinators.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>
      </motion.div>

      {/* Advisory */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <BookOpen size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Advisory Committee</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {advisoryCommittee.map((a, i) => (
            <PersonCard key={i} name={a.name} title={a.affiliation} />
          ))}
        </div>
      </motion.div>

      {/* Organizing */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-2 mb-5 justify-center">
          <User size={18} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "16px", letterSpacing: "-0.1px" }}>Organizing Committee</h3>
        </div>
        <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
          {organizingCommittee.map((name, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full cursor-default transition-all duration-300"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "rgba(180,210,255,0.8)",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(100,180,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(100,180,255,0.4)";
                (e.currentTarget as HTMLSpanElement).style.color = "#fff";
                (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(100,180,255,0.15)";
                (e.currentTarget as HTMLSpanElement).style.color = "rgba(180,210,255,0.8)";
                (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Committee;
