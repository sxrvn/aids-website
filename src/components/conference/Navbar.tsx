import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Dates", href: "#dates" },
  { label: "Tracks", href: "#tracks" },
  { label: "Committee", href: "#committee" },
  { label: "Submission", href: "#submission" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <button onClick={() => handleClick("#home")} className="font-heading font-bold text-lg md:text-xl tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>ICRTAIDS</span>
          <span className="text-accent ml-1">2026</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#register")}
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg accent-gradient text-accent-foreground transition-transform hover:scale-105"
          >
            Register
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#register")}
                className="w-full mt-2 px-4 py-3 text-sm font-semibold rounded-lg accent-gradient text-accent-foreground"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
