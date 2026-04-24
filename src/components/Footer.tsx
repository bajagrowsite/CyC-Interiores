import { IMAGES } from "@/src/constants";
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={IMAGES.LOGO} 
            alt="CyC Interiores" 
            className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">Estudio de Diseño</div>
        </div>

        <div className="w-full h-[1px] bg-gray-100" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-600">
            <a href="https://instagram.com/cyc.interiores" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-gold transition-colors">WhatsApp</a>
          </div>
          
          <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-medium">
            © 2026 CyC Interiores — Excellence in Interior Design
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-gold hover:text-brand-black transition-colors"
          >
            Volver Arriba
          </button>
        </div>
      </div>
    </footer>
  );
}
