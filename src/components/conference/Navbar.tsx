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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(3,13,31,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(100,180,255,0.12)",
              boxShadow: "0 4px 24px rgba(0,20,80,0.4)",
            }
          : {}
      }
    >
      <div className="container-narrow flex items-center justify-between h-14 sm:h-16 md:h-20 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <button
          onClick={() => handleClick("#home")}
          className="font-bold text-base sm:text-lg tracking-tight"
        >
          <span className="text-white">ICNIEE</span>
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
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="px-3 py-2 rounded-lg transition-all duration-200"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "rgba(180,210,255,0.55)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#e8f4ff";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(100,180,255,0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(180,210,255,0.55)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#register")}
            className="btn-shimmer ml-2 px-4 py-2 rounded-lg font-bold text-white transition-transform hover:scale-105 active:scale-95"
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
              boxShadow: "0 0 20px rgba(30,127,255,0.35)",
            }}
          >
            Register
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors btn-touch"
          style={{ color: "rgba(180,210,255,0.7)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(3,13,31,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(100,180,255,0.12)",
            }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="flex items-center w-full text-left px-4 py-3.5 rounded-xl transition-colors border-l-2 border-transparent"
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(180,210,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(30,127,255,0.07)";
                    (e.currentTarget as HTMLButtonElement).style.borderLeftColor = "rgba(91,200,255,0.5)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#e8f4ff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.borderLeftColor = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(180,210,255,0.6)";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <button
                  onClick={() => handleClick("#register")}
                  className="btn-shimmer w-full py-3.5 rounded-xl font-bold text-white"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, #1a7fff, #5bc8ff)",
                    boxShadow: "0 0 20px rgba(30,127,255,0.3)",
                  }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
