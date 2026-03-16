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
    className="rounded-lg p-2.5 sm:p-3 text-center card-hover cursor-default"
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
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full mx-auto mb-2 sm:mb-2.5 flex items-center justify-center font-bold text-sm sm:text-base"
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
        fontSize: "12px",
        letterSpacing: "-0.1px",
        background: accent ? "linear-gradient(135deg, #5bc8ff, #1a7fff)" : "none",
        WebkitBackgroundClip: accent ? "text" : "border-box",
        WebkitTextFillColor: accent ? "transparent" : "inherit",
      }}
    >
      {name}
    </p>
    <p
      className="mt-0.5 sm:mt-1 leading-snug"
      style={{
        color: accent ? "rgba(180,210,255,0.7)" : "rgba(160,200,255,0.45)",
        fontSize: "10px",
        fontWeight: 300,
      }}
    >
      {title}
    </p>
  </div>
);

const Committee = () => (
  <section id="committee" className="py-12 sm:py-16" style={{ background: "#020b1a" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-3">
          <div className="divider" />
          <span className="eyebrow" style={{ fontSize: "10px" }}>People</span>
          <div className="divider" />
        </div>
        <h2 className="section-title text-2xl sm:text-3xl">Conference Committee</h2>
      </motion.div>

      {/* Chief Patron */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4 justify-center">
          <Crown size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Chief Patron</h3>
        </div>
        <div className="max-w-[200px] mx-auto">
          <PersonCard name={chiefPatron.name} title={chiefPatron.title} accent />
        </div>
      </motion.div>

      {/* Patrons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4 justify-center">
          <Users size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Patrons</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
          {patrons.map((p, i) => <PersonCard key={i} name={p.name} title={p.title} />)}
        </div>
      </motion.div>

      {/* Conference Director */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4 justify-center">
          <Star size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Conference Director</h3>
        </div>
        <div className="max-w-[200px] mx-auto">
          <PersonCard name={conferenceDirector.name} title={conferenceDirector.title} accent />
        </div>
      </motion.div>

      {/* Conveners & Coordinators */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
        <div className="flex items-center gap-1.5 mb-5 sm:mb-6 justify-center">
          <UserCheck size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Conveners &amp; Coordinators</h3>
        </div>

        <div className="mb-5 sm:mb-6">
          <p className="text-center mb-2.5 sm:mb-3" style={{ color: "rgba(100,180,255,0.7)", fontSize: "9.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Conveners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
            {conveners.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>

        <div className="mb-5 sm:mb-6">
          <p className="text-center mb-2.5 sm:mb-3" style={{ color: "rgba(100,180,255,0.7)", fontSize: "9.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Co-Conveners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
            {coConveners.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>

        <div>
          <p className="text-center mb-2.5 sm:mb-3" style={{ color: "rgba(100,180,255,0.7)", fontSize: "9.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Coordinators</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
            {coordinators.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
          </div>
        </div>
      </motion.div>

      {/* Advisory */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4 justify-center">
          <BookOpen size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Advisory Committee</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {advisoryCommittee.map((a, i) => (
            <PersonCard key={i} name={a.name} title={a.affiliation} />
          ))}
        </div>
      </motion.div>

      {/* Organizing */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-1.5 mb-3 sm:mb-4 justify-center">
          <User size={15} style={{ color: "#5bc8ff" }} />
          <h3 className="font-bold whitespace-nowrap" style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.1px" }}>Organizing Committee</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {organizingCommittee.map((name, i) => (
            <span
              key={i}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full cursor-default transition-all duration-300"
              style={{
                fontSize: "10px",
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
