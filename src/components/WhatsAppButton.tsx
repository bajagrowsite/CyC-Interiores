import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/526862482508"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-[60] bg-white border border-gray-100 p-4 shadow-xl text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle size={24} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-sans text-[10px] tracking-widest uppercase ml-0 group-hover:ml-3">
        Consulta WhatsApp
      </span>
    </motion.a>
  );
}
