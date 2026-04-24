import { IMAGES } from "@/src/constants";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Contacto", href: "#contacto-info" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 border-gray-100 shadow-sm" : "bg-white/80 backdrop-blur-md py-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src={IMAGES.LOGO} 
            alt="CyC Interiores" 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-medium text-brand-black/60 hover:text-brand-gold hover:border-b hover:border-brand-gold transition-all tracking-[0.2em] uppercase py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-brand-gold text-white px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-brand-black transition-colors"
          >
            Solicitar Diseño
          </a>
        </nav>

        {/* Tablet Nav (Medium/Large screens) */}
        <nav className="hidden md:flex xl:hidden items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[9px] font-medium text-brand-black/60 hover:text-brand-gold transition-all tracking-widest uppercase py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-brand-gold text-white px-4 py-2 text-[9px] uppercase tracking-widest hover:bg-brand-black transition-colors"
          >
            Solicitar Diseño
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-lg md:hidden border-t border-white/10"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif text-white hover:text-brand-gold transition-colors tracking-widest uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="mt-4 bg-brand-gold text-white text-center px-6 py-4 text-xs uppercase tracking-widest font-bold"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Diseño
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
