import { IMAGES } from "@/src/constants";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const metrics = [
    { label: "Años de Trayectoria", value: "2+" },
    { label: "Establecido", value: "2023" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-brand-cream pt-20 grid grid-cols-12 gap-0">
      {/* Left Column: Text & Content */}
      <div className="col-span-12 lg:col-span-12 xl:col-span-5 p-8 md:p-12 lg:p-20 flex flex-col justify-center border-r border-gray-200 z-10 relative bg-brand-cream">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-6 flex items-center gap-4"
        >
          <span className="w-12 h-[1px] bg-brand-gold" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">Est. 2023</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl text-brand-black mb-8 leading-[1.1] font-serif"
        >
          Diseño que <br /><span className="serif-italic">redefine</span> su hogar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-gray-700 mb-12 max-w-md leading-relaxed"
        >
          Especialistas en Interiorismo de Lujo y Diseño Residencial. Convertimos metros cuadrados en espacios de confort inigualable.
        </motion.p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {metrics.map((metric, index) => (
             <motion.div
               key={metric.label}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 + index * 0.1 }}
               className="metric-card"
             >
               <div className="text-3xl font-serif text-brand-gold font-bold mb-2">{metric.value}</div>
               <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-medium">{metric.label}</div>
             </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <a
            href="#contacto"
            className="px-8 md:px-12 py-4 md:py-5 bg-brand-black text-white font-bold tracking-[0.2em] uppercase hover:bg-brand-gold transition-all duration-300 transform text-center"
          >
            Consulta de Diseño
          </a>
        </motion.div>
      </div>

      {/* Right Column: Visual/Background */}
      <div className="col-span-12 xl:col-span-7 relative h-[50vh] xl:h-auto overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-brand-cream/10 z-10" />
          <img
            src={IMAGES.HERO}
            alt="Luxury Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
