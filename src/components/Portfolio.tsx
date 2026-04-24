import { IMAGES } from "@/src/constants";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    { src: IMAGES.PORTFOLIO[0], category: "Residencial", title: "Estancia Principal", size: "tall" },
    { src: IMAGES.PORTFOLIO[1], category: "Residencial", title: "Modern Studio", size: "small" },
    { src: IMAGES.PORTFOLIO[2], category: "Cocina", title: "Gourmet Kitchen", size: "wide" },
    { src: IMAGES.PORTFOLIO[3], category: "Baño", title: "Zen Bathroom", size: "tall" },
    { src: IMAGES.PORTFOLIO[4], category: "Dormitorio", title: "Serene Bedroom", size: "small" },
    { src: IMAGES.PORTFOLIO[5], category: "Residencial", title: "Living Space", size: "wide" },
    { src: IMAGES.PORTFOLIO[6], category: "Residencial", title: "Minimalist Lounge", size: "small" },
    { src: IMAGES.PORTFOLIO[7], category: "Dormitorio", title: "Master Suite", size: "tall" },
    { src: IMAGES.PORTFOLIO[8], category: "Cocina", title: "Contemporary Kitchen", size: "wide" },
    { src: IMAGES.PORTFOLIO[9], category: "Residencial", title: "Classic Interior", size: "small" },
    { src: IMAGES.PORTFOLIO[10], category: "Residencial", title: "Modern Hall", size: "wide" },
    { src: IMAGES.PORTFOLIO[11], category: "Dormitorio", title: "Guest Room", size: "tall" },
    { src: IMAGES.PORTFOLIO[12], category: "Baño", title: "Spa Style", size: "small" },
    { src: IMAGES.PORTFOLIO[13], category: "Cocina", title: "Island Kitchen", size: "wide" },
  ];

  return (
    <section id="portafolio" className="relative py-24 bg-brand-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-brand-black"
          >
            Portafolio
          </motion.h2>
        </div>

        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group overflow-hidden cursor-pointer bg-gray-50 mb-4 break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(project.src)}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto block object-cover transform scale-100 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 sm:p-12 md:p-24"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
