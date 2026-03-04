import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/data/conferenceData";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding bg-muted/50">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get in Touch</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Contact & Location</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">Address</p>
              <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{contactInfo.phone}</a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{contactInfo.email}</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3 pt-4">
            {[
              { icon: <Facebook size={18} />, href: socialLinks.facebook },
              { icon: <Instagram size={18} />, href: socialLinks.instagram },
              { icon: <Linkedin size={18} />, href: socialLinks.linkedin },
              { icon: <Youtube size={18} />, href: socialLinks.youtube },
              { icon: <Twitter size={18} />, href: socialLinks.twitter },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border h-80"
        >
          <iframe
            title="Ajeenkya DY Patil School of Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.92!3d18.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14c56bfffff%3A0x3c3c3c3c3c3c3c3c!2sAjeenkya%20DY%20Patil%20School%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
