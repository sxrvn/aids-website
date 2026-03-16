import { motion } from "framer-motion";
import { contactInfo, socialLinks } from "@/data/conferenceData";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding" style={{ background: "rgb(2,11,26)" }}>
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="divider" />
          <span className="eyebrow">Get in Touch</span>
          <div className="divider" />
        </div>
        <h2 className="section-title">Contact &amp; Location</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact info list */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {[
            { icon: <MapPin size={18} strokeWidth={1.8} />, label: "Address", value: contactInfo.address, href: undefined },
            { icon: <Phone size={18} strokeWidth={1.8} />, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
            { icon: <Mail size={18} strokeWidth={1.8} />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
          ].map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="flex gap-4 p-5 rounded-2xl glass-card card-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ color: "#5bc8ff", background: "rgba(30,120,255,0.2)", boxShadow: "0 0 16px rgba(30,120,255,0.3)" }}
              >
                {icon}
              </div>
              <div>
                <p
                  className="font-bold mb-1"
                  style={{ color: "rgba(180,210,255,0.5)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="transition-colors block"
                    style={{ color: "#e8f4ff", fontSize: "14px", fontWeight: 600, letterSpacing: "0.5px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#5bc8ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#e8f4ff")}
                  >
                    {value}
                  </a>
                ) : (
                  <p style={{ color: "rgba(180,210,255,0.7)", fontSize: "13px", fontWeight: 300, lineHeight: 1.6 }}>
                    {value}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="flex flex-wrap gap-3 pt-3">
            {[
              { icon: <Facebook size={18} strokeWidth={1.8} />, href: socialLinks.facebook, label: "Facebook" },
              { icon: <Instagram size={18} strokeWidth={1.8} />, href: socialLinks.instagram, label: "Instagram" },
              { icon: <Linkedin size={18} strokeWidth={1.8} />, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: <Youtube size={18} strokeWidth={1.8} />, href: socialLinks.youtube, label: "YouTube" },
              { icon: <Twitter size={18} strokeWidth={1.8} />, href: socialLinks.twitter, label: "Twitter" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 glass-card"
                style={{ color: "rgba(180,210,255,0.5)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#5bc8ff";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(91,200,255,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(30,120,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180,210,255,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-default)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,80,200,0.1), inset 0 1px 0 rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
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
          className="rounded-2xl overflow-hidden h-64 sm:h-80 md:h-auto md:min-h-[400px]"
          style={{
            border: "1px solid rgba(100,180,255,0.18)",
            boxShadow: "0 8px 32px rgba(0,20,60,0.5)",
            filter: "brightness(0.8) contrast(1.1) sepia(0.2) hue-rotate(180deg)", /* Deep dark blue map trick */
          }}
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
