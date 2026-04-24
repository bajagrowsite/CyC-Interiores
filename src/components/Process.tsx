import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico y Estrategia",
      description: "Analizamos la propiedad, el perfil del inquilino ideal y los objetivos de rentabilidad.",
    },
    {
      number: "02",
      title: "Concepto Conceptual",
      description: "Definimos la línea estética, paleta de colores y selección curada de piezas.",
    },
    {
      number: "03",
      title: "Ejecución y Logística",
      description: "Coordinamos la adquisición, transporte e instalación de cada elemento.",
    },
    {
      number: "04",
      title: "Estilismo y Entrega",
      description: "Toques finales, fotografía profesional y entrega de la propiedad lista para producir.",
    },
  ];

  return (
    <section id="proceso" className="relative py-24 bg-brand-cream border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-brand-black"
          >
            Proceso
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0 border-l border-t border-gray-100">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border-r border-b border-gray-100 bg-white relative group min-h-[400px] flex flex-col"
            >
              <div className="text-5xl font-serif text-brand-gold opacity-10 mb-8 group-hover:opacity-40 transition-opacity">
                {step.number}
              </div>
              <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-6 text-brand-black">{step.title}</h3>
              <p className="text-[11px] text-gray-600 leading-relaxed uppercase tracking-wider">
                {step.description}
              </p>
              
              <div className="mt-auto pt-10">
                 <div className="w-8 h-[1px] bg-brand-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
