import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Home, Key, Palette, BarChart3, ChevronRight } from "lucide-react";

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Palette size={32} />,
      title: "Cuidado Estético Integral",
      shortDesc: "Diseño conceptual y ejecución de amueblamiento premium.",
      longDesc: "Creamos conceptos visuales únicos adaptados a la identidad de su propiedad. Desde la selección de materiales hasta la curaduría de arte, garantizamos un ambiente que respira lujo en cada rincón.",
    },
    {
      id: 2,
      icon: <Home size={32} />,
      title: "Optimización de Espacios",
      shortDesc: "Máxima funcionalidad sin sacrificar sofisticación.",
      longDesc: "Analizamos el flujo y uso de cada metro cuadrado para asegurar que la propiedad no solo sea bella, sino perfectamente habitable para los usuarios más exigentes.",
    },
    {
      id: 3,
      icon: <BarChart3 size={32} />,
      title: "Asesoría en Estilo y Tendencias",
      shortDesc: "Diseño inspirado en las últimas tendencias globales.",
      longDesc: "Nuestros proyectos se fundamentan en una búsqueda estética rigurosa para asegurar que cada espacio refleje su personalidad y buen gusto.",
    },
    {
      id: 4,
      icon: <Key size={32} />,
      title: "Proyectos 'Llave en Mano'",
      shortDesc: "Gestión absoluta desde el concepto hasta la entrega.",
      longDesc: "Nos encargamos de todo: logística, proveedores, instalación y estilismo final. Usted solo recibe las llaves de una propiedad lista para disfrutar.",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-brand-black"
          >
            Servicios
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setExpandedId(service.id)}
              onMouseLeave={() => setExpandedId(null)}
              className="p-10 border-r border-b border-gray-100 bg-white hover:bg-brand-cream transition-colors duration-500 cursor-pointer flex flex-col group min-h-[350px]"
            >
              <div className="text-brand-gold mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h3 className="text-lg font-serif mb-4 text-brand-black">{service.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed group-hover:text-brand-black transition-colors">
                {service.shortDesc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
