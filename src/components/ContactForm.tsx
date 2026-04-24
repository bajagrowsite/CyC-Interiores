import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contacto" className="relative py-24 bg-brand-cream border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="bg-white p-8 md:p-20 border border-gray-100 shadow-sm">
          <div className="mb-12 text-center">
             <h2 className="text-4xl md:text-5xl font-serif text-brand-black mb-4">Solicitar Diseño</h2>
             <p className="text-xs text-gray-500 uppercase tracking-widest max-w-md mx-auto">Complete el formulario y nos pondremos en contacto para agendar su consultoría.</p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <div className="flex flex-col gap-3 group">
              <input
                type="text"
                placeholder="Nombre Completo"
                className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-brand-gold focus:outline-hidden transition-all font-sans text-xs placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3 group">
              <input
                type="text"
                placeholder="WhatsApp / Teléfono"
                className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-brand-gold focus:outline-hidden transition-all font-sans text-xs placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3 group">
              <input
                type="text"
                placeholder="Ciudad"
                className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-brand-gold focus:outline-hidden transition-all font-sans text-xs placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3 group">
              <input
                type="text"
                placeholder="Tipo de Propiedad"
                className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-brand-gold focus:outline-hidden transition-all font-sans text-xs placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3 group md:col-span-2">
              <textarea
                rows={4}
                placeholder="Detalles del Proyecto..."
                className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-brand-gold focus:outline-hidden transition-all font-sans text-xs placeholder:text-gray-500 resize-none"
              />
            </div>
            
            <div className="md:col-span-2 pt-6">
              <button
                type="submit"
                className="w-full py-5 bg-brand-black text-white text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-brand-gold transition-all duration-500"
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
