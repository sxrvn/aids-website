import { motion } from "framer-motion";
import {
  chiefPatron, patrons, advisoryCommittee,
  conveners, coConvener, organizingCommittee,
} from "@/data/conferenceData";
import { Crown, Users, BookOpen, UserCheck, User } from "lucide-react";

const PersonCard = ({ name, title, accent }: { name: string; title: string; accent?: boolean }) => (
  <div className={`rounded-xl p-4 text-center ${accent ? "accent-gradient text-accent-foreground" : "bg-card border border-border"}`}>
    <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-heading font-bold ${
      accent ? "bg-accent-foreground/20 text-accent-foreground" : "bg-primary/10 text-primary"
    }`}>
      {name.charAt(0)}
    </div>
    <p className={`font-heading font-semibold text-sm ${accent ? "" : "text-foreground"}`}>{name}</p>
    <p className={`text-xs mt-1 ${accent ? "opacity-80" : "text-muted-foreground"}`}>{title}</p>
  </div>
);

const Committee = () => (
  <section id="committee" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">People</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Conference Committee</h2>
      </motion.div>

      {/* Chief Patron */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Crown size={18} className="text-accent" />
          <h3 className="font-heading font-semibold text-lg text-foreground">Chief Patron</h3>
        </div>
        <div className="max-w-xs mx-auto">
          <PersonCard name={chiefPatron.name} title={chiefPatron.title} accent />
        </div>
      </motion.div>

      {/* Patrons */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Users size={18} className="text-accent" />
          <h3 className="font-heading font-semibold text-lg text-foreground">Patrons</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {patrons.map((p, i) => <PersonCard key={i} name={p.name} title={p.title} />)}
        </div>
      </motion.div>

      {/* Conveners */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <UserCheck size={18} className="text-accent" />
          <h3 className="font-heading font-semibold text-lg text-foreground">Convener</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {conveners.map((c, i) => <PersonCard key={i} name={c.name} title={c.title} />)}
        </div>
        <div className="mt-4 max-w-xs mx-auto">
          <p className="text-xs text-muted-foreground text-center mb-2 font-semibold uppercase tracking-wider">Co-Convener</p>
          <PersonCard name={coConvener.name} title={coConvener.title} />
        </div>
      </motion.div>

      {/* Advisory */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <BookOpen size={18} className="text-accent" />
          <h3 className="font-heading font-semibold text-lg text-foreground">Advisory Committee</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {advisoryCommittee.map((a, i) => (
            <PersonCard key={i} name={a.name} title={a.affiliation} />
          ))}
        </div>
      </motion.div>

      {/* Organizing */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-2 mb-4 justify-center">
          <User size={18} className="text-accent" />
          <h3 className="font-heading font-semibold text-lg text-foreground">Organizing Committee</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {organizingCommittee.map((name, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-foreground">
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Committee;
