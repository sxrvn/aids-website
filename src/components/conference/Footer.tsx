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
    <footer className="bg-foreground text-background py-16 px-4 md:px-8">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading font-bold text-xl mb-2">
              ICRTAIDS<span className="text-accent ml-1">2026</span>
            </p>
            <p className="text-background/50 text-sm leading-relaxed">
              International Conference on Recent Trends in Artificial Intelligence and Data Science
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background/70">Quick Links</p>
            <div className="space-y-2">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="block text-sm text-background/50 hover:text-accent transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background/70">Follow Us</p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, href: socialLinks.facebook },
                { icon: <Instagram size={16} />, href: socialLinks.instagram },
                { icon: <Linkedin size={16} />, href: socialLinks.linkedin },
                { icon: <Youtube size={16} />, href: socialLinks.youtube },
                { icon: <Twitter size={16} />, href: socialLinks.twitter },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-background/20 flex items-center justify-center text-background/50 hover:text-accent hover:border-accent/30 transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/30">
            © 2026 ICRTAIDS. Dept. of AI & DS, Ajeenkya DY Patil School of Engineering, Pune. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
