import { IMAGES } from "@/src/constants";
import { motion } from "motion/react";
import { Award, Target, Eye } from "lucide-react";

export default function AboutUs() {
  const pillars = [
    {
      icon: <Award className="text-brand-gold" size={32} />,
      title: "Excelencia",
      description: "Cada detalle es curado para transmitir lujo y sofisticación inigualable.",
    },
    {
      icon: <Target className="text-brand-gold" size={32} />,
      title: "Rentabilidad",
      description: "Diseños estratégicamente pensados para maximizar el valor de su propiedad.",
    },
    {
      icon: <Eye className="text-brand-gold" size={32} />,
      title: "Visión",
      description: "Expertos en tendencias que garantizan vigencia y atractivo a largo plazo.",
    },
  ];

  return (
    <section id="nosotros" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-gray-100">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative bg-gray-50 overflow-hidden min-h-[500px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full"
            >
              <img
                src={IMAGES.ABOUT}
                alt="Studio"
                className="w-full h-full object-cover brightness-100 hover:scale-105 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Floating Badge */}
              <div className="absolute top-10 left-10 bg-white p-6 shadow-xl border border-gray-100">
                <div className="text-brand-gold text-2xl font-serif mb-1 uppercase tracking-widest leading-none">Est.</div>
                <div className="text-brand-black text-3xl font-serif mb-1">2023</div>
              </div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-brand-black mb-10 leading-tight"
            >
              Sobre Nosotros
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-700 leading-relaxed mb-12 max-w-xl"
            >
              En CyC Interiores, no solo decoramos espacios; creamos experiencias habitacionales que cautivan. Especializados en el sector de lujo y diseño residencial.
            </motion.p>

            <div className="space-y-10">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="shrink-0 text-brand-gold pt-1">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-2 text-brand-black">{pillar.title}</h4>
                    <p className="text-[11px] text-gray-600 leading-relaxed uppercase tracking-wider">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
