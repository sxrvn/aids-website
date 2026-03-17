import { socialLinks } from "@/data/conferenceData";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Important Dates", href: "#dates" },
  { label: "Tracks", href: "#tracks" },
  { label: "Committee", href: "#committee" },
  { label: "Submit Paper", href: "#submission" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 sm:py-16 px-4 sm:px-6 md:px-8" style={{ background: "#030d1f" }}>
      {/* Subtle top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(91,200,255,0.5), transparent)" }}
      />
      <div className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-bold text-xl mb-3 tracking-tight text-white">
              ICNIEE
              <span
                className="ml-1"
                style={{
                  background: "linear-gradient(135deg, #5bc8ff, #1a7fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                2026
              </span>
            </p>
            <p style={{ color: "rgba(120,170,255,0.45)", fontSize: "12px", lineHeight: 1.8 }}>
              International Conference on Next Gen AI, Innovation and Engineering Excellence. Reimagining the future.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="font-bold mb-4"
              style={{ color: "rgba(180,210,255,0.7)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}
            >
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="block text-left transition-colors"
                  style={{ color: "rgba(160,200,255,0.45)", fontSize: "12px", fontWeight: 300 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#5bc8ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(160,200,255,0.45)")}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="font-bold mb-4"
              style={{ color: "rgba(180,210,255,0.7)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase" }}
            >
              Follow Us
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: <Facebook size={16} strokeWidth={1.8} />, href: socialLinks.facebook, label: "Facebook" },
                { icon: <Instagram size={16} strokeWidth={1.8} />, href: socialLinks.instagram, label: "Insta" },
                { icon: <Linkedin size={16} strokeWidth={1.8} />, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: <Youtube size={16} strokeWidth={1.8} />, href: socialLinks.youtube, label: "YouTube" },
                { icon: <Twitter size={16} strokeWidth={1.8} />, href: socialLinks.twitter, label: "Twitter" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    color: "rgba(180,210,255,0.5)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(100,180,255,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#5bc8ff";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(91,200,255,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(100,180,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(180,210,255,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(100,180,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(100,180,255,0.1)" }}
        >
          <p style={{ color: "rgba(120,170,255,0.35)", fontSize: "11px", letterSpacing: "0.5px" }}>
            © 2026 ICNIEE. Dept. of E & TC and AI & DS Engineering, Ajeenkya DY Patil School of Engineering, Pune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
