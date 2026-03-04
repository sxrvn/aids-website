import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data/conferenceData";

const BrochureViewer = () => {
  const pdfUrl = contactInfo.brochureLink;

  return (
    <section id="brochure" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Brochure
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-foreground">
            Conference Brochure
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Download or view the official ICRTAIDS 2026 conference brochure for complete details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2 text-foreground">
              <FileText size={18} className="text-accent" />
              <span className="font-heading font-semibold text-sm">ICRTAIDS 2026 Brochure</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  Open
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={pdfUrl} download>
                  <Download size={14} />
                  Download
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full aspect-[3/4] md:aspect-[16/10]">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-full border-0"
              title="ICRTAIDS 2026 Brochure"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrochureViewer;
