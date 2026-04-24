import { motion } from "motion/react";
import { Phone, Instagram, Mail } from "lucide-react";

export default function ContactInfo() {
  const contacts = [
    {
      icon: <Phone size={24} />,
      label: "Teléfonos",
      items: [
        { label: "+52 686 248 2508", href: "tel:+526862482508" },
        { label: "+52 686 162 7182", href: "tel:+526861627182" },
      ],
    },
    {
      icon: <Instagram size={24} />,
      label: "Instagram",
      items: [
        { label: "@cyc.interiores", href: "https://instagram.com/cyc.interiores" },
      ],
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      items: [
        { label: "cyc.interiores.mxl@gmail.com", href: "mailto:cyc.interiores.mxl@gmail.com" },
      ],
    },
  ];

  return (
    <section id="contacto-info" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-brand-black"
            >
              Contacto
            </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 md:p-12 border border-gray-100 hover:border-brand-gold/30 transition-all duration-500 bg-brand-cream/30 hover:bg-white hover:shadow-2xl group"
            >
              <div className="text-brand-gold mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {contact.icon}
              </div>
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 mb-6">{contact.label}</h3>
              <div className="space-y-4 w-full">
                {contact.items.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href} 
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block w-full py-4 px-2 border border-transparent hover:border-brand-gold/20 hover:bg-brand-cream transition-all duration-300 rounded-sm"
                  >
                    <span className="text-lg md:text-xl font-serif text-brand-black group-hover:text-brand-gold transition-colors block">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
