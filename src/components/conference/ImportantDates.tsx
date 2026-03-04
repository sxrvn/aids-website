import { motion } from "framer-motion";
import { importantDates } from "@/data/conferenceData";
import { FileText, CheckCircle, Camera, UserPlus, Calendar } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={20} />,
  CheckCircle: <CheckCircle size={20} />,
  Camera: <Camera size={20} />,
  UserPlus: <UserPlus size={20} />,
  Calendar: <Calendar size={20} />,
};

const ImportantDates = () => (
  <section id="dates" className="section-padding bg-background">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Timeline</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Important Dates</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        {importantDates.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-start gap-6 mb-8 last:mb-0"
          >
            {/* Icon dot */}
            <div className={`relative z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl shrink-0 ${
              i === importantDates.length - 1
                ? "accent-gradient text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-card border border-border text-primary"
            }`}>
              {iconMap[item.icon]}
            </div>

            <div className="pt-1 md:pt-3">
              <p className="font-heading font-semibold text-foreground">{item.event}</p>
              <p className="text-muted-foreground text-sm mt-1">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImportantDates;
