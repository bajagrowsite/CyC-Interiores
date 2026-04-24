import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-brand-gold relative overflow-hidden">
       {/* Decorative Lines */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black/20" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-black/20" />
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-black/20" />
       </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-6 leading-tight">
            ¿Listo para elevar su hogar al <span className="serif-italic">siguiente nivel</span>?
          </h2>
          <p className="text-brand-black tracking-[0.2em] uppercase text-[10px] font-bold">
            Agende su sesión de consultoría estratégica hoy mismo.
          </p>
        </div>
        
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-6 px-8 md:px-12 py-4 md:py-5 bg-brand-black text-white font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-brand-black transition-all duration-300 w-full md:w-auto"
        >
          Iniciar Proyecto
          <ArrowRight size={20} />
        </motion.a>
      </div>
    </section>
  );
}
