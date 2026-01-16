import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#050505] pt-20 pb-10 px-4 border-t border-[#c5a47e]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        <div className="space-y-6">
          <h3 className="text-[#c5a47e] text-2xl font-bold mb-4">Barbearia do Gustavo</h3>
          <p className="text-gray-400 flex items-center gap-3">
            <MapPin className="text-[#c5a47e]" size={20} />
            R. Rio Grande, 1128 - Centro, Esteio - RS, 93280-090
          </p>
          <p className="text-gray-400 flex items-center gap-3">
            <Phone className="text-[#c5a47e]" size={20} />
            (51) 99704-3829
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.instagram.com/barbearia_do_gustavoo/" 
              aria-label="Instagram" 
              className="p-4 bg-white/10 text-white rounded-full border border-white/20 hover:bg-[#E1306C] hover:border-[#E1306C] hover:scale-110 transition-all duration-300 shadow-lg group"
            >
              <Instagram size={24} className="group-hover:animate-pulse" />
            </a>
            
            <a 
              href="#" 
              aria-label="WhatsApp" 
              className="p-4 bg-white/10 text-white rounded-full border border-white/20 hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all duration-300 shadow-lg group"
            >
              <MessageCircle size={24} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Horários */}
        <div className="space-y-6">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="text-[#c5a47e]" size={20} /> Horários
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Segunda - Sexta</span> <span>09:00 - 20:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sábado</span> <span>08:00 - 18:00</span>
            </li>
            <li className="flex justify-between text-[#c5a47e]">
              <span>Domingo</span> <span>Fechado</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden h-64 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.494931869805!2d-51.16567049718329!3d-29.84999720048546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f1443bcf8ef%3A0x3d6649d7088da382!2sBarbearia%20do%20Gustavo!5e0!3m2!1spt-BR!2sbr!4v1768566164239!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Barbearia do Gustavo"
          ></iframe>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-white/5 text-gray-600 text-sm">
        <p>© 2026 Barbearia do Gustavo. Desenvolvido por Vitor Noms.</p>
      </div>
    </footer>
  );
};

export default Footer;